import react from 'react'
import {View, Text, StyleSheet, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './components/Home'
import Contact from './components/kontak'
import Lengkap from './components/lengkap'
import Nurul from './components/Nurul'
import Isti from './components/Isti'
import Azizah from './components/Azizah'
import Sarah from './components/Sarah'
import Dinda from './components/Dinda'
import Ruhu from './components/Ruhu'


const Stack=createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Daftar Teman Dekat" component={Home}/>
    <Stack.Screen name="Detail Nurul Fauziah Rahman" component={Nurul}/>
    <Stack.Screen name="Detail Istianah Tusadiah" component={Isti}/>
    <Stack.Screen name="Detail Siti Nurazizah" component={Azizah}/>
    <Stack.Screen name="Detail Sarah Syakira Rambe" component={Sarah}/>
    <Stack.Screen name="Detail Dinda Putri Khoirunnisa" component={Dinda}/>
    <Stack.Screen name="Detail Siti Ruhu Salamah" component={Ruhu}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}