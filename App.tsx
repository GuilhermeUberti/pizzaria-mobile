import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/index';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#1D1D2E" barStyle="light-content" translucent={false} />
      <Routes />
    </NavigationContainer>
  );
}