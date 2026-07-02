import { View, Text, StyleSheet } from "react-native"
import { useTheme } from "react-native-paper";


const Login = () => {

    const { colors } = useTheme()
    const styles = createStyles(colors)

    return (
        <View style={styles.container}>
            <Text style={styles.color}>Login Screen</Text>
        </View>
    )
}

export default Login;

const createStyles = (colors) => StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    color: {
        color: '#000',
    }
})