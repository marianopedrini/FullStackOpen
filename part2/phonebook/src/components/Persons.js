import Button from './Button';

const Person = ({ filteredPersons, handleDelete }) => {
  return (
    <ul>
      {filteredPersons.map((person) => (
        <li key={person.name} style={{ marginBottom: '10px' }}>
          {person.name} {person.number}
          <br></br>
          <Button handleDelete={() => handleDelete(person.id)} />
        </li>
      ))}
    </ul>
  );
};

export default Person;
