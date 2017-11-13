import React, { Component } from 'react';
import { View } from 'react-native';
import { ApolloProvider } from 'react-apollo';

import client from './apollo/client';

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <View />
      </ApolloProvider>
    );
  }
}
