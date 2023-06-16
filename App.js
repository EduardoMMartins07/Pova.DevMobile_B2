import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import startPage from './pages/startPage';
import loginPage from './pages/loginPage';
import cadastrarPage from './pages/cadastrarPage';
import recuperarSenhaPage from './pages/recuperarSenhaPage';
import cardsRPGPage from './pages/cardsRPGPage';
import dashboardPage from './pages/dashboardPage';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='startPage' component={startPage} options={{headerShown: false}}/>
        <Stack.Screen name='loginPage' component={loginPage} />
        <Stack.Screen name='cadastrarPage' component={cadastrarPage} />
        <Stack.Screen name='recuperarSenhaPage' component={recuperarSenhaPage} />
        <Stack.Screen name='cardsRPGPage' component={cardsRPGPage} />
        <Stack.Screen name='dashboardPage' component={dashboardPage} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}