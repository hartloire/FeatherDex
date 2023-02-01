
import {createStackNavigator} from '@react-navigation/stack';
import React, { useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth'
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import { HOME_SCREEN_ROUTE, DETAILS_SCREEN_ROUTE, AppStackParamList, AppStackRoutesType, SIGN_IN_SCREEN_ROUTE } from './navigation';
import SignInScreen from '../screens/auth/SignInScreen';




const appStackRoutes: Array<AppStackRoutesType> = [
    {
        name: HOME_SCREEN_ROUTE,
        component: HomeScreen,
    },
    {
        name: DETAILS_SCREEN_ROUTE,
        component: DetailsScreen,
    },
    {
        name: SIGN_IN_SCREEN_ROUTE,
        component: SignInScreen,
    }
]


const Stack = createStackNavigator<AppStackParamList>();


function AppStack() {
    /*
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    const onAuthStateChanged = (user) => {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
      }, []);
      if (initializing) return null;
    */
      const defaultRoute = (true) ? SIGN_IN_SCREEN_ROUTE : HOME_SCREEN_ROUTE;
  
    return (
        <Stack.Navigator initialRouteName = {defaultRoute}>

            <Stack.Screen
                name        = {SIGN_IN_SCREEN_ROUTE} 
                component   = {SignInScreen}
                options     = {{headerShown: false}} />

            <Stack.Screen 
                name        = {HOME_SCREEN_ROUTE} 
                component   = {HomeScreen} />

        </Stack.Navigator>
    )
}

export default AppStack; 