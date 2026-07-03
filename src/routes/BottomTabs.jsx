import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ScreenNames } from './ScreenNames'
import Dashboard from '../screens/dashboard/Dashboard'
import Viral from '../screens/viral/Viral'
import Profile from '../screens/profile/Profile'
import Media from '../screens/media/Media'
import { useTheme } from "react-native-paper";


const Tabs = createBottomTabNavigator()

const BottomTabs = () => {

    const { colors } = useTheme()

    return (
        <Tabs.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: {
                    height: 55
                },

                tabBarActiveTintColor: colors.primary,
                tabBarInactiveTintColor: 'grey',

                tabBarIcon: ({ color }) => {

                    if (route.name === 'Dashboard')
                    return // here will be icons
                    
                    if (route.name === 'Dashboard')
                    return 

                    if (route.name === 'Dashboard')
                    return 
                    
                    if (route.name === 'Dashboard')
                    return 
                }
            })}
        >

            <Tabs.Screen name={ScreenNames.Dashboard} component={Dashboard} />

            <Tabs.Screen name={ScreenNames.Media} component={Media} />

            <Tabs.Screen name={ScreenNames.Viral} component={Viral} />

            <Tabs.Screen name={ScreenNames.Profile} component={Profile} />


        </Tabs.Navigator>
    )
}

export default BottomTabs;