import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Torch from 'react-native-torch';

const Timer = () => {
  const [timerSeconds, setTimerSeconds] = useState(10); // Set your desired timer duration in seconds
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    let timerInterval;

    if (isTimerRunning) {
      timerInterval = setInterval(() => {
        setTimerSeconds((prevSeconds) => {
          if (prevSeconds === 0) {
            clearInterval(timerInterval);
            handleTimerCompletion();
            return 0;
          }
          return prevSeconds - 1;
        });
      }, 1000);
    }

    return () => {
      clearInterval(timerInterval);
    };
  }, [isTimerRunning]);

  const handleTimerStart = () => {
    setIsTimerRunning(true);
  };

  const handleTimerCompletion = () => {
    setIsTimerRunning(false);
    Torch.switchState(true); // Turn on the flash
    // You may want to add a delay before turning off the flash
    setTimeout(() => {
      Torch.switchState(false); // Turn off the flash after a delay
    }, 2000);
    // Add other actions here
  };

  const handleTimerReset = () => {
    setIsTimerRunning(false);
    setTimerSeconds(10); // Reset the timer duration
    Torch.switchState(false); // Make sure the flash is off
  };

  return (
    <View>
      <Text>Timer: {timerSeconds}s</Text>
      <TouchableOpacity 
        style={{ color:'white', padding:10, }}
        onPress={handleTimerStart}>
        <Text>Start Timer</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleTimerReset}>
        <Text>Reset Timer</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Timer;