import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

const SwitchButton = ({ label, onPress, isSelected }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, isSelected && styles.selectedButton]}
    >
      <Text style={[styles.text, isSelected && styles.selectedText]}>
        {label}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: '#ccc',
    borderRadius: 5,
    margin: 5
  },
  selectedButton: {
    backgroundColor: '#4caf50'
  },
  text: {
    fontSize: 16,
    color: '#000'
  },
  selectedText: {
    color: '#fff'
  }
});

export default SwitchButton;
