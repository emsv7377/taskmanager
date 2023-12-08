import * as React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView} from 'react-native';

const ProfileScreen = ({navigation, route}) => {
    return( 
        <SafeAreaView style={styles.container}> 
            <Text>
                This is {route.params.name}'s profile
            </Text>       
        </SafeAreaView> 
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default ProfileScreen;