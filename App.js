import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login"/>
        <Stack.Screen name="Signup"/>
        <Stack.Screen name="Home"/>
        <Stack.Screen name="Profile"/>
        <Stack.Screen name="Details"/>
        <Stack.Screen name="Payment"/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
