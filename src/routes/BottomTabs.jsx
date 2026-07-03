import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ScreenNames } from './ScreenNames'
import Dashboard from '../screens/dashboard/Dashboard'
import Viral from '../screens/viral/Viral'
import Profile from '../screens/profile/Profile'
import Media from '../screens/media/Media'


const Tabs = createBottomTabNavigator()

const BottomTabs = () => {
    return (
        <Tabs.Navigator>

            <Tabs.Screen name={ScreenNames.Dashboard} component={Dashboard} />

            <Tabs.Screen name={ScreenNames.Media} component={Media} />

            <Tabs.Screen name={ScreenNames.Viral} component={Viral} />

            <Tabs.Screen name={ScreenNames.Profile} component={Profile} />


        </Tabs.Navigator>
    )
}

export default BottomTabs;