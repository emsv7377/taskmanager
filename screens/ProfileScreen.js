import React, { useContext } from 'react';
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import ThemeContext from '../components/ThemeContext';
import Styles from '../components/Styles';
import Timer from '../components/Timer';

const ProfileScreen = ({ navigation, route }) => {
  const { theme } = useContext(ThemeContext);
  const { colors: themeColors } = theme;
  const styles = Styles({ themeColors });

  
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
      <Timer/>
    </SafeAreaView>
  );
};

export default ProfileScreen;