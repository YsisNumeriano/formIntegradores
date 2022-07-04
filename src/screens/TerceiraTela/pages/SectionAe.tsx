import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity, Image, TextInput } from 'react-native';
import CheckBox from 'expo-checkbox';
import RNPickerSelect from 'react-native-picker-select';
import citiesJson from '../../../data/cities.json';

export default function SectionAe({ navigation }: any) {
    const [cidade, setCidade] = React.useState('');
    const [campus, setCampus] = React.useState('');
    const [curso, setCurso] = React.useState('');
    const [turma, setTurma] = React.useState('');
    const [dataInicio, setDataInicio] = React.useState('');
    const [disciplina, setDisciplina] = React.useState('');

    const nextScreen = () => {
      navigation.navigate('SectionF', {
        cidade, campus, curso, turma, dataInicio, disciplina
      });
    }

    return (
      <View style={styles.container}>
        <Image source={require("../../../../assets/logo.jpeg")} style={styles.logo} />
        <View style={styles.questionTitleArea}>
          <Text style={styles.questionTitle}>
          Indique a cidade e o polo presencial em que você estuda.
          </Text>

          <RNPickerSelect
            onValueChange={(value) => setCidade(value)}
            items={[
              { label: 'ARAPIRACA', value: 'ARAPIRACA' },
              { label: 'MACEIÓ', value: 'MACEIÓ' },
              { label: 'MARECHAL DEODORO', value: 'MARECHAL DEODORO' },
              
            ]}
          />
          <RNPickerSelect
            onValueChange={(value) => setCampus(value)}
            items={[
              { label: 'CAMPUS I', value: 'CAMPUS I' },
              { label: 'CAMPUS II', value: 'CAMPUS II' },
              { label: 'CAMPUS III', value: 'CAMPUS III' },
              { label: 'CAMPUS IV', value: 'CAMPUS IV' },
              { label: 'CAMPUS MARECHAL', value: 'CAMPUS MARECHAL' },
              { label: 'CAMPUS SERTÃO', value: 'CAMPUS SERTÃO'},
            ]}
          />

          

          <Text style={styles.questionTitle}>
          Qual seu curso?
          </Text>
          
          <TextInput
            style={styles.input}
            placeholder="Curso"
            onChangeText={(value) => setCurso(value)}
        />

          <Text style={styles.questionTitle}>
          Qual sua turma?
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Turma"
            onChangeText={(value) => setTurma(value)}
        />

          <Text style={styles.questionTitle}>
          Em qual ano/mês você iniciou o curso?
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Data"
            onChangeText={(value) => setDataInicio(value)}
          />

          <Text style={styles.questionTitle}>
          Selecione a disciplina para a qual você responderá o questionário
          </Text>

          <RNPickerSelect
            onValueChange={(value) => setDisciplina(value)}
            items={[
              { label: 'Desenvolvimento para Dispositivos Móveis', value: 'Desenvolvimento para Dispositivos Móveis' },
              { label: 'Engenharia de Software', value: 'Engenharia de Software' },
              { label: 'Projeto Integrador III-B ', value: 'Projeto Integrador III-B ' },
              
            ]}
          />       
        
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
    marginTop:25
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
    alignSelf: 'stretch'
  },

  input: {
    marginTop: 1,
    padding: 1,
    width: 350, 
    backgroundColor:'#fff',       
    fontSize: 12,    
    borderRadius: 3,
    borderWidth: 1,
    
    
    
    
    
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