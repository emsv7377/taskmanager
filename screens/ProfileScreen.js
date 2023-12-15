import React, { useContext } from 'react';
import { Text, View, Button, SafeAreaView, TouchableOpacity} from 'react-native';
import ThemeContext from '../components/ThemeContext';
import Styles from '../components/Styles';


const ProfileScreen = ({navigation, route}) => {
  const { theme } = useContext(ThemeContext);   // Fetch current theme 
  const { colors: themeColors } = theme;        // Fetch colors of theme
  const styles = Styles({themeColors});         

  return( 
      <SafeAreaView style={styles.container}> 
        <View>
          <Text style={styles.text}>
              This is {route.params.name}'s profile
          </Text>       
        </View>
        <TouchableOpacity 
            style={styles.button}
            onPress={() => navigation.goBack()} >
        <Text style={styles.buttonText}> Back </Text>  
      </TouchableOpacity>
      </SafeAreaView> 
  );
};



export default ProfileScreen;