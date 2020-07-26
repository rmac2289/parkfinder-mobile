import config2 from './config2';
import AsyncStorage from '@react-native-community/async-storage';

const TokenService = {
  saveAuthToken(token) {
    AsyncStorage.setItem(config2.TOKEN_KEY, token);
  },
  getAuthToken() {
    return AsyncStorage.getItem(config2.TOKEN_KEY);
  },
  clearAuthToken() {
    AsyncStorage.removeItem(config2.TOKEN_KEY);
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken();
  },
};

export default TokenService;