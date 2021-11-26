import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const positive = (good * 100) / total;
  return (
    <table>
      <tbody>
        <Statistic text="Good:" value={good} />
        <Statistic text="Neutral:" value={neutral} />
        <Statistic text="Bad:" value={bad} />
        <Statistic text="Total:" value={total} />
        <Statistic text="Average:" value={average} />
        <Statistic text="Positive:" value={isNaN(positive) ? 0 : positive} />
      </tbody>
    </table>
  );
};

const App = () => {
  const [isFeedback, setIsFeedback] = useState(false);
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const rateGood = () => {
    setGood(good + 1);
    setIsFeedback(true);
  };
  const rateNeutral = () => {
    setNeutral(neutral + 1);
    setIsFeedback(true);
  };
  const rateBad = () => {
    setBad(bad + 1);
    setIsFeedback(true);
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={rateGood} text="Good" />
      <Button handleClick={rateNeutral} text="Neutral" />
      <Button handleClick={rateBad} text="Bad" />

      <h1>Statistics </h1>
      {!isFeedback ? (
        'No Feedback given'
      ) : (
        <Statistics good={good} neutral={neutral} bad={bad} />
      )}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
