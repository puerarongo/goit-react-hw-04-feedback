import React, { Component } from "react";
import Section from "./section/Section";
import Feedback from "./feedback/Feedback";
import Statistics from "./statistics/Statistics";
import Notification from "./notification/Notification";


class App extends Component {
  state = {
        good: 0,
        neutral: 0,
        bad: 0,
        total: 0,
        percent: 0
  }
  
    //options = ["good", "neutral", "bad"];

    count = e => {
      const { name } = e.currentTarget
      this.setState(prevState => {
          return {[name]: prevState[name] + 1}
      })

      this.countTotalFeedback();
      this.countPositiveFeedbackPercentage();
    };

    countTotalFeedback = () => {
      this.setState(prevState => {
          return { total: prevState.good + prevState.neutral + prevState.bad }
      })
    };

  countPositiveFeedbackPercentage = () => {
    this.setState(prevState => {
      return { percent: Math.round(prevState.good / prevState.total * 100) }
    })
  };

  render() {
    const { good, neutral, bad, total, percent } = this.state;

    return (
      <div>
        <Section title={"Please leave feedback"}>
          <Feedback options={["good", "neutral", "bad"]} onLeaveFeedback={this.count}/>
        </Section>
        {total > 0 ? (
          <Section title={"Statistics"}>
            <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={percent}/>
          </Section>) : (
            <Notification message={"No feedback given!"}/>
          )}
      </div>
    )
  }
}

export default App;