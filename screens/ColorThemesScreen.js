import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, TouchableOpacity, View} from 'react-native';

const ColorThemesScreen = ({navigation}) => {
    const [theme, setTheme] = useState("");

    return(
        <>
        <SafeAreaView style={styles.container}>
            <TouchableOpacity 
                style={{ backgroundColor:'black', padding: 15, margin: 4, width: '40%' }}
                onPress={() => Alert.alert('dark theme')}>
                    <Text style={{ fontSize:20, fontColor:'white', fontWeight:bold}}> dark </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={{ backgroundColor:'gray', padding: 15, margin: 4, width: '40%' }}
                onPress={() => Alert.alert('light theme')}>
                    <Text style={{ fontSize:20, fontColor:'black', fontWeight:bold}}> light </Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={{ backgroundColor:'black', padding: 15, margin: 4, width: '40%' }}
                onPress={() =>  Alert.alert('pastel theme')}>
                    <Text> dark </Text>
                </TouchableOpacity>
        </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    darkTheme:{
        backgroundColor:'black',
        fontSize: 24,
        padding: 15,
        margin: 4,
        width:'80%',
        borderRadius: 20,
      },
    buttonText:{
        color:'white',
        fontSize: 20,
    },

  });

export default ColorThemesScreen;