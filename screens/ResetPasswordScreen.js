import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput, Animated,TouchableOpacity } from 'react-native';
import { theme } from '../core/theme';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ResetPasswordScreen = ({ navigation }) => {

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
                title='Password'
                returnKeyType='done'
                value={value.password}
                onChange={(text) => setPassworrd({ value: text, error: '' })}
                error={!!password.error}
                errorText={password.error}
                secureTextEntry />
            

            <Button mode='contained'
                title='Reset Password'
                onPress={() => navigation.navigate('FlashScreen')} />

            {/* <Animated.View style={[{ transform: [{translateX : po.x}, {translateY:po.y}] }]}>
                
            </Animated.View> */}

        </View>

    );
}

export default ResetPasswordScreen

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
    forgotPassword:{
        width:'100%',
        alignItems:'flex-end',
        marginBottom: 24,
    },
});

