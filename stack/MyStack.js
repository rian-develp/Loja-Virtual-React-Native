import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Home } from "../screens/Home/Home";
import { Details } from "../screens/Details/Details";
import { Welcome } from '../screens/Welcome/Welcome';
import { SignUp } from '../screens/SignUp/SignUp';
import { SignIn } from '../screens/SignIn/SignIn';

const Stack = createNativeStackNavigator();
export const MyStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="SignIn">
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="SignUp"
                    component={SignUp}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="SignIn"
                    component={SignIn}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="Details"
                    component={Details} 
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="Welcome"
                    component={Welcome}
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}