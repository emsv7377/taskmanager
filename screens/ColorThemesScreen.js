import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, TouchableOpacity, View, Dimensions, FlatList, Alert } from 'react-native';
import { DARK, LIGHT, PASTEL, FOREST } from '../assets/Theme';

import ThemeContext from '../assets/ThemeContext';


const items = [
    {
        id: 1, 
        title: 'dark',
        backgroundColor: '#3A3B3C',
        color: 'white',
    },
    {
        id: 2,
        title: 'light',
        backgroundColor: '#d3d3d3',
        color: 'black',
    },
    {
        id:3,  
        title: 'pastel',
        backgroundColor: '#cb7a9d',
        color: '#F9F9E0',
    },
    {
        id:4, 
        title: 'forest',
        backgroundColor: '#AAC8A7',
        color: 'white ',
    }
]


export default ColorThemesScreen = ({navigation, route}) => {
    //const [theme, setTheme] = useState({ theme: DARK });
    const { theme, setTheme } = useContext(ThemeContext);
    //const theme = route.params?.currentTheme || DARK; 
    const { colors } = theme;
    /*useEffect(() => {
        console.log('Current theme: ', theme);
    },[theme]);*/

    const onThemeChange = (selectedTheme) => {
        let newTheme = {};

        switch(selectedTheme){
            case 'dark':
                newTheme = DARK;
                break;
            case 'light':
                newTheme = LIGHT;
                break;
            case 'pastel':
                newTheme = PASTEL;
                break;
            case 'forest':
                newTheme = FOREST;
                break;
            default:
                newTheme = DARK; 
                break;
        }
        setTheme(newTheme);
    }

    /* Allows dynamic colors */
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: theme.colors ? theme.colors.background : 'white', // default to white if theme is not set 
          alignItems: 'center',
          justifyContent: 'center',
        },
        flatListContainer:{
            alignItems:'center',
            justifyContent:'center',
            flexGrow:1,
        },
        title:{
            fontSize:30,
            fontWeight:'bold',
            color: colors ? theme.colors.title : 'red', // defaults to black if theme is not set 
        },
        button:{
            alignItems:'center',
            backgroundColor: colors ? colors.backButton : 'gray',
            fontSize: 24,
            padding: 15,
            margin: 4,
            width:'80%',
            borderRadius: 15,
          },
        titleContainer:{
            justifyContent:'flex-end',
            //marginBottom:'50%',
            //height:'10%',
        }
    
      });

    const renderItem = ({item}) => {
        return(
            <>
            <TouchableOpacity 
                style={{ 
                    backgroundColor: item.backgroundColor, 
                    borderRadius: 15, 
                    width: Dimensions.get('window').width / 2 - 20, 
                    margin: 6, 
                    alignItems:'center',
                    justifyContent:'center'}}
                onPress={() => onThemeChange(item.title)}>
                <Text 
                    key={item.id} 
                    style={{ fontSize:20, color: item.color, fontWeight: 'bold', padding:30,}}>
                        {item.title}
                </Text>
            </TouchableOpacity>
            </>
        )
    }

    return(
        <>
        <SafeAreaView style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Color themes</Text>
            </View>
            <FlatList
                data={items}
                renderItem={renderItem}
                keyExtractor={item => String(item.id)}
                ItemSeparatorComponent={() => <View style={{ height: 3}}/>}
                numColumns={2}
                key={4}
                contentContainerStyle={styles.flatListContainer}
                />
            <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.goBack()} >
                <Text style={styles.buttonText}> Back </Text>
            </TouchableOpacity> 

        </SafeAreaView>
        </>
    )
}



