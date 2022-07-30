// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/login';
import {UserTabRoutes} from './user.tab.routes';
import AddModal from '../screens/addModal';
import HomeScreen from '../screens/home';
import {Infos} from '../screens/Infos';
import {Perfil} from '../screens/modules/Perfil';
import DataUserScreens from '../screens/dataUser';

const {Navigator, Screen, Group} = createNativeStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name="login" component={Login} />
        <Screen name="Home" component={HomeScreen} />
        <Screen name="DataUser" component={DataUserScreens} />
        <Screen name="Infos" component={Infos} />
        <Screen name="EditarPerfil" component={Perfil} />
        <Group screenOptions={{presentation: 'modal'}}>
          <Screen name="AddModal" component={AddModal} />
        </Group>
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;
