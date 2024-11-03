import React from 'react';
import { View, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export const StatusIndicator = () => (
  <View style={styles.container}>
    <MaterialCommunityIcons name="home" color="white" size={20} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 8,
  },
});
