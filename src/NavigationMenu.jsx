import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './pages/HomePage';

const Stack = createStackNavigator();

function NavigationMenu() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomePage} options={{headerShown:(false)}}/>
    </Stack.Navigator>
  );
}

export default NavigationMenu;