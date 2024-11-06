import {Platform} from 'react-native';

export enum Environment {
  Dev = 'dev',
  Staging = 'staging',
  Product = 'production',
}

export const isAndroid = Platform.OS === 'android';
export const isIos = Platform.OS === 'ios';
