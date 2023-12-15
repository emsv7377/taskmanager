import React, { useContext, useState } from 'react';
import { Text, SafeAreaView, TouchableOpacity, View, Switch } from 'react-native';
import Slider from '@react-native-community/slider';

import ThemeContext from '../components/ThemeContext';
import Styles from '../components/Styles';

const SettingsNotificationsScreen = ({navigation}) => {
    const { theme } = useContext(ThemeContext);
    const { colors: themeColors } = theme;
    const styles = Styles({themeColors});

    const[allPaused, setAllPaused] = useState(false);
    const[flashOn, setFlash] = useState(false);
    const[soundOn, setSound] = useState(false);
    const[vibrationOn, setVibration] = useState(false);
    const[alertOn, setAlert] = useState(false);
    const[volumeLevel, setVolumeLevel] = useState(50);

    // Handle volume change 
    const onVolumeChange = (value) => {
        setVolumeLevel(value);
    };

    // Handle flash notification
    const toggleFlash = () => {
        setFlash(!flashOn);
    };

    // Handle sound notification 
    const toggleSound = () => {
        setSound(!soundOn);
    };

    // Handle vibration notification
    const toggleVibration = () => {
        setVibration(!vibrationOn);
    };

    // Handle alert notification 
    const toggleAlert = () => {
        setAlert(!alertOn);
    };

    // Handle all notifications 
    const toggleAllPaused = () => {
        const newPausedState = !allPaused;
        console.log("New pause state: ", newPausedState);
        setAllPaused(newPausedState);

        if (!newPausedState){
            setFlash(false);
            setSound(false);
            setVibration(false);
            setAlert(false);
        }
    };


    const toggleAllSwitches = (value) => {
        setFlash(value);
        setSound(value);
        setVibration(value);
        setAlert(value);
    };


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
                    <Text style={styles.menuHeader}>Notifications</Text>
                </View>
                <View
                    style={styles.menuItem}>
                    <Text style={styles.menuText}>
                        { allPaused ? 'Turn off all notifications' : 'Turn on all notifications' }</Text>
                    <View style={styles.switchContainer}>
                    <Switch
                        key={allPaused ? 'on' : 'off'}
                        value={allPaused}
                        onValueChange={(value) => {
                            toggleAllPaused();
                            toggleAllSwitches(value);
                        }}
                        thumbColor={allPaused ? (themeColors ? themeColors.switchThumbOn : 'red') : (themeColors ? themeColors.switchThumbOff : 'blue')}
                        trackColor={{ false : (themeColors ? themeColors.switchTrackOn : 'black'), true : (themeColors ? themeColors.switchTrackOff : 'yellow')}} />
                    </View>
                </View>
                <View
                    style={styles.menuItem}>
                    <Text style={styles.menuText}>Flash</Text>
                    <View style={styles.switchContainer}>
                    <Switch
                        value={flashOn}
                        onValueChange={toggleFlash}
                        thumbColor={ allPaused || flashOn ? (themeColors ? themeColors.switchThumbOn : 'red') : (themeColors ? themeColors.switchThumbOff : 'blue')}
                        trackColor={{ false : (themeColors ? themeColors.switchTrackOn : 'black'), true : (themeColors ? themeColors.switchTrackOff : 'yellow')}} />
                    </View>
                </View>
                
                <View
                    style={styles.menuItem}>
                    <Text style={styles.menuText}>Vibration</Text>
                    <View style={styles.switchContainer}>
                    <Switch
                        value={vibrationOn}
                        onValueChange={toggleVibration}
                        thumbColor={allPaused || vibrationOn ? (themeColors ? themeColors.switchThumbOn : 'red') : (themeColors ? themeColors.switchThumbOff : 'blue')}
                        trackColor={{ false : (themeColors ? themeColors.switchTrackOn : 'black'), true : (themeColors ? themeColors.switchTrackOff : 'yellow')}} />
                    </View>
                </View>
                <View
                    style={styles.menuItem}>
                    <Text style={styles.menuText}>Alert</Text>
                    <View style={styles.switchContainer}>
                    <Switch
                        value={alertOn}
                        onValueChange={toggleAlert}
                        thumbColor={allPaused || alertOn ? (themeColors ? themeColors.switchThumbOn : 'red') : (themeColors ? themeColors.switchThumbOff : 'blue')}
                        trackColor={{ false : (themeColors ? themeColors.switchTrackOn : 'black'), true : (themeColors ? themeColors.switchTrackOff : 'yellow')}} />
                    </View>
                </View>
                <View
                    style={styles.menuItem}>
                    <Text style={styles.menuText}>Sound</Text>
                    <View style={styles.switchContainer}>
                    <Switch
                        value={soundOn}
                        onValueChange={toggleSound}
                        thumbColor={allPaused || soundOn ? (themeColors ? themeColors.switchThumbOn : 'red') : (themeColors ? themeColors.switchThumbOff : 'blue')}
                        trackColor={{ false : (themeColors ? themeColors.switchTrackOn : 'black'), true : (themeColors ? themeColors.switchTrackOff : 'yellow')}} />
                    </View>
                </View>
                <View
                    style={styles.menuItem}>
                    <Text style={styles.menuText}>Volume</Text>
                    <View style={styles.sliderContainer}>
                        <Slider
                            style={styles.slider}
                            value={volumeLevel}
                            onValueChange={onVolumeChange}
                            minimumValue={0}
                            maximumValue={100}
                            minimumTrackTintColor={themeColors ? themeColors.sliderTrack : 'black'}
                            maximumTrackTintColor={themeColors ? themeColors.sliderTrack : 'gray'}
                        />
                    </View>
                </View>
    

                
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



export default SettingsNotificationsScreen;