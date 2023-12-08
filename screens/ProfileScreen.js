import * as React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, TouchableOpacity} from 'react-native';

const ProfileScreen = ({navigation, route}) => {
    return( 
        <SafeAreaView style={styles.container}> 
            <Text>
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

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button:{
        alignItems:'center',
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

export default ProfileScreen;