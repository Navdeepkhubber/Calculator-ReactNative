import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import CalcButton from "./CalcButton";

const Calculator = () => {
    const [num, setNum] = useState('0');  
    const [oldNum, setOldNum] = useState('0');
    const [operator, setOperator] = useState();
  
    const inputNum = (e) => {
      if (num === '0') {
          setNum(e);
      } else {
        setNum(num + e);
      }
    };
  
    const clear = () => {
      setNum('0');
      setOldNum('0');
      setOperator(null);
    }
  
    const changeSign = () => {
      if(num>0) {
        setNum(-num);
      } else {
        setNum(Math.abs(num));
      }
    }
  
    const percentage = () => {
      setNum(num/100);
    }
  
    const operatorHandler = (e) => {
  
      setOperator(e);
      setOldNum(parseFloat(num));
      setNum('0');
    
    }
  
    const Calculate = () => {
      let result;
      if (operator === "/") {
        result = parseFloat(oldNum) / parseFloat(num);
      } else if (operator === "*") {
        result = parseFloat(oldNum) * parseFloat(num);
      } else if (operator === "-") {
        result = parseFloat(oldNum) - parseFloat(num);
      } else if (operator === "+") {
        result = parseFloat(oldNum) + parseFloat(num);
      }
  

      setNum(result.toString());
      setOldNum('0');
      setOperator(null);
  }
  
  const fontSize = num.length > 5 ? 60 : 120;
  
  
    return (
      <View style={styles.container}>
        <View>
  
        <Text style={[styles.result, {fontSize: fontSize}]}>{num}</Text>
  
        <View style={styles.calc}>
  
        <View style={styles.row}>
          <CalcButton onPress ={clear} lightgray firstRow >AC</CalcButton>
          <CalcButton onPress= {changeSign} lightgray firstRow >+/-</CalcButton>
          <CalcButton onPress={percentage} lightgray firstRow >%</CalcButton>
          <CalcButton onPress={() => operatorHandler('/')} orange>/</CalcButton>
        </View>
  
        <View style={styles.row}>
          <CalcButton onPress={() => inputNum('7')}>7</CalcButton>
          <CalcButton onPress={() => inputNum('8')}>8</CalcButton>
          <CalcButton onPress={() => inputNum('9')}>9</CalcButton>
          <CalcButton onPress={() => operatorHandler('*')} orange >X</CalcButton>
        </View>
    
        <View style={styles.row}>
          <CalcButton onPress={() => inputNum('4')}>4</CalcButton>
          <CalcButton onPress={() => inputNum('5')}>5</CalcButton>
          <CalcButton onPress={() => inputNum('6')}>6</CalcButton>
          <CalcButton onPress={() => operatorHandler('-')} orange>-</CalcButton>
        </View>
  
        <View style={styles.row}>
          <CalcButton onPress={() => inputNum('1')}>1</CalcButton>
          <CalcButton onPress={() => inputNum('2')}>2</CalcButton>
          <CalcButton onPress={() => inputNum('3')}>3</CalcButton>
          <CalcButton onPress={() => operatorHandler('+')} orange >+</CalcButton>
        </View>
  
        <View style={styles.row}>
          <CalcButton onPress={() => inputNum('0')} long >0</CalcButton>
          <CalcButton onPress={() => inputNum('.')}>.</CalcButton>
          <CalcButton onPress={Calculate} orange >=</CalcButton>
        </View>
        </View>
        <StatusBar style="auto" />
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center'
    },
  
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    result: {
      color: 'white',
      paddingTop: 40,
      fontWeight: 200,
      textAlign: 'right',
      paddingRight: 15,
   
    },
  
    calc: {
      paddingTop: 10,
    }
  
  });

  export default Calculator;