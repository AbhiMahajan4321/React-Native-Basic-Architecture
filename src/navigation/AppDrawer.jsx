import { createDrawerNavigator } from "@react-navigation/drawer"
import { useTheme } from "react-native-paper"
import Profile from '../screens/profile/Profile'
import { ScreenNames } from './ScreenNames'


const Drawer = createDrawerNavigator()

const AppDrawer = () => {
    
    
    return (
        <Drawer.Navigator>

        <Drawer.Screen name={ScreenNames.Profile} component={Profile} />

        </Drawer.Navigator>
    )

}

export default AppDrawer;