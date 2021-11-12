import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Dashboard from '../pages/Dashboard';
import UserArea from '../pages/UserArea';
import SinglePost from '../pages/SinglePost';


const AppStack = createNativeStackNavigator();

const AppRoutes: React.FC = () => (
    <AppStack.Navigator>
        <AppStack.Screen name="Dashboard" component={Dashboard} />
        <AppStack.Screen name="UserArea" component={UserArea} />
        <AppStack.Screen name="SinglePost" component={SinglePost} />
    </AppStack.Navigator>
);

export default AppRoutes;