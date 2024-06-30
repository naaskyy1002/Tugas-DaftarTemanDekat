import React from 'react'
import {Text, View, StyleSheet, Button} from 'react-native';
import Lengkap from './lengkap'

const Isti = ({navigation}) => {
  return(
    <View>
    <Lengkap 
        gambar={require('../assets/Isti.png')}
        judul="Istianah Tusadiah"
        lahir="30 Oktober 2002"
        umur="21 Tahun"
        tinggal="Kabupaten Sukabumi"
        status="Mahasiswa Universitas Muhammadiyah Sukabumi"
        telpon="0882-9066-1853"
        email="istianahtsdh@gmail.com"
        quotes="I was born to be real, not to be perfect"/>
      <Button title="Kembali" onPress={() => navigation.goBack('Home')}/>
    </View>
  );
};

export default Isti;