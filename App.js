import HomePage from './src/views/HomePage';
import PhotoList from './src/views/PhotoList';
import Photo from './src/views/Photo';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
	return (
    <NavigationContainer>
      <Stack.Navigator>
        
          <Stack.Screen name="List of Albums" component={HomePage}/>
          <Stack.Screen name="List of Photos" component={PhotoList}/>
          <Stack.Screen name="Photo" component={Photo}/>
        
      </Stack.Navigator>
    </NavigationContainer>
	);
}

