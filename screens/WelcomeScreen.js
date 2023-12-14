import React, {useContext} from 'react';
import { StyleSheet, Text, SafeAreaView, TouchableOpacity, View, Image} from 'react-native';

import ThemeContext from '../assets/ThemeContext';

const WelcomeScreen = ({navigation}) => {
  const { theme } = useContext(ThemeContext);
  const { colors } = theme;

  useEffect(() => {
    console.log("theme: ", theme);
  })

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors ? colors.background : 'white', // default if not set
      alignItems: 'center',
      justifyContent: 'center',
    },
    button:{
      alignItems:'center',
      backgroundColor: colors ? colors.button : 'black', // default if not set 
      fontSize: 24,
      padding: 15,
      margin: 4,
      width:'80%',
      borderRadius: 20,
    },
    buttonText:{
      color: colors ? colors.buttonText : 'white',  // default if not set
      fontSize: 20,
    },
    title:{
      fontSize:30,
      fontWeight:'bold',
      color: colors ? colors.title : 'black', // default if not set 
    },
    titleContainer:{
      justifyContent:'flex-start',
      marginBottom:'50%',
      height:'10%',
    },
    logo: {
      width: 200,
      height: 200,
      marginBottom: 20,
    },

  });

    return (
      <>
      <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Welcome to Task Dealer -insert icon here-
          </Text>
          <Image
        source={require('../assets/ko.png')}
        style={styles.logo}
        resizeMode="contain"
        />
          </View>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Profile', {name:'Jane'})}>
          <Text style={styles.buttonText}> Get started </Text>  
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Settings')}>
            <Text style={styles.buttonText}>
              Settings
            </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Start')}>
          <Text style={styles.text}> Navigate to start</Text>  
        </TouchableOpacity>
      </SafeAreaView>
      </>
    );
  };



  export default WelcomeScreen;

