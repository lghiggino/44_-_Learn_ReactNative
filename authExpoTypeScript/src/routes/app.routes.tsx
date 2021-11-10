import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Dashboard from '../pages/Dashboard';
import UserArea from '../pages/UserArea';
import Gerencia from '../pages/Gerencia';

const AppStack = createNativeStackNavigator();

const AppRoutes: React.FC = () => (
  <AppStack.Navigator>
    <AppStack.Screen name="Dashboard" component={Dashboard} />
    <AppStack.Screen name="Gerencia" component={Gerencia} />
    <AppStack.Screen name="UserArea" component={UserArea} />
  </AppStack.Navigator>
);

export default AppRoutes;