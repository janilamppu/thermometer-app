import React from 'react';
import {
  StyleSheet,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';

const { height, width } = Dimensions.get('window');

const BASE_URL = 'http://openweathermap.org/img/w/';

const WeatherIcon = ({ icon, onLongPress }) => {
  return (
    <TouchableWithoutFeedback onLongPress={onLongPress}>
      <Image
        style={styles.weatherIcon} 
        source={{
        uri: `${BASE_URL}${icon}.png`
        }}
      />
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  weatherIcon: {
    width: width * 0.28,
    height: height * 0.165,
    marginTop: height * 0.025,
  },
});

export default WeatherIcon;
