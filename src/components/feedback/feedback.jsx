import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Title, Btn } from './feedback.styled';
import { Fragment } from 'react';

export class Feedback extends Component {
  render() {
    const { handler } = this.props;
    return (
      <>
        <Title>Please leave feedback</Title>
        <Btn onClick={handler}>good</Btn>
        <Btn onClick={handler}>neutral</Btn>
        <Btn onClick={handler}>bad</Btn>
      </>
    );
  }
}

Feedback.propTypes = {
  handler: PropTypes.func.isRequired,
};
