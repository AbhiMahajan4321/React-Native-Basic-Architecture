import { View, Text, StyleSheet } from "react-native"
import { useTheme } from "react-native-paper";


const Signup = () => {

    const {colors} = useTheme()
    const styles = createStyles(colors)

    return (
        <View style={styles.container}>
            <Text style={styles.color}>Signup Screen</Text>
        </View>
    )
}

export default Signup;

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