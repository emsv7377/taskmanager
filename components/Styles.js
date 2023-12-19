/**
 *          StyleSheet for the application
 * 
 */
import { StyleSheet } from 'react-native';

const Styles = ({themeColors, pickedColor = '#575A5E'}) => StyleSheet.create({

    // Used by FlatList elements in ColorThemeScreen
    flatListContainer:{
        alignItems:'center',
        justifyContent:'center',
        flexGrow:1,
    },
    /*  ---- Settings menu start ---- */ 
    menu:{
        alignItems:'center',
        marginTop:'10%',
        width:'100%',
    },
    menuHeaderContainer:{
        paddingBottom: 4,
        margin: 4,
        borderBottomWidth: 1,
        borderColor: themeColors ? themeColors.headerBorder : 'gray',
        width:'80%',
    },
    menuHeader:{
        fontSize:16,
        color: themeColors ? themeColors.labelText : 'gray',
        textAlign:'center',
    },
    menuItem:{
        flexDirection:'row',
        borderWidth:1,
        padding:8,
        margin:4,
        borderRadius:15,
        width:'80%',
        alignItems:'center',
    },
    menuText:{
        fontSize:20,
        color: themeColors ? themeColors.text : 'black',
    },
    menuArrow:{
      position:'absolute',
      right:15,
      alignSelf:'center',
      fontSize:20,
      color: themeColors ? themeColors.text : 'black',  
    },
    /**     Switches in SettingsScreen  */
    switchContainer:{
        flex: 1,
        justifyContent:'flex-end',
        alignItems:'flex-end',
        transform:[{ scale: 0.9 }]
    },
    /**     Slider in SettingsScreen */
    sliderContainer:{
        marginLeft:'5%',
        alignItems:'center',
        width:'70%',
    },
    slider:{
        flex: 1, 
        //height:30,
        //width: 50,
        alignSelf:'flex-end',
        width:'80%',
        //height:'20%',
    },
    /**     Settings menu end    */
    
    // Common design for buttons 
    button:{
        alignItems: 'center',
        backgroundColor: themeColors ? themeColors.button : 'green',
        fontSize: 24,
        padding: 15,
        margin: 4,
        width:'80%',
        borderRadius: 20,
        marginTop:60,
    },


    // Placement for back buttons 
    backButtonPlacement:{
        // TODO: change ? should this be on top of the screen
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:20,
        paddingHorizontal:5,
        width:'80%',
        marginTop:80,
    },
    cancelButtonPlacement:{
        // TODO: change ? should this be on top of the screen
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:40,
        paddingHorizontal:5,
        marginTop: 20,
        width:'100%'
    },
    taskName:{
        fontSize:40,
        color: themeColors ? themeColors.text : 'white',
    },
    
    // Common body text used 
    text:{
        fontSize: 20,
        color: themeColors ? themeColors.text : 'red',
    },
    timerContainer:{
        alignItems: 'center',
        flex:1,
        justifyContent:'center',
    },
    timerText:{
        fontSize: 80,
        color: themeColors ? themeColors.text : 'white',
        marginTop: 20,
        marginBottom:30,
    },
    timerButtonContainer:{
        width:'100%',
        marginTop: '45%',
        alignItems:'center',    // center the buttons
        justifyContent:'space-evenly',
        //padding:15, 
        //margin: 4, 
    },
    startButton:{
        backgroundColor : themeColors ? themeColors.errorColor : 'blue',
        padding:15,
        margin:10,
        width: '80%',
        borderRadius: 20,
        alignItems:'center',
        justifyContent:'center',
    },
    resetButton:{
        backgroundColor : themeColors ? themeColors.resetButton : 'blue',
        padding:15,
        margin:10,
        width: '80%',
        borderRadius: 20,
        alignItems:'center',
        justifyContent:'center',
    },
    // Commonly used buttons 
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
    // Application name on IntroductionScreen 
    appName:{
        fontSize:60,
        fontFamily:'Georgia',
        color:'white',
    },
    // Welcome text on IntroductionScreen 
    welcomeTitleContainer:{
        justifyContent:'center',
        alignItems:'center',
        marginBottom:'40%',
        height:'40%',
    },
    // Welcome logo on IntroductionScreen
    welcomeLogo: {
        marginTop:'10%',
        width: 150,
        height: 150,
    },
    // Common background settings shared by multiple components
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: themeColors ? themeColors.background : '#fff',
    },
    
    // Row used by AddTaskScreen
    row: {
        flexDirection: 'row',
        marginBottom: 10,
        marginRight:10,
        marginLeft:10,
    },
    // Boxes in the grid in AddTaskScreen 
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
    // Text for the boxes in AddTaskScreen 
    boxText: {
        color: themeColors ? themeColors.boxText : '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    // Used by AddTaskScreen for grid view
    addTaskContainer:{
        flex: 1, 
        padding: 20,
        backgroundColor: themeColors ? themeColors.background : '#000',
        alignItems:'center',
    },
    textInputContainer:{
        marginBottom: 20,
        alignItems: 'center',
        width:'90%',
    },
    input: { 
        // TextInput-elements 
        height: 40,
        borderColor: themeColors ? themeColors.inputContainer : 'gray',
        backgroundColor: themeColors ? themeColors.inputContainer : 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius:15,
        width:'100%', 
    },
    keyboardAwareScrollView:{
        flex:1, 
    },
    contentContainer:{
        // For the KeyboardAwareScrollView element
        padding:20,
        alignItems:'center',
    },
    label: {
        fontSize: 18,
        marginBottom: 5,
        color: themeColors ? themeColors.labelText : 'black',
        textAlign:'left',
        alignSelf:'flex-start',
    },
    // Common titles 
    title:{
        fontSize: 24,
        color: themeColors ? themeColors.title : 'red',
        fontWeight: 'bold',
    },
    // Container for the common titles 
    titleContainer:{
        top:-20,
        alignItems:'center',
        justifyContent:'flex-start',
      },
    buttonText: {
        color: themeColors ? themeColors.buttonText : '#fff',
        fontSize: 20,
    },
    addButton: {
        backgroundColor: themeColors ? themeColors.addButton : '#3498db',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 20,
        alignItems: 'center',
        width:'55%',
        //marginRight:10,
      
    },
    backButton: {
        backgroundColor: themeColors ? themeColors.button : '#3498db',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 20,
        //marginLeft:10,
        alignItems: 'center',
        width:'40%',
      },
      pickerContainer:{
        flexDirection: 'row',
        justifyContent:'flex-start',
      },
      pickerColumn:{
        alignItems:'center',
      },
      pickerText:{
        marginLeft:15, 
        marginRight:10,
      },
      dateLabel:{
        fontSize: 20,
        color: themeColors ? themeColors.text : '#fff',
        fontWeight:'bold', 

      },
      colorPickerButton: {
        padding: 10,
        width:40,
        height:40,
        borderRadius: 5,
        backgroundColor: pickedColor,
        marginBottom: 20,
        marginLeft: 10, 
        marginRight: 10,
      },
      colorPickerButtonText: {
        color: themeColors ? themeColors.buttonText : '#fff',
        fontSize: 16,
      },

      displaySubtasks: {
        fontSize:16,
        color: themeColors ? themeColors.labelText : 'gray',
        alignItems: 'flex-start',
        margin: 20,
      },
      dateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width:'90%',
        // Additional styles for the container of date text and button
      },
      changeButton: {
        backgroundColor: themeColors ? themeColors.button : '#3498db',
        paddingVertical: 10,
        paddingHorizontal: 10,
        margin: 20,
        borderRadius: 5,
        alignItems: 'center',
      },
    /// END AddTaskScreen 


    // ColorPicker 
    modalContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor : themeColors ? themeColors.colorPicker : 'gray',
    },
    colorPickerContainer: {
        width:'80%',
        padding: 20,
        backgroundColor: themeColors ? themeColors.colorPicker : 'gray',
        borderRadius: 10,
        marginBottom: 20,
        elevation: 5, // adds shadow on Android 
    },
    colorPickerTitle: {
        fontSize: 18,
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
        // Used by ColorPicker
        fontSize: 16,
        color: themeColors ? themeColors.buttonText : 'black',
    },

    //Tasklistscreen
      taskItem: {
        padding: 15,
        marginBottom: 15,
        borderRadius: 10,
      },
      taskName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      taskDescription: {
        fontSize: 16,
        marginBottom: 5,
      },
      taskTime: {
        fontSize: 14,
        fontStyle: 'italic',
      },
      checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    //End TasklistScreen

    //TaskScreen:
      description: {
        marginBottom: 15,
      },
      time: {
        marginBottom: 15,
      },
      subTasksTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      subTaskContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
      },
      subTask: {
        fontSize: 16,
        marginRight: 10,
      },
      completedSubTask: {
        fontSize: 16,
        marginRight: 10,
        textDecorationLine: 'line-through',
      },
      checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    //End TaskScreen
}); 

export default Styles;