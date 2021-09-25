import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './styles';

const StyledButton = () => {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => {
          console.warn('hey there!');
        }}
      >
        <Text style={styles.text}>Custom Order</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
