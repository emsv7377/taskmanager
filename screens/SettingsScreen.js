import React, { useContext } from 'react';
import { StyleSheet, Text, SafeAreaView, TouchableOpacity, View} from 'react-native';
import ThemeContext from '../assets/ThemeContext';



const SettingsScreen = ({navigation}) => {
    const { theme } = useContext(ThemeContext);
    const { colors } = theme;

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: colors ? colors.background : 'white',
          alignItems: 'center',
          justifyContent: 'flex-start',
          verticalAlign:'top',
        },
        title:{
            fontSize: 24,
            color: colors ? colors.title : 'red',
            fontWeight: 'bold',
        },
        titleContainer:{
            margin:'10%',
            height:'10%',
          },
        settingsList:{
            width:'80%',
        },
        listItem:{
            borderColor: colors ? colors.border : 'black',
            backgroundColor : colors ? colors.button : 'grey',
            borderWidth:1,
            padding:10,
            margin:2,
            borderRadius:20,
        },
        listText:{
            fontSize:20,
            color: colors ? colors.buttonText : 'black',
        },
        button:{
            backgroundColor: colors ? colors.button : 'green',
            fontSize: 24,
            padding: 15,
            margin: 4,
            width:'80%',
            borderRadius: 20,
            marginTop:60,
          },
        buttonText:{
            color: colors ? colors.buttonText : 'red',
            fontSize: 20,
        },
      }
    );
    
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
                onPress={() => navigation.navigate('ColorThemes', { currentTheme : theme})}>
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



export default SettingsScreen;