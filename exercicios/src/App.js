/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View } from 'react-native';
import ComponentOne from './components/ComponentOne';
import RandomNumbers from './components/Random'

export default () => {
  return (
    <View>

  <Text> Texto </Text>
      <RandomNumbers />
      <ComponentOne />
    </View>
  );
};