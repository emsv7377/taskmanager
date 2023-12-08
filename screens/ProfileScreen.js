import React, { useContext } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, TouchableOpacity} from 'react-native';
import ThemeContext from '../assets/ThemeContext';

const ProfileScreen = ({navigation, route}) => {
    const theme = useContext(ThemeContext);

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: theme.colors ? theme.colors.background : 'black',
          alignItems: 'center',
          justifyContent: 'center',
        },
        text:{
            fontSize: 20,
            color: theme.colors ? theme.colors.text : 'red',
        },
        button:{
            alignItems:'center',
            backgroundColor: theme.colors ? theme.colors.button : 'gray',
            fontSize: 24,
            padding: 15,
            margin: 4,
            width:'80%',
            borderRadius: 20,
          },
        buttonText:{
            color: theme.colors ? theme.colors.buttonText : 'darkgrey',
            fontSize: 20,
        },
      });

    return( 
        <SafeAreaView style={styles.container}> 
            <Text style={styles.text}>
                This is {route.params.name}'s profile
            </Text>       
            <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.goBack()} >
          <Text style={styles.buttonText}> Back </Text>  
        </TouchableOpacity>
        </SafeAreaView> 
    );
};



export default ProfileScreen;