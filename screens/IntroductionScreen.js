import React, { useContext } from 'react';
import { Text, SafeAreaView, TouchableOpacity, View, Image} from 'react-native';

import ThemeContext from '../components/ThemeContext';
import Styles from '../components/Styles';

const IntroductionScreen = ({navigation}) => {
  const { theme } = useContext(ThemeContext);
  const { colors: themeColors } = theme;

  const styles = Styles({themeColors});
    return (
      <>
      <SafeAreaView style={styles.container}>
        <View style={styles.welcomeTitleContainer}>
          <Text style={styles.appName}>Task Dealer</Text> 
          <Text style={[styles.title, { marginTop: '10%' }]}>Welcome to the task{'\n'}
          manager of your dreams.</Text>
          <Image
            source={require('../components/ko.png')}
            style={styles.welcomeLogo}
            resizeMode="contain"
          />
          </View>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Profile', {name:'Jane'})}>
          <Text style={styles.buttonText}> Get started </Text>  
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Settings')}>
            <Text style={styles.buttonText}>
              Settings
            </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('AddTask')}>
            <Text style={styles.buttonText}>
              DEBUG: Add task
            </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Start')}>
          <Text style={styles.buttonText}> Navigate to start</Text>  
        </TouchableOpacity>
      </SafeAreaView>
      </>
    );
  };



  export default IntroductionScreen;

