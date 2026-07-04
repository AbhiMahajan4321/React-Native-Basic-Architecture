import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ScreenNames } from './ScreenNames'
import Dashboard from '../screens/dashboard/Dashboard'
import Media from '../screens/media/Media'
import Trending from '../screens/trending/Trending'
import Profile from '../screens/profile/Profile'

import AppDrawer from './AppDrawer'

import { useTheme } from "react-native-paper";

import { HomeIcon, TrendingUp, User2Icon, VideoIcon } from 'lucide-react-native'




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
                        return <HomeIcon size={22} color={color} />

                    else if (route.name === 'Media')
                        return <VideoIcon size={22} color={color} />

                    else if (route.name === 'Trending')
                        return <TrendingUp size={22} color={color} />

                    else if (route.name === 'Profile')
                        return <User2Icon size={22} color={color} />
                }
            })}
        >

            {/* <Tabs.Screen name={'Dashboard'} component={Dashboard} />
            <Tabs.Screen name={'Media'} component={Media} />
            <Tabs.Screen name={'Trending'} component={Trending} />
            <Tabs.Screen name={'Profile'} component={Profile} /> */}

            <Tabs.Screen name={ScreenNames.Dashboard} component={Dashboard} />

            <Tabs.Screen name={ScreenNames.Media} component={Media} />

            <Tabs.Screen name={ScreenNames.Trending} component={Trending} />

            {/* <Tabs.Screen name={ScreenNames.Profile} component={Profile} /> */}
            <Tabs.Screen name={ScreenNames.Profile} component={AppDrawer} />

        </Tabs.Navigator>
    )
}

export default BottomTabs;