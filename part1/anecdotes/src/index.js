import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({ handleChange, text }) => {
  return <button onClick={handleChange}>{text}</button>;
};

const Anecdote = ({ title, anecdote, votes }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{anecdote}</p>
      <p>Has {votes} votes</p>
    </div>
  );
};

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length));

  const changeAnecdote = () => {
    const number = (Math.random() * (anecdotes.length - 1 - 0 + 1)) << 0;
    setSelected(number);
  };

  const vote = () => {
    const points = [...votes];
    points[selected] += 1;
    setVotes(points);
  };

  const indexMostVoted = votes.indexOf(Math.max(...votes));

  return (
    <>
      <Anecdote
        anecdote={props.anecdotes[selected]}
        votes={votes[selected]}
        title="Anecdote of the day"
      />
      <Button handleChange={vote} text="Vote" />
      <Button handleChange={changeAnecdote} text="Next anecdote" />
      <Anecdote
        anecdote={props.anecdotes[indexMostVoted]}
        votes={votes[indexMostVoted]}
        title="Anecdote with most votes"
      />
    </>
  );
};

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));
