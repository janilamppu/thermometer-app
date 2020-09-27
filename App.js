/*
  Weather Station
  React Native app
  Jani Lamppu
  2020
*/

// module imports
import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';
import moment from 'moment';
//

// component imports
import Time from './components/time';
import Temperature from './components/temperature';
import WeatherDescription from './components/weatherDescription';
import WeatherProperties from './components/weatherProperties';
import WeatherIcon from './components/weatherIcon';
import { loadData } from './components/loadData';
import LastUpdate from './components/lastUpdate';
import { getBatteryLevel } from 'react-native-device-info';
//


const App: () => React$Node = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await loadData();
        response.data.lastUpdate = moment().format('HH:mm');
        setWeatherData(response.data);
      }
      catch(err) {
        console.log('Data fetch error:', err);
      }
    };

    const updateBatteryLevel = async () => {
      try {
        const battery = await getBatteryLevel();
        setBatteryLevel(battery);
      }
      catch(err) {
        console.log('Updating battery level error:', err);
      }
    }; 

    // call functions
    fetchData();
    updateBatteryLevel();

    // set 15min interval for data fetching and updating battery level info
    const updateInterval = setInterval(() => {
      fetchData();
      updateBatteryLevel();
    }, 900000);

    // cleanup 
    return () => {
      clearInterval(updateInterval);
    }
  }, []);


  const [weatherData, setWeatherData] = useState({});
  const [showLastUpdated, setShowLastUpdated] = useState(false);
  const [batteryLevel, setBatteryLevel] = useState(1);

  const toggleLastUpdated = () => {
    setShowLastUpdated(!showLastUpdated);
  };

  return (
    <>
      <StatusBar hidden={true} barStyle="dark-content" />
      <View style={[styles.container, getBackgroundColorBasedOnBattery(batteryLevel)]}>
        <WeatherIcon icon={weatherData.icon} onLongPress={toggleLastUpdated} />
        <Time />
        <Temperature temp={weatherData.temperature}/>
        <WeatherDescription desc={weatherData.description}/>
        <WeatherProperties weatherData={weatherData} />
        <LastUpdate time={weatherData.lastUpdate} batteryLevel={batteryLevel} show={showLastUpdated} />
      </View>
    </>
  );
};

const getBackgroundColorBasedOnBattery = batteryLevel => {
  // show red background to indicate low battery level
  if (batteryLevel >= 0.15) {
    return {
      backgroundColor: '#000000'
    }
  }
  else {
    // red
    return {
      backgroundColor: '#FF0000'
    }
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default App;
