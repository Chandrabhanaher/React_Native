import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput, Animated, TouchableOpacity } from 'react-native';
import { theme } from '../core/theme';
import { TouchableOpacity } from 'react-native-gesture-handler';

const RegisterScreen = ({ navigation }) => {

    const po = new Animated.ValueXY({ x: 0, y: 0 });
    Animated.timing(po, {
        toValue: { x: 100, y: 100 },
        duration: 2000,
        useNativeDriver: false
    }).start();


    const [email, setEmail] = React.useState({ value: '', error: '' })
    const [password, setPassworrd] = React.useState({ value: '', error: '' })

    const onLoginPressed = () => {
        const emailError = emailValidator(email.value)
        const passwordError = passwordValidator(password.value)

        if (emailError || passwordError) {
            setEmail({ ...email, error: emailError })
            setPassworrd({ ...password, error: passwordError })
            return
        }
        navigation.reset({
            index: 0,
            routes: [{ name: 'Dashborad' }],
        })
    }
    return (

        <View style={styles.container}>


            <Image source={require('../assets/icon.png')} style={styles.image} />
            <Text style={styles.header}>OSM Android</Text>
            <TextInput
                style={{fontSize: 50}}  
                title='Email'
                returnKeyType='next'
                value={value.email}
                onChange={(text) => setEmail({ value: text, error: '' })}
                error={!!email.error}
                errorText={email.error}
                autoCapitalize='none'
                autoCompleteType='email'
                textContentType='emailAddress'
                keyboardType='email-address' />

            <TextInput
               style={{height: 40,backgroundColor: 'azure', fontSize: 20}}  
                title='Password'
                returnKeyType='done'
                value={value.password}
                onChange={(text) => setPassworrd({ value: text, error: '' })}
                error={!!password.error}
                errorText={password.error}
                secureTextEntry />

            <View style={styles.forgotPassword}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('ResetPasswordScreen')}>
                    <Text style={styles.forgot}>Forgot your password?</Text>
                </TouchableOpacity>
            </View>

            <Button mode='contained'
                title='Login'
                onPress={onLoginPressed} />

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

export default RegisterScreen

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
        fontSize: 15,
        lineHeight: 21,
        textAlign: 'center',
        marginBottom: 12,
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

