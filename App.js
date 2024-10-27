import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Appbar, TextInput, Button, Text } from 'react-native-paper';

import Container from './src/components/Container';
import Header from './src/components/Header';
import Body from './src/components/Body';
import Input from './src/components/Input';

const App = () => {
  const [gas, setGas] = useState('');
  const [eta, setEta] = useState('');
  const [res, setRes] = useState('');

  // UseEffect para testar o Alert
  useEffect(() => {
  Alert.alert('Teste', 'Alert funcionando corretamente');
  }, []);

  const handleCalcular = () =>{

    if(!gas || gas <=0 || !eta || eta <=0){
      console.log('Gas:', gas);
      console.log('Eta:', eta);

      Alert.alert('Atenção', 'Obrigatório informar o valor da gasolina e do etanol!');

    }


  }

  return (
    <Container>
      <Header title={'Calculadora Flex'} />
      <Body>
        <Input
          label="Preço da Gasolina"
          value={gas}
          onChangeText={(text) => setGas(text)}
        />
        <Input
          label="Preço do Etanol"
          value={eta}
          onChangeText={(text) => setEta(text)}
        />
        <Button mode="contained" onPress={handleCalcular}>
          Calcular
        </Button>
        <Text style={styles.text}> {gas} </Text>
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
   text: {
    textAlign: 'center',
    margin: 8,
  },
});

export default App;
