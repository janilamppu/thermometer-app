import React from 'react';
import {
  StyleSheet,
  Text,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const Temperature = ({ temp }) => {
  return (
    <Text style={styles.tempDisplay}>{temp}°C</Text>
  );
};

const styles = StyleSheet.create({
  tempDisplay: {
    color: '#a0a2a5',
    fontSize: width * 0.305,
    fontFamily: 'Oxygen-Regular',
  },
});

export default Temperature;
