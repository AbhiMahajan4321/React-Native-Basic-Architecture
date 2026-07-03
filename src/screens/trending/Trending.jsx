import { View, Text, StyleSheet } from "react-native"
import { useTheme } from "react-native-paper";


const Trending = () => {

    const {colors} = useTheme()
    const styles = createStyles(colors)

    return (
        <View style={styles.container}>
            <Text style={styles.color}>Trending Screen</Text>
        </View>
    )
}

export default Trending;

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