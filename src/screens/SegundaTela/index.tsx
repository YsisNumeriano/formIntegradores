import { ParamListBase } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import * as React from 'react';
import { Alert, View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';

export interface SegundaTelaScreenProps {
    navigation: StackNavigationProp<ParamListBase>;
}

export function SegundaTela ({ navigation }: SegundaTelaScreenProps) {
    const handleNextPage = () => {
        navigation.navigate('SectionAe');
    };
    return (
      <View style={styles.container}>
        <Image
        source={require('../../../assets/logo.jpeg')}
        style={styles.logo}/>

        <TextInput
            style={styles.input}
            placeholder="Matrícula"
        />
        <TextInput
            style={styles.input}
            placeholder="Senha"
        />     
        <TouchableOpacity
            style={styles.botao}
            onPress={handleNextPage}
        >
            <Text style={styles.botaoText}>ACESSAR</Text>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },

    logo: {
        width: 100,
        height: 100,
        borderRadius: 100
        
        },
    input: {
        marginTop: 10,
        padding: 10,
        width: 300, 
        backgroundColor:'#fff',       
        fontSize: 16,
        fontWeight: 'bold',
        borderRadius: 3,
        borderWidth: 1,
        
        
    },
    

    botaoText: {
        marginTop: 10,
        padding: 10,
        width: 300,
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
        borderRadius: 3,
        textAlign: 'center'
    },
    botao: {
        width: 300,
        height: 55,
        backgroundColor:'#2196F3',
        marginTop: 10,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: 'white',
        alignItems: 'center',
        justifyContent:'center'
    }
});