import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, FlatList, SafeAreaView, Modal } from 'react-native';
import ThemeContext from './ThemeContext';
import Styles from './Styles';

import Entypo from 'react-native-vector-icons/Entypo';


const PriorityPicker = ({ onSelectPriority, isVisible, onClose }) => {
    // Fetch current theme and colors of current theme 
    const { theme } = useContext(ThemeContext);
    const { colors: themeColors } = theme;
    const styles = Styles({themeColors});

    // Fetch priority options 
    const priorityOptions = [
        { id: '1', name: 'Low', icon: 'dot-single'},
        { id: '2', name: 'Medium', icon: 'dots-two-horizontal'},
        { id: '3', name: 'High', icon: 'dots-three-horizontal' },

    ];

    return (
        <SafeAreaView>
            <Modal transparent={true} animationType="slide" visible={isVisible}>
                <View style={styles.modalContainer}>
                    <View style={[styles.optionsContainer, {justifyContent:'center'}]}>
                        {/*Icon row */}
                        <FlatList
                            data={priorityOptions}
                            horizontal
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={styles.iconContainer}
                                    onPress={() => { onSelectPriority(item); onClose(); }}
                                >
                                    <Entypo name={item.icon} size={24} color={themeColors.icon} />
                                    <Text style={styles.priorityText}>{item.name}</Text>
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

export default PriorityPicker;