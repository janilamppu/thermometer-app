import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';

import moment from 'moment';
const { height, width } = Dimensions.get('window');

const WeatherProperties = ({ weatherData }) => {
  return (
    <View style={styles.propContainer}>
      <View style={styles.propRow}>
          <Text style={styles.propTitle}>Tuulen nopeus</Text>
          <Text style={styles.propValue}>{weatherData.windSpeed} m/s</Text>
      </View>
      <View style={styles.propRow}>
          <Text style={styles.propTitle}>Kosteus</Text>
          <Text style={styles.propValue}>{weatherData.humidity} %</Text>
      </View>
      <View style={styles.propRow}>
          <Text style={styles.propTitle}>Auringonnousu</Text>
          <Text style={styles.propValue}>{moment(weatherData.sunrise).format('HH:mm')}</Text>
      </View>
      <View style={styles.propRow}>
          <Text style={styles.propTitle}>Auringonlasku</Text>
          <Text style={styles.propValue}>{moment(weatherData.sunset).format('HH:mm')}</Text>
      </View>
  </View>
  );
};

const styles = StyleSheet.create({
  propTitle: {
    width: width * 0.36,
    marginLeft: width * 0.07,
    color: '#FFFFFF',
    textAlign: 'left',
    fontFamily: 'Oxygen-Regular',
    fontSize: width * 0.05
  },
  propValue: {
    width: width * 0.36,
    marginRight: width * 0.07,
    color: '#FFFFFF',
    textAlign: 'right',
    fontFamily: 'Oxygen-Regular',
    fontSize: width * 0.05
  },
  propContainer: {
    marginTop: height * 0.04,
  },
  propRow: {
    flexDirection: 'row', 
    marginTop: height * 0.02,
  }
});

export default WeatherProperties;
