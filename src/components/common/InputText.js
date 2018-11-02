// @flow
import React from 'react';
import { TextInput, View } from 'react-native';
import { INPUT_GRAY } from '../../colors';

type InputPropsType = {
  onChangeText: (string) => void,
  title: string,
  value: string,
  autoCapitalize?: string,
  autoFocus?: boolean,
  keyboardType?: string,
  returnKeyType?: string,
  textContentType?: string,
  style?: any,
};

export const InputText = ({ onChangeText, title, value, style, autoCapitalize='none',
                            autoFocus=false, keyboardType='default', returnKeyType='next',
                            textContentType='none' }: InputPropsType) => {
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
        autoCapitalize={autoCapitalize}
        autoFocus={autoFocus}
        keyboardType={keyboardType}
        placeholder={title}
        returnKeyType={returnKeyType}
        textContentType={textContentType}
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
