import React, { useState, useContext } from 'react';
import { StyleSheet, Text, SafeAreaView, TouchableOpacity, View, Dimensions, FlatList, Alert } from 'react-native';
import { DARK, LIGHT, PASTEL, SAILOR } from '../assets/Theme';

import ThemeContext from '../assets/ThemeContext';

const items = [
    {
        id: 1, 
        title: 'dark',
        backgroundColor: 'black',
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
        backgroundColor: '#FF90BC',
        color: '#F9F9E0',
    },
    {
        id:4, 
        title: 'sailor',
        backgroundColor: '#5A7684',
        color: 'white ',
    }
]



export default ColorThemesScreen = ({navigation}) => {
    //const [theme, setTheme] = useState({ theme: DARK });

    const [theme, setCurrentTheme] = useContext(ThemeContext);

    const setTheme = (newTheme) => {
        setCurrentTheme({ theme: newTheme })
    }

    const onThemeChange = (theme) => {
        let newTheme = {};

        switch(theme){
            case 'dark':
                newTheme = DARK;
                break;
            case 'light':
                newTheme = LIGHT;
                break;
            case 'pastel':
                newTheme = PASTEL;
                break;
            case 'sailor':
                newTheme = SAILOR;
                break;
            default:
                newTheme = DARK; 
                break;
        }
        setTheme({ theme: newTheme });
    }

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
            color: theme.colors ? theme.colors.title : 'red', // defaults to black if theme is not set 
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
                onPress={() => onThemeChange(theme)}>
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
                style={{ 
                    backgroundColor: 'gray', 
                    borderRadius: 15, 
                    width: Dimensions.get('window').width / 2 - 20, 
                    margin: 6, 
                    alignItems:'center',
                    justifyContent:'center'}}
                onPress={() => navigation.goBack()}/>

        </SafeAreaView>
        </>
    )
}



