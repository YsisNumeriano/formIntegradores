import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity, Image, ScrollView } from 'react-native';
import CheckBox from 'expo-checkbox';

export default function SectionF({ navigation, route }: any) {
    const [check1, setCheck1] = React.useState(false);
    const [check2, setCheck2] = React.useState(false);
    const [check3, setCheck3] = React.useState(false);
    const [check4, setCheck4] = React.useState(false);
    const [check5, setCheck5] = React.useState(false);
    const [check6, setCheck6] = React.useState(false);
    const [check7, setCheck7] = React.useState(false);
    const [check8, setCheck8] = React.useState(false);
    const [check9, setCheck9] = React.useState(false);
    const [check10, setCheck10] = React.useState(false);

    const nextScreen = () => {
      navigation.navigate('SectionG', {
        ...route.params,
        atuacaoPessoal: [
          check1,
          check2,
          check3,
          check4,
          check5,
          check6,
          check7,
          check8,
          check9,
          check10
        ]
      });
    }

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={require("../../../../assets/logo.jpeg")} style={styles.logo} />
        <View style={styles.questionTitleArea}>
          <Text style={styles.questionTitle}>
            Avalie sua atuação pessoal durante a disciplina:
          </Text>
        </View>
        <View>
          <View style={styles.checkboxContent}>
            <CheckBox value={check1} onValueChange={setCheck1} />
            <Text style={styles.questionText}>
              Estive motivado durante o decorrer de toda a disciplina
            </Text>
          </View>

          <View style={styles.checkboxContent}>
            <CheckBox value={check2} onValueChange={setCheck2} />
            <Text style={styles.questionText}>
              Além das referências essenciais indicadas, tive a oportunidade de
              explorar as demais referências sugeridas
            </Text>
          </View>

          <View style={styles.checkboxContent}>
            <CheckBox value={check3} onValueChange={setCheck3} />
            <Text style={styles.questionText}>
              Consegui me organizar para o estudo, conciliando os trabalhos com
              as atividades pessoais e profissionais
            </Text>
          </View>

          <View style={styles.checkboxContent}>
            <CheckBox value={check4} onValueChange={setCheck4} />
            <Text style={styles.questionText}>
              Participei efetivamente das atividades individuais propostas
              (tarefas)
            </Text>
          </View>

          <View style={styles.checkboxContent}>
            <CheckBox value={check5} onValueChange={setCheck5} />
            <Text style={styles.questionText}>
              Contribuí com meus conhecimentos, ideias e experiências para os
              trabalhos desenvolvidos em grupo (fóruns)
            </Text>
          </View>

          <View style={styles.checkboxContent}>
            <CheckBox value={check6} onValueChange={setCheck6} />
            <Text style={styles.questionText}>
              Explorei o potencial interativo do AVA, compartilhando e debatendo
              com o(a) professor(a) e demais colegas
            </Text>            
          </View>

          <View style={styles.checkboxContent}>
            <CheckBox value={check7} onValueChange={setCheck7} />
            <Text style={styles.questionText}>
            As opiniões de colegas e do(a) professor(a) contribuíram para o meu processo de aprendizagem
            </Text>            
          </View>

          <View style={styles.checkboxContent}>
            <CheckBox value={check8} onValueChange={setCheck8} />
            <Text style={styles.questionText}>
            As discussões e debates realizados no AVA foram importantes para minha tomada de posição frente aos temas
            </Text>            
          </View>

          <View style={styles.checkboxContent}>
            <CheckBox value={check9} onValueChange={setCheck9} />
            <Text style={styles.questionText}>
            Dentro das minhas condições práticas e de organização, os prazos para a realização das atividades foram suficientes
            </Text>            
          </View>

          <View style={styles.checkboxContent}>
            <CheckBox value={check10} onValueChange={setCheck10} />
            <Text style={styles.questionText}>
            Sinto-me motivado(a) a aplicar os conhecimentos obtidos nesta disciplina do curso
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
      </ScrollView>
    );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
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