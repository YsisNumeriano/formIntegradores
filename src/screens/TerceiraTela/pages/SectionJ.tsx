import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity, Image, ScrollView } from 'react-native';
import CheckBox from 'expo-checkbox';

export default function SectionJ({ navigation, route }: any) {
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
  const [check11, setCheck11] = React.useState(false);
  const [check12, setCheck12] = React.useState(false);

  const nextScreen = () => {
    navigation.navigate('SectionK', {
      ...route.params,
      avalieAprendizagem: [
        check1,
        check2,
        check3,
        check4,
        check5,
        check6,
        check7,
        check8,
        check9,
        check10,
        check11,
        check12,
      ]
    });
  }

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={require("../../../../assets/logo.jpeg")} style={styles.logo} />
        <View style={styles.questionTitleArea}>
          <Text style={styles.questionTitle}>
          Avalie a aprendizagem nesta disciplina: 
          </Text>
        </View>
        <View>
          <View style={styles.checkboxContent}>
            <CheckBox value={check1} onValueChange={setCheck1} />
            <Text style={styles.questionText}>
            Consegui estabelecer um vínculo com o(a) professor(a) e tutor(a)
            </Text>
          </View>

          <View style={styles.checkboxContent}>
            <CheckBox value={check2} onValueChange={setCheck2} />
            <Text style={styles.questionText}>
            O(a) professor(a) esteve disposto(a) a esclarecer as minhas dúvidas
            </Text>
          </View>

          <View style={styles.checkboxContent}>
            <CheckBox value={check3} onValueChange={setCheck3} />
            <Text style={styles.questionText}>
            O(a) tutor(a) esteve disposto(a) a esclarecer as minhas dúvidas
            </Text>
          </View>

          <View style={styles.checkboxContent}>
            <CheckBox value={check4} onValueChange={setCheck4} />
            <Text style={styles.questionText}>
            As orientações dadas pelo(a) professor(a) para a realização das atividades e trabalhos foram adequadas e suficientes
            </Text>
          </View>

          <View style={styles.checkboxContent}>
            <CheckBox value={check5} onValueChange={setCheck5} />
            <Text style={styles.questionText}>
            Apesar da distância física, pude perceber a presença de pessoas acompanhando meu trabalho e dispostas a me ajudar quando necessário
            </Text>
          </View>

          <View style={styles.checkboxContent}>
            <CheckBox value={check6} onValueChange={setCheck6} />
            <Text style={styles.questionText}>
            O(A) professor(a) manteve um relacionamento amigável com o grupo, tentando constantemente estimular a participação do grupo e de cada um
            </Text>            
          </View>

          <View style={styles.checkboxContent}>
            <CheckBox value={check7} onValueChange={setCheck8} />
            <Text style={styles.questionText}>
            A metodologia de trabalho colaborativo utilizada pelo(a) professor(a) contribuiu para a compreensão dos conceitos discutidos
            </Text>
          </View>

          <View style={styles.checkboxContent}>
            <CheckBox value={check9} onValueChange={setCheck9} />
            <Text style={styles.questionText}>
            Os critérios de avaliação estabelecidos pelo(a) professor(a) foram claros e bem definidos
            </Text>
          </View>

          <View style={styles.checkboxContent}>
            <CheckBox value={check10} onValueChange={setCheck10} />
            <Text style={styles.questionText}>
            A participação do(a) professor(a) nos debates e discussões no Ambiente Virtual foi essencial para que estas interações tivessem um bom resultado
            </Text>
          </View>

          <View style={styles.checkboxContent}>
            <CheckBox value={check11} onValueChange={setCheck11} />
            <Text style={styles.questionText}>
            A participação do(a) tutor(a) nos debates e discussões no Ambiente Virtual foi essencial para que estas interações tivessem um bom resultado
            </Text>
          </View>

          <View style={styles.checkboxContent}>
            <CheckBox value={check12} onValueChange={setCheck12} />
            <Text style={styles.questionText}>
            Os feedbacks das atividades foram feitos em tempo adequado pelo(a) professor(a)
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