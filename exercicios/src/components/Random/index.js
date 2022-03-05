import React from 'react';
import { Text } from 'react-native'
import { styles } from './styles.js';

const RandomNumbers = () => {
  return (
      <Text style={styles.RandomNumbers}> ola        
        { Math.random()*100 }
      </Text>
  )}

export default RandomNumbers
