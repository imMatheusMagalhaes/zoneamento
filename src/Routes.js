import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import EstadosPage from './EstadosPage';
import CidadesPage from './CidadesPage';


const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#27ae60'
        },
      }}>
        <Stack.Screen
          name="EstadosPage"
          component={EstadosPage}
          options={{
            title: 'Zoneamento'
          }}
        />

        <Stack.Screen
          name="CidadesPage"
          component={CidadesPage}
          options={{
            title: 'Zoneamento'
          }}
        />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;