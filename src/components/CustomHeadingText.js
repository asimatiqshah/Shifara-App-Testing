// components/CustomHeadingText.js
import React from "react";
import { View, Text, StyleSheet, Dimensions, ImageBackground } from "react-native";
import { themecolors } from "../utils/Constants";

import {screenWidth}  from '../utils/Scalling.js';

const CustomHeadingText = ({ title }) => {
  return (
    <ImageBackground source={require('../assets/headingBar.png')} resizeMode="cover" style={[styles.container]}>
      <Text style={styles.title}>{title}</Text>
    </ImageBackground>
  );
};

export default CustomHeadingText;

const styles = StyleSheet.create({
  container: {
    width: screenWidth, // full screen width
    height: 42,
    justifyContent: "center", // center vertically
    alignItems: "center", // center horizontally,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: themecolors.white, // white text for contrast
  },
});
