import React, { useContext } from 'react';
import { StyleSheet, Text, SafeAreaView, TouchableOpacity, View} from 'react-native';
import ThemeContext from '../components/ThemeContext';
import Styles from '../components/Styles';

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
                <View style={styles.menuHeaderContainer}>    
                    <Text style={styles.menuHeader}>ACCOUNT & INTEGRITY</Text>
                </View>
                <TouchableOpacity
                    style={styles.menuItem}>
                    <Text style={styles.menuText}>Account settings</Text>
                    <Text style={styles.menuArrow}>{'→'}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.menuItem}> 
                    <Text style={styles.menuText}>Integrity policy</Text>
                    <Text style={styles.menuArrow}>{'→'}</Text>
                </TouchableOpacity>
                <View style={styles.menuHeaderContainer}>    
                    <Text style={styles.menuHeader}>PREFERENCES</Text>
                </View>
                <TouchableOpacity
                    style={styles.menuItem}
                    onPress={() => navigation.navigate('ColorThemes', { currentTheme : theme})}>
                    <Text style={styles.menuText}>Color themes</Text>
                    <Text style={styles.menuArrow}>{'→'}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.menuItem}
                    onPress={() => navigation.navigate('NotificationsScreen')}>
                    <Text style={styles.menuText}>Notifications</Text>
                    <Text style={styles.menuArrow}>{'→'}</Text>
                </TouchableOpacity>
                <View style={styles.menuHeaderContainer}>    
                    <Text style={styles.menuHeader}>HELP</Text>
                </View>
                <TouchableOpacity
                    style={styles.menuItem}>
                    <Text style={styles.menuText}>FAQ</Text>
                    <Text style={styles.menuArrow}>{'→'}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.menuItem}> 
                    <Text style={styles.menuText}>Contact us</Text>
                    <Text style={styles.menuArrow}>{'→'}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.menuItem}> 
                    <Text style={styles.menuText}>Sign out</Text>
                    <Text style={styles.menuArrow}>{'→'}</Text>
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