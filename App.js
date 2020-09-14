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
//


const App: () => React$Node = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Data fetch started');
        const response = await loadData();
        response.data.lastUpdate = moment().format('HH:mm');
        setWeatherData(response.data);
      }
      catch(err) {
        console.log('Error:', err);
      }
    };

    // set 15min interval for data fetching
    const updateInterval = setInterval(() => {
      fetchData();
    }, 900000);

    // cleanup 
    return () => {
      clearInterval(updateInterval);
    }
  }, []);

  useEffect(() => {
    // fetch data initially
    const init = async () => {
      const response = await loadData();
      response.data.lastUpdate = moment().format('HH:mm');
      setWeatherData(response.data);
      console.log(response.data);
    };
    try {
      init();
    }
    catch(err) {
      console.log('Initial data load:', err);
    }
  }, []);

  const [weatherData, setWeatherData] = useState({});
  const [showLastUpdated, setShowLastUpdated] = useState(false);

  const toggleLastUpdated = () => {
    setShowLastUpdated(!showLastUpdated);
  };

  return (
    <>
      <StatusBar hidden={true} barStyle="dark-content" />
      <View style={styles.container}>
        <WeatherIcon icon={weatherData.icon} onLongPress={toggleLastUpdated} />
        <Time />
        <Temperature temp={weatherData.temperature}/>
        <WeatherDescription desc={weatherData.description}/>
        <WeatherProperties weatherData={weatherData} />
        <LastUpdate time={weatherData.lastUpdate} show={showLastUpdated} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default App;
