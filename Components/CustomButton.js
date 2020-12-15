import {StyleSheet, TouchableOpacity, Text } from "react-native";
import React from 'react';

const CustomButton = ({ onPress, title , style}) => (
    <TouchableOpacity onPress={onPress} style={style}>
      <Text style={styles.CustomButtonText}>{title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    CustomButtonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    }
  });
  

export default CustomButton;
