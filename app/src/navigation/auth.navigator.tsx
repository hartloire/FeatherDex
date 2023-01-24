import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import  AppStack  from './app-routes';
import { SignInScreen, SignUpScreen, ResetPasswordScreen } from '../scenes/auth';

const Stack = createStackNavigator();

export const AuthNavigator = (): React.ReactElement => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name={AppStack.SIGN_IN} component={SignInScreen}/>
    <Stack.Screen name={AppStack.SIGN_UP} component={SignUpScreen}/>
    <Stack.Screen name={AppStack.RESET_PASSWORD} component={ResetPasswordScreen}/>
  </Stack.Navigator>
);