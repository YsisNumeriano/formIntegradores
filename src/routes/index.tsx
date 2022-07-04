import { NavigationContainer } from '@react-navigation/native';
import MyStack from './stack';

export default function Routes() {
    return (
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    );
  }