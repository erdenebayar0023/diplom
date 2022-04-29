import * as React from 'react';
import { View, Text } from 'react-native';

import Home from './views/Home';
import Book from './views/Book';
import Search from './views/Search';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator(); 
export default App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen
                name="Home"
                component={Home}
                options={() => ({
                gestureEnabled: false,
                cardStyleInterpolator: ({current: {progress}}) => {
                    return {
                    cardStyle: {
                        opacity: progress,
                    },
                    };
                },
                })}
            />
            <Stack.Screen
                name="Search"
                component={Search}
                options={() => ({
                gestureEnabled: false,
                cardStyleInterpolator: ({current: {progress}}) => {
                    return {
                    cardStyle: {
                        opacity: progress,
                    },
                    };
                },
                })}
            />
            <Stack.Screen
                name="Book"
                component={Book}
                options={() => ({
                gestureEnabled: false,
                cardStyleInterpolator: ({current: {progress}}) => {
                    return {
                    cardStyle: {
                        opacity: progress,
                    },
                    };
                },
                })}
            />
            </Stack.Navigator>
      </NavigationContainer>
    )
};