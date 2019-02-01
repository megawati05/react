//import liraries
import React, { Component } from 'react'; 
import { View, Text, StyleSheet } from 'react-native';

// create a component
class Riwayat extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Riwayat Kami</Text>
                <Text>Nama : 16053014 (Megawatii)</Text>
                <Text>Alamat : Bangil</Text>
                <Text>Fakultas : Teknik</Text>
                <Text>Prodi : Teknologi Informasi</Text>
                <Text>---------------------</Text>
                
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

//make this component available to the app
export default Riwayat;