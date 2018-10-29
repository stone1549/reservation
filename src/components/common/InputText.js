// @flow
import React from 'react';
import { TextInput, View } from 'react-native';
import { INPUT_GRAY } from '../../colors';

type InputPropsType = { onChangeText: (string) => void, title: string, value: string, style?: any};

export const InputText = ({ onChangeText, title, value, style }: InputPropsType) => {
  const useStyle = style || defaultStyle;

  if (!useStyle.inputContainer) {
    useStyle.inputContainer = defaultStyle.inputContainer;
  }

  if (!useStyle.input) {
    useStyle.input = defaultStyle.input;
  }

  return (
    <View style={useStyle.inputContainer}>
      <TextInput
        autoCorrect={false}
        placeholder={title}
        value={value}
        onChangeText={text => onChangeText(text)}
        style={useStyle.input}
      />
    </View>
  );
};

const defaultStyle = {
  inputContainer: {
    marginTop: 15,
  },
  input: {
    padding: 10,
    backgroundColor: INPUT_GRAY,
    height: 50,
  },
};
