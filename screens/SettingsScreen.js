import * as React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView} from 'react-native';



const SettingsScreen = ({navigation}) => {
    <SafeAreaView styles={styles.container}>
        <Text style={styles.title}> Settings </Text>
    </SafeAreaView>

};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
    }
  }
);

export default SettingsScreen;