import * as React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export interface TerceiraTelaScreenProps {
}

export function TerceiraTela (props: TerceiraTelaScreenProps) {    
    return (
      <View style={styles.container}>
        <Image source={require("../../../assets/logo.jpeg")} style={styles.logo} />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',  
        paddingHorizontal: 12
        
        
        
    },

    logo: {
        width: 100,
        height:100,
        borderRadius: 100,
    },


    

    botaoText: {
        marginTop: 10,
        padding: 10,
        width: 300,        
        ontSize: 16,
        fontWeight: 'bold',
        borderRadius: 3,
        textAlign: 'center'
},
    botao: {
        width: 300,
        height: 42,
        backgroundColor:'#E8D52E',
        marginTop: 10,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: 'white',
        alignItems: 'center',
        justifyContent:'center'
}
    
});
