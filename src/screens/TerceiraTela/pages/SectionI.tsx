import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity, Image } from 'react-native';
import CheckBox from 'expo-checkbox';

export default function SectionI ({ navigation, route }: any) {
  const [check1, setCheck1] = React.useState(false);
  const [check2, setCheck2] = React.useState(false);
  const [check3, setCheck3] = React.useState(false);
  const [check4, setCheck4] = React.useState(false);
  const [check5, setCheck5] = React.useState(false);
  const [check6, setCheck6] = React.useState(false);

    const nextScreen = () => {
      navigation.navigate('SectionJ', {
        ...route.params,
        experienciasdeAprendizagem: [
          check1,
          check2,
          check3,
          check4,
          check5,
          check6,
        ]
      });
    }

    return (
      <View style={styles.container}>
        <Image source={require("../../../../assets/logo.jpeg")} style={styles.logo} />
        <View style={styles.questionTitleArea}>
          <Text style={styles.questionTitle}>
          Avalie as Experiências de Aprendizagem desta disciplina: 
          </Text>
        </View>
        <View>
          <View style={styles.checkboxContent}>
            <CheckBox value={check1} onValueChange={setCheck1} />
            <Text style={styles.questionText}>
            Ocorreram de forma eficaz em virtude da utilização das ferramentas propostas
            </Text>
          </View>

          <View style={styles.checkboxContent}>
            <CheckBox value={check2} onValueChange={setCheck2} />
            <Text style={styles.questionText}>
            Provocaram e incentivaram a reflexão sobre os temas tratados
            </Text>
          </View>

          <View style={styles.checkboxContent}>
            <CheckBox value={check3} onValueChange={setCheck3} />
            <Text style={styles.questionText}>
            Incentivaram a colaboração
            </Text>
          </View>

          <View style={styles.checkboxContent}>
            <CheckBox value={check4} onValueChange={setCheck4} />
            <Text style={styles.questionText}>
            Ofereceram oportunidade de reflexão sobre a futura aplicação dos conceitos e fundamentos teóricos discutidos
            </Text>
          </View>

          <View style={styles.checkboxContent}>
            <CheckBox value={check5} onValueChange={setCheck5} />
            <Text style={styles.questionText}>
            Foram condizentes com a carga horária prevista de estudo a distância
            </Text>
          </View>

          <View style={styles.checkboxContent}>
            <CheckBox value={check6} onValueChange={setCheck6} />
            <Text style={styles.questionText}>
            O feedback oferecido pelo(a) professor(a) em minhas atividades foi adequado, suficiente e contribuiu para a compreensão dos conteúdos que estudei
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