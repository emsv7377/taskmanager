import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, TouchableOpacity, View, Dimensions, FlatList, Alert } from 'react-native';


const items = [
{
    id: 1, 
    title: 'dark',
    backgroundColor: 'black',
        color: 'white',
    },
    {
        id: 2,
        title: 'light',
        backgroundColor: '#d3d3d3',
        color: 'black',
    },
    {
        id:3,  
        title: 'pastel',
        backgroundColor: '#FF90BC',
        color: '#F9F9E0',
    },
    {
        id:4, 
        title: 'sailor',
        backgroundColor: '#5A7684',
        color: 'white ',
    }
]


const renderItem = ({item}) => {
    return(
        <TouchableOpacity 
            style={{ 
                backgroundColor: item.backgroundColor, 
                borderRadius: 15, 
                //height:'60%',
                //width:'40%',
                width: Dimensions.get('window').width / 2 - 20, 
                margin: 6, 
                alignItems:'center',
                justifyContent:'center'}}
            onPress={() => Alert.alert('dark theme')}>
            <Text 
                key={item.id} 
                style={{ fontSize:20, color:item.color, fontWeight: 'bold', padding:30,}}>
                    {item.title}
                </Text>
        </TouchableOpacity>
    )
}

const ColorThemesScreen = ({navigation}) => {
    
    return(
        <>
        <SafeAreaView style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}> Color themes </Text>
            </View>
            <FlatList
                data={items}
                renderItem={renderItem}
                keyExtractor={item => String(item.id)}
                ItemSeparatorComponent={() => <View style={{ height: 3}}/>}
                numColumns={2}
                key={4}
                contentContainerStyle={styles.flatListContainer}
                />

        </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    flatListContainer:{
        alignItems:'center',
        justifyContent:'center',
        flexGrow:1,
    },
    title:{
        fontSize:30,
        fontWeight:'bold',
        fontColor:'black'
    },
    titleContainer:{
        justifyContent:'flex-end',
        //marginBottom:'50%',
        //height:'10%',
    }

  });

export default ColorThemesScreen;