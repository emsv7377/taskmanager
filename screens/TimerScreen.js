import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TouchableOpacity, Alert, SafeAreaView } from 'react-native';

/**     Used for flash + playing sounds, currently not in use  
 * import Torch from 'react-native-torch';
 * import { Audio } from 'expo-av';
 * import * as Permissions from 'expo-permissions'; */

import ThemeContext from '../components/ThemeContext';
import Styles from '../components/Styles';

/*      USAGE:      TODO: remove
    navigation.navigate('Timer', {
        initialTimerMinutes: initialTimerMinutes,
        taskName: taskName,
    });
*/

const Timer = ({ navigation, route }) => {
    const { theme } = useContext(ThemeContext);
    const { colors: themeColors } = theme;
    const styles = Styles({ themeColors });
    const initialTimerMinutes = route.params ? route.params.initialTimerMinutes : 30;       // defaults to 30 minutes 
    const taskName = route.params ? route.params.taskName : 'Task';
    const initialTimerSeconds = initialTimerMinutes * 60;   // convert to seconds 
    const [timerSeconds, setTimerSeconds] = useState(initialTimerSeconds);
    const [isTimerRunning, setIsTimerRunning] = useState(false);

    /** 
     * To enable playing sounds
     * TODO: currently not in use, due to compatibility issues w Expo Go
     **/
    /*const [sound, setSound] = useState();
    const [isSoundLoaded, setIsSoundLoaded] = useState(false);
    const requestAudioPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
    if (status !== 'granted') {
        console.warn('Audio permission not granted');
    }
    };

    useEffect(() => {
        requestAudioPermission();
        const loadSound = async () => {
        try {
            console.log('Before load');
            const { sound: audioSound } = await Audio.Sound.createAsync(
                //require('./alarm-clock-ringing.mp3')
                require('./alarm-piano.wav')
            );
            console.log('Sound loaded successfully');
            setSound(audioSound);
            setIsSoundLoaded(true);
        } catch (error) {
            console.error('Failed to load the sound', error);
        }
    };
  
    loadSound();
  
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
    }, []);
    */

    const formatTime = (seconds) => {
        const pad = (num, size) => `000${num}`.slice(size * -1);
        const hours = Math.floor(seconds/3600); // convert seconds to hours 
        const minutes = Math.floor((seconds % 3600) / 60);  // convert seconds to minutes 
        const remainingSeconds = Math.floor(seconds % 60);  
        return `${pad(hours, 2)}:${pad(minutes, 2)}:${pad(remainingSeconds, 2)}`;
    }

    // Set up a timer interval when timer is running 
    useEffect(() => {
        let timerInterval;

        if (isTimerRunning && timerSeconds > 0) {
            timerInterval = setInterval(() => {
                setTimerSeconds((prevSeconds) => { return prevSeconds - 1; });
            }, 1000);
        } else if (timerSeconds === 0) {
            handleTimerCompletion();
        }

        return () => {
            clearInterval(timerInterval);
        };
    }, [isTimerRunning, timerSeconds]);

    // Handle start of timer 
    const handleTimerStart = () => {
        setIsTimerRunning(true);
    };

    // Handles stop of timer 
    const handleTimerStop = () => {
        setIsTimerRunning(false);
    };

    // Handles resetting the timer 
    const handleTimerReset = () => {
        setIsTimerRunning(false);
        setTimerSeconds(initialTimerSeconds);
        //Torch.switchState(false); // Used for camera flash, not in use
    };

    // Determine action to take when the timer is completed 
    // const handleTimerCompletion = async () => { // Used when loading sound etc 
    const handleTimerCompletion = () => {
        // Set state for timer to false 
        setIsTimerRunning(false);
        Alert.alert('Time is up!');

        /**
         * Logic for flashing the camera flash and playing sound
         *  TODO: currently not working due to compatibility issues with Expo GO
         *      TODO: the implementation should be working though 
         */ 
        // TODO: not working due to compatibility issues with Expo Go
        /*if (Torch && Torch.hasTorch) {
            Torch.switchState(true); // Turn on the flash
            // You may want to add a delay before turning off the flash
            setTimeout(() => {
                Torch.switchState(false); // Turn off the flash after a delay
            }, 2000);
        } else {
            console.warn('Device does not support Torch/Flashlight');
        }*/


        // Play the sound 
        /*if (isSoundLoaded && sound && !sound.isPlaying) {
            try {
                await sound.setPositionAsync(0);
                await sound.setVolumeAsync(1.0);
                await sound.playAsync();
                console.warn('Successfully playing a sound');
            } catch (error) {
                console.error('Failed to play the sound', error);
            }
        } else {
            console.warn('Sound is not loaded or is already playing');
        }*/
        
    };

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>Timer</Text>
        </View>
        <Text style={styles.boxText}>Current task: {taskName}</Text>
        <View style={styles.timerButtonContainer}>
            <Text style={styles.timerText}>{formatTime(timerSeconds)}</Text>
            {/* If timer is running */}
                {!isTimerRunning ? (
                <TouchableOpacity style={styles.timerButton} onPress={handleTimerStart}>
                    <Text style={styles.buttonText}>Start</Text>
                </TouchableOpacity>
                ) : (
                <TouchableOpacity style={styles.timerButton} onPress={handleTimerStop}>
                    <Text style={styles.buttonText}>Stop</Text>
                </TouchableOpacity>
                )}
                <TouchableOpacity onPress={handleTimerReset}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Reset</Text>
                </TouchableOpacity>
                
            </View>
        <View style={styles.backButtonPlacement}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};

export default Timer;