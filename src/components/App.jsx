import React, { useReducer } from 'react';
import Section from './section/Section';
import Feedback from './feedback/Feedback';
import Statistics from './statistics/Statistics';
import Notification from './notification/Notification';

const feedbackReducer = (state, action) => {
  const { good, neutral, bad } = state;

  switch (action.type) {
    case 'good':
      return { ...state, good: good + 1 };
    case 'neutral':
      return { ...state, neutral: neutral + 1 };
    case 'bad':
      return { ...state, bad: bad + 1 };
    default:
      throw new Error();
  }
};

const App = () => {
  const [feedback, dispatch] = useReducer(feedbackReducer, {
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const { good, neutral, bad } = feedback;
  const total = good + bad + neutral;

  return (
    <div>
      <Section title="Please leave feedback">
        <Feedback options={Object.keys(feedback)} func={dispatch} />
      </Section>
      {total > 0 ? (
        <Section title="Statistics">
          <Statistics good={good} neutral={neutral} bad={bad} total={total} />
        </Section>
      ) : (
        <Notification message="No feedback given!" />
      )}
    </div>
  );
};

export default App;
