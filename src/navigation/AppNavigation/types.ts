import {Screens} from '@/const/Navigation.enum';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type AppStackParamList = {
  [Screens.Home]: undefined;
  [Screens.Profile]: undefined;
  [Screens.DetailFeed]: {
    name: string;
    desc: string;
    avatar: string;
    media: string;
  };
};

export type TAppNavigation = NativeStackNavigationProp<AppStackParamList>;
export type TAppRoute<T extends keyof AppStackParamList> = RouteProp<
  AppStackParamList,
  T
>;
