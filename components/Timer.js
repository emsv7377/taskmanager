import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Torch from 'react-native-torch';
import { Audio } from 'expo-av';

import * as Permissions from 'expo-permissions';

import ThemeContext from '../components/ThemeContext';
import Styles from './Styles';

const Timer = () => {
  const initialTimerSeconds = 3;
  const [timerSeconds, setTimerSeconds] = useState(initialTimerSeconds);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const [sound, setSound] = useState();
  const [isSoundLoaded, setIsSoundLoaded] = useState(false);

  const requestAudioPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
    if (status !== 'granted') {
      console.warn('Audio permission not granted');
    }
  };


  const { theme } = useContext(ThemeContext);
  const { colors: themeColors } = theme;
  const styles = Styles({ themeColors });
  
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

  useEffect(() => {
    let timerInterval;

    if (isTimerRunning && timerSeconds > 0) {
      timerInterval = setInterval(() => {
        setTimerSeconds((prevSeconds) => {
          return prevSeconds - 1;
        });
      }, 1000);
    } else if (timerSeconds === 0) {
      handleTimerCompletion();
    }

    return () => {
      clearInterval(timerInterval);
    };
  }, [isTimerRunning, timerSeconds]);

  const handleTimerStart = () => {
    setIsTimerRunning(true);
  };

  const handleTimerStop = () => {
    setIsTimerRunning(false);
  };

  const handleTimerReset = () => {
    setIsTimerRunning(false);
    setTimerSeconds(initialTimerSeconds);
    Torch.switchState(false); // Make sure the flash is off
  };

  const handleTimerCompletion = async () => {
    setIsTimerRunning(false);

    // Logic for flashing the torch 
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
    if (isSoundLoaded && sound && !sound.isPlaying) {
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
      }
    // Add other actions here
  };

  return (
    <View>
      <Text style={styles.text}>Timer: {timerSeconds} s</Text>
      {!isTimerRunning ? (
        <TouchableOpacity style={styles.button} onPress={handleTimerStart}>
          <Text>Start Timer</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.button} onPress={handleTimerStop}>
          <Text>Stop Timer</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={handleTimerReset}>
        <Text>Reset Timer</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Timer;