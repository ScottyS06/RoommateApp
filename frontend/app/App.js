import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Go to San's Screen" onPress={() => navigation.navigate('San')} />
      <Button title="Go to Scotty's Screen" onPress={() => navigation.navigate('Scotty')} />
    </View>
  );
}

function SanScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>San's Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.popToTop()} />
      <Button title="Go to Scotty's Screen" onPress={() => navigation.navigate('Scotty')} />
    </View>
  );
}
function ScottyScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Scotty's Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.popTopop()} />
      <Button title="Go to San's Screen" onPress={() => navigation.navigate('San')} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="San" component={SanScreen} />
        <Stack.Screen name="Scotty" component={ScottyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;