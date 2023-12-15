import React, { useContext, useEffect } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity, Alert } from 'react-native';
import * as Notifications from 'expo-notifications';
import ThemeContext from '../components/ThemeContext';
import Styles from '../components/Styles';
import NotificationScreen from '../components/NotificationScreen';

const ProfileScreen = ({ navigation, route }) => {
  const { theme } = useContext(ThemeContext);
  const { colors: themeColors } = theme;
  const styles = Styles({ themeColors });

  

  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(handleNotification);
    return() => subscription.remove();
  }, []);

  const handleNotification = (notification) => {
    Alert.alert(
      'Inkommande notifikation', notification.request.content.body);
  }
  useEffect(() => {
    // Set up the notification handler for foreground notifications
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,  // Set this to true to play the notification sound
        shouldSetBadge: false,
      }),
    });
    }, []);

  const handleSendNotification = () => {
    try{
      Notifications.scheduleNotificationAsync({
        content:{
          title: 'Testnotifikation',
          body:'Det här är ett testmeddelande',
        },
        trigger:null,
        sound:true,
        vibrate: true,
        ios:{
          sound:true,
          vibrate:true,
        }
      });
    } catch(error){
      console.error('Error scheduling notification', error);
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>
          This is {route.params.name}'s profile
        </Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={handleSendNotification}
      >
        <Text style={styles.buttonText}>Send Notification</Text>
      </TouchableOpacity>

      {/* Render NotificationScreen within ProfileScreen */}
      <NotificationScreen />
    </SafeAreaView>
  );
};

export default ProfileScreen;