import react from "react";
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from "./Screens/Welcome";
import SelectCountry from "./Screens/SelectCountry";
import Register from "./Screens/Register";

const Stack = createNativeStackNavigator();

export default function StackNavigator (){
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen name="SelectCountry" component={SelectCountry}/>
                <Stack.Screen name="Register" component={Register}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
};