import React from 'react';

import { View } from 'react-native';

import { Provider } from 'react-redux';

import { createStore } from 'redux';

import reducers from './reducers';

import {Header} from './components/common';

import LibraryList from './components/LiraryList';


export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{flex: 1}}>
          <Header title="Tech stack"/>
          <LibraryList/>
        </View>
      </Provider>
    );
  }
}