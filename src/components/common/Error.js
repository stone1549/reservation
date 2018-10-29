// @flow
import React from 'react';
import { View, Text } from 'react-native';
import { BLUEISH } from '../../colors';

export const Error = ({ message }: { message: string }) => {
  return (
    <View style={style.container} >
      <Text>{message}</Text>
    </View>
  );
};

const style = {
  container: {
    flex: 1,
    color: BLUEISH,
  },
};
