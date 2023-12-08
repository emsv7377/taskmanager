import * as React from 'react';
import { StyleSheet, Text, SafeAreaView, TouchableOpacity, View} from 'react-native';



const SettingsScreen = ({navigation}) => {
    
    return(
        <>
        <SafeAreaView style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}> 
                Settings 
                </Text>
            </View>
            <View style={styles.settingsList}>
            <TouchableOpacity
                style={styles.listItem}
                onPress={() => navigation.navigate('ColorThemes')}>
                <Text style={styles.listText}>
                    Color themes
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.listItem}>
                <Text style={styles.listText}>
                    Notifications
                </Text>
            </TouchableOpacity>
            </View>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.goBack()} >
                <Text style={styles.buttonText}> Back </Text>
            </TouchableOpacity>  
        </SafeAreaView>
    </>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
      verticalAlign:'top',
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
    },
    titleContainer:{
        margin:'10%',
        height:'10%',
      },
    settingsList:{
        backgroundColor:'white',
        width:'80%',
        //height:'auto'
    },
    listItem:{
        borderColor:'black',
        borderWidth:1,
        padding:10,
        margin:2,
        borderRadius:20,
    },
    listText:{
        fontSize:20,
    },
    button:{
        backgroundColor:'black',
        fontSize: 24,
        padding: 15,
        margin: 4,
        width:'80%',
        borderRadius: 20,
        marginTop:60,
      },
    buttonText:{
        color:'white',
        fontSize: 20,
    },
  }
);

export default SettingsScreen;