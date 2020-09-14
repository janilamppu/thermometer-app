import React from 'react';
import {
  StyleSheet,
  Text,
  Dimensions,
  View,
} from 'react-native';
const { height, width } = Dimensions.get('window');

const LastUpdate = ({time, show}) => {
  if (show) {
    return (
      <View style={styles.root}>
        <Text style={styles.timeDisplay}>Päivitetty viimeksi {time}</Text>
      </View>
    );
  }
  else {
    return null;
  }
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  timeDisplay: {
    color: '#FFFFFF',
    fontFamily: 'Oxygen-Regular',
    fontSize: width * 0.03,
    marginBottom: height * 0.02,
  },
});

export default LastUpdate;
