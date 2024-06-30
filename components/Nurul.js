import React from 'react'
import {Text, View, StyleSheet, Button} from 'react-native';
import Lengkap from './lengkap'

const Nurul = ({navigation}) => {
  return(
    <View>
    <Lengkap 
        gambar={require('../assets/Nurul.png')}
        judul="Nurul Fauziah Rahman"
        lahir="30 Juli 2002"
        umur="21 Tahun"
        tinggal="Kota Sukabumi"
        status="Mahasiswa Universitas Pendidikan Indonesia"
        telpon="0831-3144-8108"
        email="nurulfauuzz@gmail.com"
        quotes="Try to enjoy life, Don't rush cz we're all have our own pace"/>
      <Button title="Kembali" onPress={() => navigation.goBack('Home')}/>
    </View>
  );
};

export default Nurul;