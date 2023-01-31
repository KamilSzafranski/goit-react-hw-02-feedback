import { Feedback } from './feedback/feedback';
import React, { Component } from 'react';
import { Statistics } from 'components/statistics/statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateState = value => {
    return { [value]: this.state[value] + 1 };
  };

  btnEvent = event => {
    const { textContent } = event.target;

    this.setState(this.updateState(textContent));
  };

  render() {
    return (
      <div>
        <Feedback handler={this.btnEvent} />
        <Statistics
          good={this.state.good}
          bad={this.state.bad}
          neutral={this.state.neutral}
        />
      </div>
    );
  }
}
