import { createStackNavigator } from '@react-navigation/stack';
import { SegundaTela } from '../../screens/SegundaTela';
import { TelaInicio } from '../../screens/TelaInicio';
import SectionAe from '../../screens/TerceiraTela/pages/SectionAe';
import SectionF from '../../screens/TerceiraTela/pages/SectionF';
import SectionG from '../../screens/TerceiraTela/pages/SectionG';
import SectionH from '../../screens/TerceiraTela/pages/SectionH';
import SectionI from '../../screens/TerceiraTela/pages/SectionI';
import SectionJ from '../../screens/TerceiraTela/pages/SectionJ';
import SectionK from '../../screens/TerceiraTela/pages/SectionK';
import SectionL from '../../screens/TerceiraTela/pages/SectionL';

const Stack = createStackNavigator();

export default function MyStack() {
    return (
      <Stack.Navigator
        initialRouteName='TelaInicio'
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="TelaInicio" component={TelaInicio} />

        <Stack.Screen name="SegundaTela" component={SegundaTela} />
        
        <Stack.Screen name="SectionAe" component={SectionAe} />
        <Stack.Screen name="SectionF" component={SectionF} />
        <Stack.Screen name="SectionG" component={SectionG} />
        <Stack.Screen name="SectionH" component={SectionH} />
        <Stack.Screen name="SectionI" component={SectionI} />
        <Stack.Screen name="SectionJ" component={SectionJ} />
        <Stack.Screen name="SectionK" component={SectionK} />
        <Stack.Screen name="SectionL" component={SectionL} />
      </Stack.Navigator>
    );
  }