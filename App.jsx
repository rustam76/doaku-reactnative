/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavigationMenu from './src/NavigationMenu';
import {AppOpenAdProvider} from '@react-native-admob/admob';
function App() {
  return (
    <AppOpenAdProvider
      unitId={'ca-app-pub-8389654504160551/3156750334'}
      options={{
        showOnColdStart: true,
        loadOnDismissed: true,
      }}>
      <NavigationContainer>
        <NavigationMenu />
      </NavigationContainer>
    </AppOpenAdProvider>
  );
}

export default App;
