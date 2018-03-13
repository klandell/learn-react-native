import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default () => (
  <View style={styles.ct}>
    <Text>Home</Text>
  </View>
);

const styles = StyleSheet.create({
  ct: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
