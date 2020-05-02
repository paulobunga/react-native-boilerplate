import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import AuthStack from './AuthStack';
import {useDispatch} from 'react-redux';

const RootStack = createStackNavigator();

function RootNavigationContainer() {
  const dispatch = useDispatch();
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen
          name="AuthStack"
          component={AuthStack}
          options={{headerShown: false}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigationContainer;