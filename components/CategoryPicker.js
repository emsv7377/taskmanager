import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, FlatList, SafeAreaView, Modal } from 'react-native';
import ThemeContext from './ThemeContext';
import Styles from './Styles';

import Ionicons from 'react-native-vector-icons/Ionicons';


const CategoryPicker = ({ onSelectCategory, isVisible, onClose }) => {
    // Fetch current theme and colors of current theme 
    const { theme } = useContext(ThemeContext);
    const { colors } = theme;
    const styles = Styles(colors);

    // Fetch category options 
    const categoryOptions = [
        { id: '1', name: 'Wellbeing', icon: 'heart-outline'},
        { id: '2', name: 'Home', icon: 'home-outline'},
        { id: '3', name: 'Health', icon: 'medkit-outline' },
        { id: '4', name: 'Fun', icon: 'game-controller-outline' },

    ];

    // Convert colorOptions object to an array of key-value pairs
    return (
        <SafeAreaView>
            <Modal transparent={true} animationType="slide" visible={isVisible}>
                <View style={styles.modalContainer}>
                    <View style={[styles.colorPickerContainer, { flexDirection: 'row',}]}>
                        <FlatList
                            data={categoryOptions}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={[styles.colorPickerButton, {backgroundColor: '#fff', justifyContent:'center', alignItems:'center', padding:10,}]}
                                    onPress={() => { onSelectCategory(item); onClose(); }}
                                >
                                    <Ionicons name={item.icon} size={24} color={colors.icon} />
                                    <Text style={styles.categoryText}>{item.name}</Text>
                                </TouchableOpacity>
                            )}
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

export default CategoryPicker;