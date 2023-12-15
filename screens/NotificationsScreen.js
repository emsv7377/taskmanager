import React, { useContext, useState } from 'react';
import { Text, SafeAreaView, TouchableOpacity, View, Switch } from 'react-native';
import Slider from '@react-native-community/slider';

import ThemeContext from '../components/ThemeContext';
import Styles from '../components/Styles';

const NotificationsScreen = ({navigation}) => {
    const { theme } = useContext(ThemeContext);
    const { colors: themeColors } = theme;
    const styles = Styles({themeColors});

    const[allPaused, setAllPaused] = useState(false);
    const[flashOn, setFlashOn] = useState(false);
    const[soundOn, setSoundOn] = useState(false);
    const[vibrationOn, setVibrationOn] = useState(false);
    const[alertOn, setAlertOn] = useState(false);
    const[volumeLevel, setVolumeLevel] = useState(50);

    const toggleAllPaused = () => {
        setAllPaused(!allPaused);
    }

    const onVolumeChange = (value) => {
        setVolumeLevel(value);
    }


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
                    <Text style={styles.menuText}>Pause all</Text>
                    <View style={styles.switchContainer}>
                    <Switch
                        value={allPaused}
                        onValueChange={toggleAllPaused}
                        thumbColor={allPaused ? (themeColors ? themeColors.switchThumbOn : 'red') : (themeColors ? themeColors.switchThumbOff : 'blue')}
                        trackColor={{ false : (themeColors ? themeColors.switchTrackOn : 'black'), true : (themeColors ? themeColors.switchTrackOff : 'yellow')}} />
                    </View>
                </View>
                <View
                    style={styles.menuItem}>
                    <Text style={styles.menuText}>Flash</Text>
                    <View style={styles.switchContainer}>
                    <Switch
                        value={allPaused}
                        onValueChange={toggleAllPaused}
                        thumbColor={allPaused ? (themeColors ? themeColors.switchThumbOn : 'red') : (themeColors ? themeColors.switchThumbOff : 'blue')}
                        trackColor={{ false : (themeColors ? themeColors.switchTrackOn : 'black'), true : (themeColors ? themeColors.switchTrackOff : 'yellow')}} />
                    </View>
                </View>
                <View
                    style={styles.menuItem}>
                    <Text style={styles.menuText}>Sound</Text>
                    <View style={styles.switchContainer}>
                    <Switch
                        value={allPaused}
                        onValueChange={toggleAllPaused}
                        thumbColor={allPaused ? (themeColors ? themeColors.switchThumbOn : 'red') : (themeColors ? themeColors.switchThumbOff : 'blue')}
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
                <View
                    style={styles.menuItem}>
                    <Text style={styles.menuText}>Vibration</Text>
                    <View style={styles.switchContainer}>
                    <Switch
                        value={allPaused}
                        onValueChange={toggleAllPaused}
                        thumbColor={allPaused ? (themeColors ? themeColors.switchThumbOn : 'red') : (themeColors ? themeColors.switchThumbOff : 'blue')}
                        trackColor={{ false : (themeColors ? themeColors.switchTrackOn : 'black'), true : (themeColors ? themeColors.switchTrackOff : 'yellow')}} />
                    </View>
                </View>
                <View
                    style={styles.menuItem}>
                    <Text style={styles.menuText}>Alert</Text>
                    <View style={styles.switchContainer}>
                    <Switch
                        value={allPaused}
                        onValueChange={toggleAllPaused}
                        thumbColor={allPaused ? (themeColors ? themeColors.switchThumbOn : 'red') : (themeColors ? themeColors.switchThumbOff : 'blue')}
                        trackColor={{ false : (themeColors ? themeColors.switchTrackOn : 'black'), true : (themeColors ? themeColors.switchTrackOff : 'yellow')}} />
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



export default NotificationsScreen;