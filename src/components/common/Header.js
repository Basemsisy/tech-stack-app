import React from 'react';

import {View, Text, StyleSheet} from 'react-native';


const Header = (props) => {
  return (
    <View style={styles.headerStyle}>
      <Text style={styles.headerTextStyle}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#f8f8f8',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.4,
    elevation: 6
  },
  headerTextStyle: {
    fontSize: 22,
  }
})

export { Header };