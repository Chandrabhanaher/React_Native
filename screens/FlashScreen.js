import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { theme } from '../core/theme';

export default function FlashScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/icon.png')} style={styles.image} />
      <Text style={styles.header}>OSM Android</Text>
      <Text style={styles.text}>The easiest way to start with your amazing application.</Text>
      <Button mode='contained'
        title='Login'
        onPress={() => navigation.navigate('LoginScreen')}>

      </Button>
    </View>

  );
}

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

  loginBtn: {
    fontSize: 20,
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