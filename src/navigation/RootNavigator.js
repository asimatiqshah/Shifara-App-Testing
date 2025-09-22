import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen.js';
import Tabs from './Tabs.js'; // your bottom tabs
import LoginScreen from '../screens/LoginScreen'; // if you have login
import MyCartScreen from '../screens/MyCartScreen.js';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName='SplashScreen'
            screenOptions={{ headerShown: false }}>
            {/* Splash screen shows first */}
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="MyCartScreen" component={MyCartScreen} />

            {/* Login screen */}
            <Stack.Screen name="LoginScreen" component={LoginScreen} />

            {/* Bottom tabs */}
            <Stack.Screen name="Tabs" component={Tabs} />
        </Stack.Navigator>
    );
};

export default RootNavigator;
