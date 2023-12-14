import React, { useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, SafeAreaView, Modal } from 'react-native';
import ThemeContext from '../assets/ThemeContext';

const ColorPicker = ({ onSelectColor, isVisible, onClose }) => {
  const { theme } = useContext(ThemeContext);
  const { colors } = theme;

  const colorOptions = colors.taskColors || {
    one: '#3498db', 
    two: '#e74c3c', 
    three: '#2ecc71', 
    four: '#f39c12', 
    five:'#9b59b6'
};

const colorArray = Object.entries(colorOptions);

  useEffect(() =>{
    console.log(colorOptions)
  }, [colorOptions]);

  const styles = StyleSheet.create({
    modalContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    colorPickerContainer: {
        width:'80%',
        padding: 20,
        backgroundColor: colors ? colors.colorPicker : 'black',
        borderRadius: 10,
        marginBottom: 20,
        elevation: 5, // adds shadow on Android 
        //opacity: 0.9,
    },
    colorPickerTitle: {
        fontSize: 18,
        //fontWeight: 'bold',
        marginBottom: 10,
    },
    colorOption: {
        width: 45,
        height: 45,
        borderRadius: 10,
        marginRight: 10,
    },
    closeButtonContainer:{
        alignItems: 'flex-end',
        marginTop: 20,
    },
    closeButton: {
        fontSize: 16,
        color: colors ? colors.buttonText : 'black',
    },
});

  return (
    <SafeAreaView>
        <Modal transparent={true} animationType="slide" visible={isVisible}>
            <View style={styles.modalContainer}>
                <View style={styles.colorPickerContainer}>
                    {/*<Text style={styles.colorPickerTitle}>Choose a Color:</Text>*/}
                    <FlatList
                        data={colorArray}
                        horizontal
                        keyExtractor={(item) => item[0]}
                        renderItem={({ item }) => (
                    <TouchableOpacity
                        style={[styles.colorOption, { backgroundColor: item[1] }]}
                        onPress={() => { onSelectColor(item[1]); onClose();
                        }}
                    /> )}
                    />
                    <TouchableOpacity style={styles.closeButtonContainer} onPress={onClose}>
                        <Text style={styles.closeButton}>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    </SafeAreaView>
  );
};

export default ColorPicker;