import React from 'react'
import {Text, View, StyleSheet, Button} from 'react-native';
import Lengkap from './lengkap'

const Sarah = ({navigation}) => {
  return(
    <View>
    <Lengkap 
        gambar={require('../assets/Sarah.png')}
        judul="Sarah Syakira Rambe"
        lahir="8 Maret 2003"
        umur="21 Tahun"
        tinggal="Cikukulu, Kabupaten Sukabumi"
        status="Mahasiswa Universitas Muhammadiyah Sukabumi"
        telpon="0858-7232-2510"
        email="rambesarah03@gmail.com"
        quotes="Tidak semua orang terluka di tempat yang sama"/>
      <Button title="Kembali" onPress={() => navigation.goBack('Home')}/>
    </View>
  );
};

export default Sarah;