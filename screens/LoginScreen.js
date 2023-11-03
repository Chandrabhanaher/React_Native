import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput, Animated } from 'react-native';
import { theme } from '../core/theme';

const LoginScreen = ({ navigation }) => {
    const po = new Animated.ValueXY({ x: 0, y: 0 });
    Animated.timing(po, {
        toValue: { x: 100, y: 100 },
        duration: 2000,
        useNativeDriver: false
    }).start();

    return (

        <View style={styles.container}>
            <Animated.View style={[{ transform: [{translateX : po.x}, {translateY:po.y}] }]}>
                <Image source={require('../assets/icon.png')} style={styles.image} />
                <Text style={styles.header}>OSM Android</Text>



                <Button mode='contained'
                    title='Login'
                    onPress={() => navigation.navigate('FlashScreen')} />
            </Animated.View>

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
        fontSize: 15,
        lineHeight: 21,
        textAlign: 'center',
        marginBottom: 12,
    },
});

