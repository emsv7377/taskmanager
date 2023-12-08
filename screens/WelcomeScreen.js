import * as React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, Alert, Pressable, TouchableOpacity, Touchable} from 'react-native';

const WelcomeScreen = ({navigation}) => {
    return (
      <>
      <View style={styles.container}>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Profile', {name:'Jane'})}>
          <Text style={styles.text}> Navigate to profile </Text>  
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Settings')}>
            <Text style={styles.text}>
              Settings
            </Text></TouchableOpacity>
        </View>
      </>
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
    text:{
      color:'white',
      fontSize: 20,
    }
  });

  export default WelcomeScreen;

