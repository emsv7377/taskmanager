import React, { useContext } from 'react';
import { StyleSheet, Text, SafeAreaView, TouchableOpacity, View} from 'react-native';
import ThemeContext from '../assets/ThemeContext';
import Styles from '../assets/Styles';

const SettingsScreen = ({navigation}) => {
    const { theme } = useContext(ThemeContext);
    const { colors: themeColors } = theme;
    const styles = Styles({themeColors});
    
    return(
        <>
        <SafeAreaView style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}> 
                Settings 
                </Text>
            </View>
            <View style={styles.menu}>
            <TouchableOpacity
                style={styles.menuItem}
                onPress={() => navigation.navigate('ColorThemes', { currentTheme : theme})}>
                <Text style={styles.menuText}>
                    Color themes
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.menuItem}>
                <Text style={styles.menuText}>
                    Notifications
                </Text>
            </TouchableOpacity>
            </View>
            <View style={styles.backButtonPlacement}>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => navigation.goBack()} >
                <Text style={styles.buttonText}> Back </Text>
            </TouchableOpacity>  
            </View>
        </SafeAreaView>
    </>
    )
};



export default SettingsScreen;