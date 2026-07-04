import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native"
import { useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { ScreenNames } from "../../navigation/ScreenNames";

const Login = () => {
    const navigation = useNavigation()

    const { colors } = useTheme()
    const styles = createStyles(colors)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loginLoading, setLoginLoading] = useState(false);

    const disableLoginButton = loginLoading || !email || !password;


    const handleLogin = () => {

        setLoginLoading(true)

        try {

            console.log('email : ', email);
            console.log('password : ', password);


            if (email && password) {

                Alert.alert('Success', 'Login Succesful')

                // navigation.reset({
                //     index: 0,
                //     routes: [{ name: ScreenNames.Dashboard }]
                // });

                navigation.replace(ScreenNames.BottomTabs);
                
                setEmail('')
                setPassword('')

            }


        } catch (err) {
            console.log("err in handleLogin : ", err);
            Alert.alert('Error', err.messasge || 'Login Error');

        } finally {
            setLoginLoading(false)
        }
    }

    return (
        <View style={styles.container}>

            <View style={styles.card}>
                <Text style={styles.header}>Login Screen</Text>

                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Enter your email"
                    placeholderTextColor={'grey'}

                />

                <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Enter your Password"
                    placeholderTextColor={'grey'}

                />


                <TouchableOpacity
                    style={[styles.loginButton,
                    disableLoginButton && styles.loginDisabledButton
                    ]}
                    onPress={handleLogin}
                    disabled={disableLoginButton}
                >

                    <Text style={[styles.loginText, disableLoginButton && styles.disableLoginText]}>Login</Text>

                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.signupContainer}
                    onPress={() => {
                        navigation.navigate(ScreenNames.Signup)
                    }}
                >
                    <Text style={styles.signupText}>Don't have an Account? SignUp</Text>
                </TouchableOpacity>



            </View>

        </View>
    )
}

export default Login;

const createStyles = (colors) => StyleSheet.create({
    container: { backgroundColor: colors.background, flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 40, },
    card: { borderRadius: 16, paddingHorizontal: 25, width: '100%', minHeight: 440, backgroundColor: colors.primaryContainer, flexDirection: 'column' },
    header: { marginTop: 55, fontSize: 28, fontWeight: '700', fontStyle: 'italic', color: colors.primary, },
    input: { paddingLeft: 10, marginTop: 45, borderRadius: 8, width: '100%', backgroundColor: colors.background, },
    loginButton: { marginTop: 45, backgroundColor: colors.primary, paddingVertical: 8, borderRadius: 16, alignItems: 'center', },
    loginDisabledButton: {
        backgroundColor: colors.surface
    },
    disableLoginText: { color: colors.onPrimaryContainer, fontWeight: '600', fontSize: 22, },
    loginText: { color: colors.background, fontWeight: '600', fontSize: 22, },
    signupContainer: { marginTop: 'auto', marginBottom: 20, alignSelf: 'center' },
    signupText: { fontSize: 14, color: colors.primary, fontWeight: '500', }

})