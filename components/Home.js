import React from 'react'
import {Text, View, Stylesheet, Button} from 'react-native';
import Contact from './kontak'

const Home=({navigation}) =>{
  return(
    <View>
    <Contact 
        gambar={require('../assets/Nurul.png')}
        judul="Nurul Fauziah Rahman"
        status="Mahasiswa"
        telpon="0831-3144-8108"/>
    <Button title = 'Detail' onPress={()=>navigation.navigate('Detail Nurul Fauziah Rahman')}/>
    <Contact 
        gambar={require('../assets/Isti.png')}
        judul="Istianah Tusadiah"
        status="Mahasiswa"
        telpon="0882-9066-1853"/>
    <Button title = 'Detail' onPress={()=>navigation.navigate('Detail Istianah Tusadiah')}/>
    <Contact 
        gambar={require('../assets/Azizah.png')}
        judul="Siti Nurazizah"
        status="Mahasiswa"
        telpon="0858-9250-1681"/>
    <Button title = 'Detail' onPress={()=>navigation.navigate('Detail Siti Nurazizah')}/>
    <Contact 
        gambar={require('../assets/Sarah.png')}
        judul="Sarah Syakira Rambe"
        status="Mahasiswa"
        telpon="0858-7232-2510"/>
    <Button title = 'Detail' onPress={()=>navigation.navigate('Detail Sarah Syakira Rambe')}/>
    <Contact 
        gambar={require('../assets/Dinda.png')}
        judul="Dinda Putri Khoirunnisa"
        status="Mahasiswa"
        telpon="0857-2064-4655"/>
    <Button title = 'Detail' onPress={()=>navigation.navigate('Detail Dinda Putri Khoirunnisa')}/>
    <Contact 
        gambar={require('../assets/Ruhu.png')}
        judul="Siti Ruhu Salamah"
        status="Mahasiswa"
        telpon="0858-6450-3792"/>
    <Button title = 'Detail' onPress={()=>navigation.navigate('Detail Siti Ruhu Salamah')}/>
    </View>
  )
};

export default Home;