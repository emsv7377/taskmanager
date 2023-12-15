import React from 'react';
import { View, Text, Button } from 'react-native';
import * as Notifications from 'expo-notifications';



const NotificationScreen = () => {

  const checkNotificationPermissions = async () => {
    const { status } = await Notifications.getPermissionsAsync();
    if(status !== 'granted'){
      const { status : newStatus } = await Notifications.requestPermissionsAsync();
      if(newStatus == 'granted'){
        console.log('Notification permission granted');
      };
    };  
  }

  const scheduleNotification = async () => {
    checkNotificationPermissions();

    try {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: 'Anpassad notifikation',
          body: 'Det här är innehållet i notifikationen.',
        },
        ios: {
          sound: true,
          _displayInForeground: true, // show notifications even when app is in foreground
          badge: true, // update application with number of notifications
          categoryIdentifier: 'custom-category',
          vibrate:true,
        },
        android: {
          channelId: 'custom-channel',
          sound: true,
          color:'blue', // color of notification 
          vibrate: true, 
          priority: Notifications.AndroidImportance.HIGH, // adjust priority 
          lights:true, // turn on the flash 
        },
      });
    } catch (error) {
      console.error('Error scheduling notification:', error);
    }
  };

  const cancelAllNotifications = async () => {
    await Notifications.cancelAllScheduledNotificationsAsync();
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Anpassade Notifikationer</Text>
      <Button title="Schemalägg notifikation" onPress={scheduleNotification} />
      <Button title="Avbryt alla notifikationer" onPress={cancelAllNotifications} />
    </View>
  );
};

export default NotificationScreen;