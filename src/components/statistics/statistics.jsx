import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { HeaderStatistics, StatsText, Box } from './statistics.styled';
import { Fragment } from 'react';

export class Statistics extends Component {
  render() {
    const { good, neutral, bad, visible } = this.props;
    const total = good + neutral + bad === 0 ? 1 : good + neutral + bad;
    const poistiveFeedback = (good + neutral) / total;
    const displayFeedback = Math.round(poistiveFeedback * 100);

    return (
      <Box visible={visible}>
        <HeaderStatistics>Statistics</HeaderStatistics>
        <StatsText>{`Good:${good}`}:</StatsText>
        <StatsText>{`Neutral:${neutral}`}</StatsText>
        <StatsText>{`Bad:${bad}`}</StatsText>
        <StatsText>{`Total:${good + bad + neutral}`}</StatsText>
        <StatsText>{`Positive feedback: ${displayFeedback} %`}</StatsText>
      </Box>
    );
  }
}
