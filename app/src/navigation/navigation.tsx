import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type {
    RouteConfig,
    StackNavigationState,
  } from '@react-navigation/core';
  import {
    createStackNavigator,
    StackNavigationEventMap,
    StackNavigationOptions,
  } from '@react-navigation/stack';
  import * as React from 'react';
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";


/* --- NAVIGATION ROUTES --- */
export const SPLASH_SCREEN = "SPLASH";
export const HOME_SCREEN_ROUTE  = "Home";
export const DETAILS_SCREEN_ROUTE = "Details";
export const SIGN_IN_SCREEN_ROUTE = "SignIn"
export const SIGN_UP_SCREEN_ROUTE = "SignUp";
export const RESET_PASSWORD_SCREEN_ROUTE = "ResetPassword";

/* --- STACK PARAMS --- */

export type AppStackParamList = {
    [HOME_SCREEN_ROUTE]: undefined;
    [DETAILS_SCREEN_ROUTE]: undefined;
}

export type AppStackRoutesType = RouteConfig<
  AppStackParamList,
  keyof AppStackParamList,
  StackNavigationState<AppStackParamList>,
  StackNavigationOptions,
  StackNavigationEventMap
>;