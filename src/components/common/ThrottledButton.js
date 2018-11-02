// @flow
import React from 'react';
import { Text, TouchableHighlight } from 'react-native';
import _ from 'lodash';
import { BLUEISH, GRAYISH, WHITEISH } from '../../colors';

type ThrottledButtonProps = {
  onPress: () => void,
  children: any,
  throttleMs?: number,
  style?: any,
  disabled?: boolean,
};

export const ThrottledButton = ({ onPress, children, throttleMs=500, style, disabled} : ThrottledButtonProps) => {
  const useStyle = style || defaultStyle;
  if (!useStyle.button) {
    useStyle.button = defaultStyle.button;
  }
  if (!useStyle.buttonText) {
    useStyle.buttonText = defaultStyle.buttonText;
  }
  if (!useStyle.disabledStyle) {
    useStyle.disabledStyle = defaultStyle.disabledStyle;
  }

  return (
    <TouchableHighlight
      style={[useStyle.button, disabled ? useStyle.disabledStyle : null]}
      disabled={disabled}
      onPress={_.throttle(onPress, throttleMs)}
    >
      <Text style={useStyle.buttonText}>{children}</Text>
    </TouchableHighlight>
  );
};

const defaultStyle = {
  button: {
    marginTop: 15,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BLUEISH,
    borderRadius: 5,
  },
  buttonText: {
    color: WHITEISH,
    fontSize: 30,
    fontWeight: 'bold',
    lineHeight: 38,
  },
  disabledStyle: {
    backgroundColor: GRAYISH,
  },
};
