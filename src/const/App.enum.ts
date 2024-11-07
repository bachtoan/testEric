import {Platform} from 'react-native';

export enum Environment {
  Dev = 'dev',
  Staging = 'staging',
  Product = 'production',
}

export enum StatusCode {
  Success = '200',
}

export const isAndroid = Platform.OS === 'android';
export const isIos = Platform.OS === 'ios';
