import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Animated, TouchableOpacity, HelperText } from 'react-native';
import { theme } from '../core/theme';
import emailValidator from './validations/emailValidator';
import passwordValidator from './validations/passwordValidator';
//import { TextField } from 'react-native-material-textfield';
import { Button } from "@react-native-material/core";
const LoginScreen = ({ navigation }) => {

    // const po = new Animated.ValueXY({ x: 0, y: 0 });
    // Animated.timing(po, {
    //     toValue: { x: 100, y: 100 },
    //     duration: 2000,
    //     useNativeDriver: false
    // }).start();


    const [email, setEmail] = React.useState({ value: "", error: "" });
    const [password, setPassword] = React.useState({ value: "", error: "" });

    const onLoginPressed = () => {
        const emailError = emailValidator(email.value);
        const passwordError = passwordValidator(password.value);
        if (emailError || passwordError) {
            setEmail({ ...email, error: emailError });
            setPassword({ ...password, error: passwordError });
            return
        }
        // navigation.reset({
        //     index: 0,
        //     routes: [{ name: 'Dashboard' }],
        // })

        navigation.navigate('Dashboard',{email});
    }

    return (

        <View style={styles.container}>


            <Image source={require('../assets/icon.png')} style={styles.image} />
            <Text style={styles.header}>OSM Android</Text>
            {/* <TextField
                label='Email'
                placeholder='Enter email'
                returnKeyType='next'
                value={email.value}
                onChange={(text) => setEmail({ value: text, error: "" })}
                error={!!email.error}
                autoCapitalize='none'
                autoCompleteType='email'
                textContentType='emailAddress'
                keyboardType='email-address' /> */}


            <TextInput
                style={styles.text}
                label="Email"
                returnKeyType="next"
                value={email.value}
                onChangeText={(text) => setEmail({ value: text, error: '' })}
                error={!!email.error}
                errorText={email.error}
                autoCapitalize="none"
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"
            />

            <TextInput
                style={styles.text}
                label="Password"
                returnKeyType="done"
                value={password.value}
                onChangeText={(text) => setPassword({ value: text, error: '' })}
                error={!!password.error}
                errorText={password.error}
                secureTextEntry
            />
            <View style={styles.forgotPassword}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('ResetPasswordScreen')}>
                    <Text style={styles.forgot}>Forgot your password?</Text>
                </TouchableOpacity>
            </View>
            <Button title='Login' mode="contained" onPress={onLoginPressed} />
            <View style={styles.row}>
                <Text>Don’t have an account? </Text>
                <TouchableOpacity onPress={() => navigation.replace('RegisterScreen')}>
                    <Text style={styles.link}>Sign up</Text>
                </TouchableOpacity>
            </View>

            {/* <Animated.View style={[{ transform: [{translateX : po.x}, {translateY:po.y}] }]}>
                
            </Animated.View> */}

        </View>

    );
}

export default LoginScreen

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 20,
        width: '100%',
        maxWidth: 340,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 110,
        height: 110,
        marginBottom: 8,
    },
    header: {
        fontSize: 35,
        color: theme.colors.primary,
        fontWeight: 'bold',
        paddingVertical: 12,
    },
    text: {
        width: '85%',
        height: 35,
        fontSize: 14,
        marginTop: 8,
        marginBottom: 8,
        padding: 10,
        textAlign: 'left',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 10,
    },
    forgotPassword: {
        width: '100%',
        alignItems: 'flex-end',
        marginBottom: 24,
    },
    forgot: {
        fontSize: 13,
        color: theme.colors.secondary,
    },
    row: {
        flexDirection: 'row',
        marginTop: 4,
    },
    link: {
        fontWeight: 'bold',
        color: theme.colors.primary,
    },
});

