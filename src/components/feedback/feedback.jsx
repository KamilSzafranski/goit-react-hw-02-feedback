import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Title, Btn } from './feedback.styled';
import { Fragment } from 'react';

export class Feedback extends Component {
  render() {
    const { test } = this.props;
    return (
      <>
        <Title>Please leave feedback</Title>
        <Btn onClick={test}>good</Btn>
        <Btn onClick={test}>neutral</Btn>
        <Btn onClick={test}>bad</Btn>
      </>
    );
  }
}
