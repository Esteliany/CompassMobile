import React, {useEffect, useState} from 'react';
import {Platform, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home';
import AddScreens from '../screens/add';
import DataUserScreens from '../screens/dataUser';
import {Infos} from '../screens/Infos';
import {Perfil} from '../screens/modules/Perfil';
import AddModal from '../screens/addModal';

const {Navigator, Screen, Group} = createBottomTabNavigator();

function MyTabs() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 0,
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
        },
      }}>
      <Group screenOptions={{presentation: 'modal'}}>
        <Screen name="AddModal" component={} />
        <Screen name="DataUser" component={DataUserScreens} />
      </Group>
    </Navigator>
  );
}

function NavigationProfile() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 0,
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
        },
      }}>
      <Screen name="Infos" component={Infos} />
      <Screen name="EditarPerfil" component={Perfil} />
    </Navigator>
  );
}

export function UserTabRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 80,
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
        },
      }}>
      <Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Image source={require('../assets/icons/iconHome.png')} />
          ),
        }}
      />
      <Screen
        name="Adduser"
        component={MyTabs}
        options={{
          tabBarIcon: ({color}) => (
            <Image source={require('../assets/icons/Exclude.png')} />
          ),
        }}
      />
      <Screen
        name="Profile"
        component={NavigationProfile}
        options={{
          tabBarIcon: ({color}) => (
            <Image source={require('../assets/icons/iconMenu.png')} />
          ),
        }}
      />
    </Navigator>
  );
}
