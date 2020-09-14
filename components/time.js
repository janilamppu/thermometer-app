import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  Dimensions,
} from 'react-native';
import moment from 'moment';
const { width } = Dimensions.get('window');

const Time = () => {
  useEffect(() => {
    // update time every 5s
    const timeInterval = setInterval(() => {
      setTime(moment().format('HH:mm'));
    }, 5000);

    // cleanup
    return () => {
      clearInterval(timeInterval);
    }
  }, []);

  const [time, setTime] = useState(moment().format('HH:mm'));
  return (
    <Text style={styles.timeDisplay}>{time}</Text>
  );
};

const styles = StyleSheet.create({
  timeDisplay: {
    color: '#FFFFFF',
    fontFamily: 'Oxygen-Regular',
    fontSize: width * 0.09,
  },
});

export default Time;
