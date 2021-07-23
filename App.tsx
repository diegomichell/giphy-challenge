import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import GifDetail from './src/screens/gif-detail';
import GifSearchHistory from './src/screens/gif-search-history';
import Home from './src/screens/home';
import configureStore from './src/store/store';

const store = configureStore();
const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <StatusBar style='auto' />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Gif' component={GifDetail} />
            <Stack.Screen name='GifSearchHistory' component={GifSearchHistory} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </Provider>
  );
}

