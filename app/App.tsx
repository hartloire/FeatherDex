import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import { default as theme } from './theme.json';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppStack from './navigation/app-routes';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer> 
      {
      <ApplicationProvider {...eva} theme={{...eva.dark, ...theme}}>
        <AppStack/>
      </ApplicationProvider>
      }
    </NavigationContainer>
    )
  };

  export default App;