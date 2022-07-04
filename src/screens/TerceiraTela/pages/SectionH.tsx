import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity, Image } from 'react-native';
import CheckBox from 'expo-checkbox';

export default function SectionH({ navigation, route }: any) {
  const [check1, setCheck1] = React.useState(false);
  const [check2, setCheck2] = React.useState(false);
  const [check3, setCheck3] = React.useState(false);
  const [check4, setCheck4] = React.useState(false);
  const [check5, setCheck5] = React.useState(false);
  

  const nextScreen = () => {
    navigation.navigate('SectionI', {
      ...route.params,
      materialInstrucional: [
        check1,
        check2,
        check3,
        check4,
        check5,
        
      ]
    });
  }


    return (
      <View style={styles.container}>
        <Image source={require("../../../../assets/logo.jpeg")} style={styles.logo} />
        <View style={styles.questionTitleArea}>
          <Text style={styles.questionTitle}>
          Avalie o material instrucional desta disciplina: 
          </Text>
        </View>
        <View>
          <View style={styles.checkboxContent}>
            <CheckBox value={check1} onValueChange={setCheck1} />
            <Text style={styles.questionText}>
            O material disponibilizado foi suficiente para a aprendizagem do conteúdo
            </Text>
          </View>

          <View style={styles.checkboxContent}>
            <CheckBox value={check2} onValueChange={setCheck2} />
            <Text style={styles.questionText}>
            As leituras complementares e dicas do(a) professor(a) enriqueceram meu aprendizado
            </Text>
          </View>

          <View style={styles.checkboxContent}>
            <CheckBox value={check3} onValueChange={setCheck3} />
            <Text style={styles.questionText}>
            As referências bibliográficas do material foram significativas para meu aprendizado
            </Text>
          </View>

          <View style={styles.checkboxContent}>
            <CheckBox value={check4} onValueChange={setCheck4} />
            <Text style={styles.questionText}>
            Os textos eram adequados ao tempo previsto para a sua leitura
            </Text>
          </View>

          <View style={styles.checkboxContent}>
            <CheckBox value={check5} onValueChange={setCheck5} />
            <Text style={styles.questionText}>
            A linguagem utilizada no material foi condizente com meu grau de formação 
            </Text>
          </View>

          
          <View style={styles.botaoArea}>
            <TouchableOpacity style={styles.botaoBack} onPress={() => navigation.goBack()}>
              <Text style={styles.botaoText}>Voltar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botaoNext} onPress={nextScreen}>
              <Text style={styles.botaoText}>PRÓXIMA</Text>
            </TouchableOpacity>
          </View>
          
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',  
    paddingHorizontal: 20
  },

  logo: {
    width: 100,
    height:100,
    borderRadius: 100,
  },

  checkboxContent: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16
  },

  questionTitleArea: {
    marginTop: 30,
  },

  questionText: {
    marginLeft: 8
  },

  questionTitle: {
    fontSize: 16,
    fontWeight: '600',
    alignSelf: 'center'
  },

  botaoText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    borderRadius: 3,
    textAlign: 'center'
  },

  botaoNext: {
    width: 100,
    height: 45,
    backgroundColor:'#FACF25',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent:'center'
  },
  botaoBack: {
    width: 100,
    height: 45,
    backgroundColor:'#ccc',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent:'center'
  },

  botaoArea: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 60,
  }
});