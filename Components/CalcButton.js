import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const CalcButton = (props) => {
    return (
      <TouchableOpacity style={[styles.button, props.orange && styles.orange, props.long && styles.long, props.lightgray && styles.lightgray]} onPress={props.onPress}>
        <Text style={[styles.buttonText, props.firstRow && styles.firstRow]}>{props.children}</Text>
      </TouchableOpacity>
    )
  }

  const styles = StyleSheet.create({

    button: {
      width: 80,
      height: 80,
      backgroundColor: '#505050',
      borderRadius: 40,
      margin: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },

    orange: {
      backgroundColor: '#FF9500'
    },
  
    long: {
      width: '45%',
      paddingRight: '25%'
    },
  
    lightgray: {
      backgroundColor: '#d4d4d2'
    },
  
    buttonText: {
      fontSize: 40,
      color: 'white',
      fontWeight: 600
    },
  
    firstRow: {
      color: 'black',
      fontWeight: 400
    },

  });

  export default CalcButton;
  