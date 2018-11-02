// @flow
import React from 'react';
import { View, Text } from 'react-native';
import { REDISH } from '../../colors';

type ErrorProps = { message: string };

export const Error = (props: ErrorProps) => {
  const { message } = props;
  return (
    <View style={style.container} >
      <Text style={style.message}>{message}</Text>
    </View>
  );
};

const style = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    color: REDISH,
    fontSize: 20,
    lineHeight: 25,
    fontWeight: '600',
  },
};
