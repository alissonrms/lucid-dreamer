import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { StatusIndicator } from './src/components/StatusIndicator';

const App = () => (
  <View style={styles.container}>
    <View style={styles.logoContainer}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
      <Text style={styles.text}>Lucid Dreamer</Text>
    </View>
    <StatusIndicator />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000',
    fontFamily: 'Roboto',
    padding: 12,
  },
  text: {
    color: '#787AFF',
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '500',
    letterSpacing: 1.1,
  },
  logoContainer: {
    position: 'absolute',
    top: 12,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  logo: {
    height: 24,
    width: 24,
  },
});

export default App;
