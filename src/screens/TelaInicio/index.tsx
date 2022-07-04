import { ParamListBase } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import * as React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export interface TelaInicioScreenProps {
    navigation: StackNavigationProp<ParamListBase>;
}

export function TelaInicio ({ navigation }: TelaInicioScreenProps) {
    const handleNextPage = () => {
        navigation.navigate('SegundaTela');
    };

    return (
        <View style={styles.container}>
            <Image
            source={require('../../../assets/logo.jpeg')}
            style={styles.logo}/>

            <Text style={{fontSize: 15, lineHeight: 37}}>Bem vindo a pesquisa de satisfação! </Text>
            
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
        alignItems: 'center',
        justifyContent:'center',
    }, 
    logo: {
        width: 150,
        height: 150,
        borderRadius: 100
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
})