import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScreenNames } from "./ScreenNames";

import SplashScreen from "../screens/onBoarding/SplashScreen";
import Login from "../screens/auth/Login";
import Signup from "../screens/auth/Signup";
import ForgotPassword from "../screens/auth/ForgotPassword";

import BottomTabs from './BottomTabs'

import Dashboard from "../screens/dashboard/Dashboard"

const Stack = createNativeStackNavigator()

const StackNavigator = () => {
    return (

        <Stack.Navigator 
            initialRouteName={ScreenNames.SplashScreen}
            screenOptions={{
                headerShown: false
            }}
        >

            <Stack.Screen name={ScreenNames.SplashScreen} component={SplashScreen} />
         
            <Stack.Screen name={ScreenNames.Login} component={Login} />
            <Stack.Screen name={ScreenNames.Signup} component={Signup} />
            <Stack.Screen name={ScreenNames.ForgotPassword} component={ForgotPassword} />

            <Stack.Screen name={ScreenNames.BottomTabs} component={BottomTabs} />

            {/* <Stack.Screen name={ScreenNames.Dashboard} component={Dashboard} /> */}


        </Stack.Navigator>

    )
}

export default StackNavigator;