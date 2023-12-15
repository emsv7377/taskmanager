import React, { useContext } from 'react';
import { Text, SafeAreaView, TouchableOpacity, View, Dimensions, FlatList } from 'react-native';
import { DARK, LIGHT, PASTEL, FOREST } from '../components/Theme';

import ThemeContext from '../components/ThemeContext';
import Styles from '../components/Styles';

// TODO: change these? Fetch from themes? 
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
    // Fetch current theme and color preferences 
    const { theme, setTheme } = useContext(ThemeContext);
    const { colors:themeColors } = theme;
    const styles = Styles({themeColors});

    // Handle theme change 
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

    // Render theme option items 
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
            {/* Render a grid with the different theme options */}
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



