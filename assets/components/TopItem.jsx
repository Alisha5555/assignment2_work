// TopItem.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';


export function TopItem({ title, description, image }) {

  let imageSource = null;
  if (typeof image === 'string') {
    if (image.startsWith('http')) {
      imageSource = { uri: image };
    } else if (image.includes('Black_Ops_3.jpg')) {
      imageSource = require('../pictures/Black_Ops_3.jpg');
    } else if (image.includes('images.jpg')) {
      imageSource = require('../pictures/images.jpg');
    } else if (image.includes('minecraft.jpg')) {
      imageSource = require('../pictures/minecraft.jpg');
    }
  } else {
    imageSource = image;
  }

  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} resizeMode="contain" />

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 8,
  },
});
