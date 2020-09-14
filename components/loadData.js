import axios from 'axios';
import Config from 'react-native-config';

export const loadData = async () => {
  const params = {
    headers: {
      'x-api-key': Config.API_KEY
    }
  };
  return await axios.get(Config.API_URL, params);
};