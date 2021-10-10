// import AsyncStorage from '@react-native-community/async-storage';

class Auth {
  saveToken(token: string): PromiseLike<boolean> {
    return new Promise((resolve, reject) => {
      try {
        localStorage.setItem('token', token);
        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  }

  fetchToken(): PromiseLike<string | null> {
    return new Promise((resolve, reject) => {
      try {
        const token = localStorage.getItem('token');
        resolve(token);
      } catch (error) {
        reject(error);
      }
    });
  }

  deleteToken(): PromiseLike<boolean> {
    return new Promise((resolve, reject) => {
      try {
        localStorage.removeItem('token');
        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  }

  saveDeviceId(token: string): PromiseLike<boolean> {
    return new Promise((resolve, reject) => {
      try {
        localStorage.setItem('deviceId', token);
        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  }

  fetchDeviceId(): PromiseLike<string | null> {
    return new Promise((resolve, reject) => {
      try {
        const deviceId = localStorage.getItem('deviceId');
        resolve(deviceId);
      } catch (error) {
        reject(error);
      }
    });
  }
}

export const AuthService = new Auth();
