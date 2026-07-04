import { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native"
import { ScreenNames } from "../../navigation/ScreenNames";

import { useNavigation } from "@react-navigation/native";
import { useTheme } from "react-native-paper";

const SplashScreen = () => {

    const navigation = useNavigation()
    const { colors } = useTheme()
    const styles = createStyles(colors)


    useEffect(() => {

        setTimeout(() => {
            navigation.replace(ScreenNames.Login)
        }, 5000);

    }, [])


    return (
        <View style={styles.container}>
            <Text style={styles.color}>Splash Screen</Text>
        </View>
    )
}

export default SplashScreen;

const createStyles = (colors) => StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    color: {
        color: '#000',
    }

})