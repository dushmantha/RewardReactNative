/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ThemeProvider} from './src/theme/Theme';
import {AppRoutes} from './src/navigation/Navigation';
import {Rewards, Inflows, Outflows} from './src/screens';

function App(): JSX.Element {
  const AppStack = createNativeStackNavigator<AppRoutes>();
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <AppStack.Navigator
            screenOptions={{headerShown: false}}
            initialRouteName={'Rewards'}>
            <AppStack.Screen name="Rewards" component={Rewards} />
            <AppStack.Group screenOptions={{presentation: 'modal'}}>
              <AppStack.Screen
                name="Inflows"
                component={Inflows}
                options={{headerShown: false}}
              />
            </AppStack.Group>
            <AppStack.Group screenOptions={{presentation: 'modal'}}>
              <AppStack.Screen
                name="Outflows"
                component={Outflows}
                options={{headerShown: false}}
              />
            </AppStack.Group>
          </AppStack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;
