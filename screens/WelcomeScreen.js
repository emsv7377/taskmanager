import * as React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, Alert, Pressable, TouchableOpacity} from 'react-native';

const WelcomeScreen = ({navigation}) => {
    return (
      <>
      <SafeAreaView styles={styles.container}>
        <Button 
          title="Navigate to profile"
          onPress={() => navigation.navigate('Profile', {name:'Jane'})}/>
        <Button
          title="Settings"
          style={styles.button}
          onPress={() => navigation.navigate('Settings')}
        />
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
      fontSize: 24,
    }
  });

  export default WelcomeScreen;

