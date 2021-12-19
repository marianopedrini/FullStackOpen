import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import Notification from './components/Notification';
import PersonForm from './components/PersonForm';
import Person from './components/Person';
import personService from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filteredPersons, setFilteredPersons] = useState(persons);
  const [notification, setNotification] = useState({
    message: null,
    succesfully: true,
  });

  useEffect(() => {
    personService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
      setFilteredPersons(initialPersons);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      persons.some(
        (person) => person.name.toLowerCase() === newName.toLowerCase()
      )
    ) {
      return personService.getAll().then((initialPersons) => {
        let wantedPerson = initialPersons.filter(
          (each) => each.name.toLowerCase() === newName.toLowerCase()
        );
        if (
          window.confirm(
            `${newName} is already added to phonebook, replace the old number with a new one?`
          )
        ) {
          const data = { ...wantedPerson[0], number: newNumber };
          personService
            .update(data.id, data)
            .then((res) => console.log(res))
            .catch((error) => {
              console.log(error);
              setNotification({
                message: error.response.data.error,
                succesfully: false,
              });
            });
          setNotification({
            message: `${newName} has been succesfully updated`,
            succesfully: true,
          });
          setTimeout(() => {
            setNotification({ message: null, succesfully: true });
          }, 5000);
        }
      });
    }

    const personObject = {
      name: newName,
      number: newNumber,
    };

    personService
      .create(personObject)
      .then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setNewName('');
        setNewNumber('');
        setNotification({
          message: `${newName} has been succesfully added`,
          succesfully: true,
        });
        setTimeout(() => {
          setNotification({ message: null, succesfully: true });
        }, 5000);
      })
      .catch((error) => {
        setNotification({
          message: error.response.data.error,
          succesfully: false,
        });
        setTimeout(() => {
          setNotification({ message: null, succesfully: true });
        }, 5000);
        console.log(error.response.data.error);
      });
  };

  const handleChangeName = (e) => {
    setNewName(e.target.value);
  };

  const handleChangeNumber = (e) => {
    setNewNumber(e.target.value);
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();

    let result = persons.filter((person) => {
      let name = person.name.toLowerCase();
      return name.includes(searchTerm);
    });
    setFilteredPersons(result);
  };

  const handleDelete = (id) => {
    let wantedPerson = filteredPersons.filter((person) => person.id === id);
    if (window.confirm(`Delete ${wantedPerson[0].name}`)) {
      personService.remove(id).then((res) => {
        setPersons(persons.map((person) => (person.id !== id ? person : res)));
        const msg = `${wantedPerson[0].name} succesfully deleted!`;
        setNotification({
          message: msg,
          succesfully: true,
        });
        setTimeout(() => {
          setNotification({ message: null, succesfully: true });
        }, 5000);
      });
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleSearch={handleSearch} />
      <h2>Add a new</h2>
      <PersonForm
        handleSubmit={handleSubmit}
        handleChangeName={handleChangeName}
        newName={newName}
        handleChangeNumber={handleChangeNumber}
        newNumber={newNumber}
      />
      <h2>Numbers</h2>
      <Notification notification={notification} />
      <Person filteredPersons={filteredPersons} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
