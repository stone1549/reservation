/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { ResRouter } from  './src/components/ResRouter';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <ResRouter/>
      </ApolloProvider>
    );
  }
}
