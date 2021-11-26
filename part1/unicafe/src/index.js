import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Display = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const positive = (good * 100) / total;
  return (
    <div>
      <p>Good: {good} </p>
      <p>Neutral: {neutral} </p>
      <p>Bad: {bad} </p>
      <p>Total: {total} </p>
      <p>Average: {average} </p>
      <p>Positive: {isNaN(positive) ? 0 : positive} </p>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const rateGood = () => {
    setGood(good + 1);
  };
  const rateNeutral = () => {
    setNeutral(neutral + 1);
  };
  const rateBad = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={rateGood} text="Good" />
      <Button handleClick={rateNeutral} text="Neutral" />
      <Button handleClick={rateBad} text="Bad" />

      <h1>Statistics </h1>
      <Display good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
