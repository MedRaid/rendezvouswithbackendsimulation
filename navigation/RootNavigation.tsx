import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationTypes } from './NavigationTypes';
import { NavigationContainer } from '@react-navigation/native';
import MesRendezVous from '../screens/MesRendezVous';

const Stack = createNativeStackNavigator<NavigationTypes>();

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MesRendezVous">
        <Stack.Screen
          name="MesRendezVous"
          component={MesRendezVous}
          options={{ title: 'MesRendezVous' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
