//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class Profile extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Nama : Megawati</Text>
                <Text>NPM : 16053014</Text>
                <Text>TEKNOLOGI INFORMASI</Text>
                <Text>SEMESTER 5</Text>
                <Text>Kelas Malam</Text>
                <Text>=====================</Text>
                
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
export default Profile;