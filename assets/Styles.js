import React, { useContext, useEffect } from 'react';
import { StyleSheet } from 'react-native';

// colors 
const Styles = ({themeColors, pickedColor = '#575A5E'}) => StyleSheet.create({
    /// ColorThemesScreen
    flatListContainer:{
        alignItems:'center',
        justifyContent:'center',
        flexGrow:1,
    },
    
    /// SETTINGS
    menu:{
        alignItems:'center',
        marginTop:'10%',
        width:'100%',
    },
    menuItem:{
        borderColor: themeColors ? themeColors.border : 'black',
        backgroundColor : themeColors ? themeColors.listItem : 'grey',
        borderWidth:1,
        padding:15,
        margin:4,
        borderRadius:20,
        width:'80%',
    },
    menuText:{
        fontSize:20,
        color: themeColors ? themeColors.buttonText : 'black',
    },
    button:{
        alignItems: 'center',
        backgroundColor: themeColors ? themeColors.backButton : 'green',
        fontSize: 24,
        padding: 15,
        margin: 4,
        width:'80%',
        borderRadius: 20,
        marginTop:60,
    },
    buttonText:{
        color: themeColors ? themeColors.buttonText : 'red',
        fontSize: 20,
    },
    backButtonPlacement:{
        flex: 1,
        justifyContent:'flex-end',
        alignItems:'center',
        marginBottom:40,
        width:'100%'
    },

    /// END Settings
    
    /// ProfileScreen
    text:{
        fontSize: 20,
        color: themeColors ? themeColors.text : 'red',
    },
    button:{
        alignItems:'center',
          backgroundColor: themeColors ? themeColors.button : 'gray',
          fontSize: 24,
          padding: 15,
          margin: 4,
          width:'80%',
          borderRadius: 20,
        },
      buttonText:{
          color: themeColors ? themeColors.buttonText : 'darkgrey',
          fontSize: 20,
      },

    /// END ProfileScreen
    
    /// WelcomeScreen
    title:{
        fontSize:25,
        color: themeColors ? themeColors.title : 'black', // default if not set
        textAlign:'center',
        marginTop:'10%', 
    },
    appName:{
        fontSize:60,
        fontFamily:'Georgia',
        color:'white',
    },
    welcomeTitleContainer:{
        justifyContent:'center',
        alignItems:'center',
        marginBottom:'40%',
        height:'40%',
    },
    welcomeLogo: {
        marginTop:'10%',
        width: 150,
        height: 150,
        //marginBottom: 20,
    },
    /// END WelcomeScreen

    /// StartScreen
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: themeColors ? themeColors.background : '#fff',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
        marginRight:10,
        marginLeft:10,
        //margin: 20,
    },
    box: {
        flex: 1,
        aspectRatio: 1, // Keeps the boxes square
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: themeColors ? themeColors.box : '#3498db',
        margin: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor:'black',
    },
    boxText: {
        color: themeColors ? themeColors.boxText : '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    //// END StartSCreen
    
    /// AddTaskScreen
    addTaskContainer:{
        flex: 1, 
        padding: 20,
        backgroundColor: themeColors ? themeColors.background : '#000',
        //width:'90%',
    },
    title:{
        fontSize: 24,
        color: themeColors ? themeColors.title : 'red',
        fontWeight: 'bold',
    },
    titleContainer:{
        //position:'absolute',
        //top:'10%',
        marginTop:'5%',
        height:'10%',
        alignItems:'center',
        justifyContent:'flex-start',
      },
      label: {
        fontSize: 18,
        marginBottom: 5,
        color: themeColors ? themeColors.labelText : 'black',
      },
      input: {
        height: 40,
        borderColor: themeColors ? themeColors.inputContainer : 'gray',
        backgroundColor: themeColors ? themeColors.inputContainer : 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius:15, 
      },
      addButton: {
        backgroundColor: themeColors ? themeColors.button : '#3498db',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 20,
        alignItems: 'center',
      },
      buttonText: {
        color: themeColors ? themeColors.buttonText : '#fff',
        fontSize: 20,
      },
      
      button:{
        alignItems:'center',
        backgroundColor: themeColors ? themeColors.button : 'black', // default if not set 
        fontSize: 24,
        padding: 15,
        margin: 4,
        width:'80%',
        borderRadius: 20,
      },
      colorPickerButton: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: pickedColor,
        marginBottom: 20,
      },
      colorPickerButtonText: {
        color: themeColors ? themeColors.buttonText : '#fff',
        fontSize: 16,
      },
    /// END AddTaskScreen 

    /// - ColorPicker
    modalContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    colorPickerContainer: {
        width:'80%',
        padding: 20,
        backgroundColor: themeColors ? themeColors.colorPicker : 'black',
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
        color: themeColors ? themeColors.buttonText : 'black',
    },
    /// - End ColorPicker
}); 

export default Styles;