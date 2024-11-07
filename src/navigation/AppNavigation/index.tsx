import React from 'react';
import {TouchableOpacity} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomeScreen} from '@/screens';
import {Profile} from '@/screens/Profile';
import {DetailFeed} from '@/screens/DetailFeed';
import {Screens} from '@/const/Navigation.enum';
import {AppStackParamList} from './types';
import {Svg} from '@/assets/icons';
import {useNavigation} from '@react-navigation/native';

const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppNavigation() {
  const nav = useNavigation();
  return (
    <Stack.Navigator initialRouteName={Screens.Profile}>
      <Stack.Screen name={Screens.Home} component={HomeScreen} />
      <Stack.Screen
        name={Screens.Profile}
        component={Profile}
        options={{
          title: 'Bùi Bách Toàn',
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          headerLeft: () => (
            <TouchableOpacity style={{marginLeft: 10}} onPress={() => {}}>
              <Svg.ArrowLeft />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name={Screens.DetailFeed}
        component={DetailFeed}
        options={{
          title: 'Chi tiết',
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
