import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, FlatList, SafeAreaView, Modal } from 'react-native';
import ThemeContext from './ThemeContext';
import Styles from './Styles';

const ColorPicker = ({ onSelectColor, isVisible, onClose }) => {
    // Fetch current theme and colors of current theme 
    const { theme } = useContext(ThemeContext);
    const { colors: themeColors } = theme;
    const styles = Styles({themeColors});

    // Fetch colorOptions for task colors for current theme
    const colorOptions = themeColors.taskColors || {
        // If theme is null, default to these colors 
        one: '#3498db', 
        two: '#e74c3c', 
        three: '#2ecc71', 
        four: '#f39c12', 
        five:'#9b59b6'
    };

    // Convert colorOptions object to an array of key-value pairs
    const colorArray = Object.entries(colorOptions);

    return (
        <SafeAreaView>
            <Modal transparent={true} animationType="slide" visible={isVisible}>
                <View style={styles.modalContainer}>
                    <View style={styles.optionsContainer}>
                        <FlatList
                            data={colorArray}
                            horizontal
                            keyExtractor={(item) => item[0]}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={[styles.colorOption, { backgroundColor: item[1] }]}
                                    onPress={() => { onSelectColor(item[1]); onClose(); }}
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