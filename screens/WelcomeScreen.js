import * as React from 'react';
import { StyleSheet, Text, SafeAreaView, TouchableOpacity, View} from 'react-native';


const WelcomeScreen = ({navigation}) => {
    return (
      <>
      <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Welcome to Task Dealer insertIconHere
          </Text>
          </View>
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
        </SafeAreaView>
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
    },
    title:{
      fontSize:30,
      fontWeight:'bold',
      fontColor:'black'
    },
    titleContainer:{
      justifyContent:'flex-start',
      marginBottom:'50%',
      height:'10%',

    }

  });

  export default WelcomeScreen;

