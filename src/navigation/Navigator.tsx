import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MapScreen from '../screens/MapScreen';
import PermissionsScreen from '../screens/PermissionsScreen';

const Stack = createStackNavigator();

const Navigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: 'white',
                },
            }}>
            <Stack.Screen name="HomeScreen" component={MapScreen} />
            <Stack.Screen
                name="PermissionsScreen"
                component={PermissionsScreen}
            />
        </Stack.Navigator>
    );
};

export default Navigator;
