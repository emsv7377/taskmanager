import React, { useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, SafeAreaView, Modal } from 'react-native';
import ThemeContext from './ThemeContext';
import Styles from './Styles';

const ColorPicker = ({ onSelectColor, isVisible, onClose }) => {
  const { theme } = useContext(ThemeContext);
  const { colors } = theme;

  const styles = Styles(colors);

  // fetch task colors from theme
  const colorOptions = colors.taskColors || {
    // if theme is null, default to these colors 
    one: '#3498db', 
    two: '#e74c3c', 
    three: '#2ecc71', 
    four: '#f39c12', 
    five:'#9b59b6'
};

const colorArray = Object.entries(colorOptions);

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