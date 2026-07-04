import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from "react-native"
import { useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ScreenNames } from "../../navigation/ScreenNames";

const Signup = () => {
    const navigation = useNavigation()

    const { colors } = useTheme()
    const styles = createStyles(colors)


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [otp, setOtp] = useState('');
    const [signupMode, setSignupMode] = useState('signup') // signup || otp

    const [signupLoading, setSignupLoading] = useState(false);

    const [resendTimer, setResendTimer] = useState(30);

    const disableLoginButton = signupLoading || !email || !password || password !== confirmPassword;


    // Use Effects

    // first otp send UI runs from here 
    useEffect(() => {
        handleResendUI()
    }, [signupMode])




    // Helper Functions

    const handleGoBack = () => {
        setEmail('');
        setPassword('')
        setConfirmPassword('')
        setOtp('')
        setSignupMode('signup')
        setSignupLoading(false)

        navigation.goBack()

    }

    const handleResendUI = () => {
        if (signupMode !== 'otp') return;

        setResendTimer(30);

        const interval = setInterval(() => {
            setResendTimer(prev => {
                if (prev <= 1) {
                    clearInterval(interval)
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => {
            clearInterval(interval);
    }}

    // API Calls

    const handleSendOTP = () => {

        setSignupLoading(true)

        try {

            console.log('email : ', email);
            console.log('password : ', password);

            if (email && password && confirmPassword) {

                Alert.alert('Success', 'OTP sent Succesfully')

                setSignupMode('otp')
            }


        } catch (err) {
            console.log("err in handleSendOTP : ", err);
            Alert.alert('Error', err.messasge || 'Send OTP Error');

        } finally {
            setSignupLoading(false)
        }

    }


    const handleSignup = () => {

        setSignupLoading(true)

        try {

            // console.log('email : ', email);
            // console.log('password : ', password);

            console.log('otp : ', otp);


            if (email && otp) {

                Alert.alert('Success', 'Signup Succesful')

                // navigation.reset({
                //     index: 0,
                //     routes: [{ name: ScreenNames.Dashboard }]
                // });

                // navigation.goBack();

                handleGoBack();

            }


        } catch (err) {
            console.log("err in handleSignup : ", err);
            Alert.alert('Error', err.messasge || 'Signup Error');

        } finally {
            setSignupLoading(false)
        }
    }


    const handleResendOtp = () => {

        setSignupLoading(true);
        handleResendUI();
        
        try {
            

        } catch (err) {
            
            Alert.alert('Error', err.messasge || 'resend otp error');
            console.log('err in Resend OTP : ', err);

        } finally {
            setSignupLoading(true);
        }
    }


    return (
        <View style={styles.container}>

            <View style={styles.card}>
                <Text style={styles.header}>Sign up Screen</Text>

                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Enter your email"
                    placeholderTextColor={'grey'}
                    editable={signupMode === 'signup'}

                />

                {signupMode === 'signup' &&
                    <>

                        <TextInput
                            style={styles.input}
                            value={password}
                            onChangeText={setPassword}
                            placeholder="Enter your Password"
                            placeholderTextColor={'grey'}

                        />

                        <TextInput
                            style={styles.input}
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                            placeholder="Enter confirm Password"
                            placeholderTextColor={'grey'}

                        />

                        <TouchableOpacity
                            style={[styles.loginButton,
                            disableLoginButton && styles.loginDisabledButton
                            ]}
                            onPress={handleSendOTP}
                            disabled={disableLoginButton}
                        >

                            <Text style={[styles.loginText, disableLoginButton && styles.disableLoginText]}>Sign up</Text>

                        </TouchableOpacity>

                    </>
                }

                {signupMode === 'otp' &&
                    <>

                        <TextInput
                            style={styles.input}
                            value={otp}
                            onChangeText={setOtp}
                            keyboardType="numeric"
                            placeholder="Enter OTP"
                            placeholderTextColor={'grey'}
                            maxLength={4}

                        />


                        <TouchableOpacity
                            style={[styles.loginButton,
                            (otp.length != 4) && styles.loginDisabledButton
                            ]}
                            onPress={handleSignup}
                            disabled={otp.length != 4}
                        >
                            <Text style={[styles.loginText, (otp.length != 4) && styles.disableLoginText]}>Submit OTP</Text>
                        </TouchableOpacity>


                        <TouchableOpacity
                            style={styles.resendOTP}
                            onPress={handleResendOtp}
                            disabled={resendTimer != 0 || signupLoading}
                        >
                            <Text style={styles.resendText}>
                                {resendTimer > 0
                                    ? `You can resend OTP to you Email in just ${resendTimer} seconds`
                                    : "Resend OTP"}
                            </Text>
                        </TouchableOpacity>

                    </>
                }


                <TouchableOpacity
                    style={styles.signupContainer}
                    onPress={handleGoBack}
                >
                    <Text style={styles.signupText}>Already have an Account? Login</Text>
                </TouchableOpacity>


            </View>

        </View>
    )
}

export default Signup;


const createStyles = (colors) => StyleSheet.create({
    container: { backgroundColor: colors.background, flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 40, },
    card: { borderRadius: 16, paddingHorizontal: 25, width: '100%', backgroundColor: colors.primaryContainer, flexDirection: 'column' },
    header: { marginTop: 55, fontSize: 28, fontWeight: '700', fontStyle: 'italic', color: colors.primary, },
    input: { paddingLeft: 10, marginTop: 45, borderRadius: 8, width: '100%', backgroundColor: colors.background, },
    loginButton: { marginTop: 45, backgroundColor: colors.primary, paddingVertical: 8, borderRadius: 16, alignItems: 'center', },
    loginDisabledButton: {
        backgroundColor: colors.surface
    },
    disableLoginText: { color: colors.onPrimaryContainer, fontWeight: '600', fontSize: 22, },
    loginText: { color: colors.background, fontWeight: '600', fontSize: 22, },

    signupContainer: { marginTop: 40, marginBottom: 20, alignSelf: 'center' },
    signupText: { fontSize: 14, color: colors.primary, fontWeight: '500', },

    resendOTP: { marginTop: 10, marginBottom: 20, alignItems: 'center', width: '100%' },
    resendText: { fontSize: 14, color: colors.primary, fontWeight: '500', textAlign: 'center' },

})