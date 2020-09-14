import React from 'react';
import {
  StyleSheet,
  Text,
  Dimensions
} from 'react-native';
const { width } = Dimensions.get('window');

const WeatherDescription = ({ desc}) => {
  return (
    <Text style={styles.weatherDesc}>{desc}</Text>
  );
};

const styles = StyleSheet.create({
  weatherDesc: {
    color: '#FFFFFF',
    fontFamily: 'Oxygen-Regular',
    fontSize: width * 0.08,
  },
});

export default WeatherDescription;
