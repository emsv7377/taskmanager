import React from 'react';
import { View, Text } from 'react-native';

const Notification = ({ message, type }) => {
  // Beroende på notifikationstypen kan du anpassa stilen eller innehållet här
  const notificationStyle = {
    backgroundColor: type === 'success' ? 'green' : 'red',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  };

  return (
    <View style={notificationStyle}>
      <Text>{message}</Text>
    </View>
  );
};

export default Notification;