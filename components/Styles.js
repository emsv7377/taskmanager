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
        padding:10,
        margin:4,
        borderRadius:15,
        width:'80%',
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
    /*  ---- Settings menu end ----  */
    
    // Common design for buttons 
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

    // Placement for back buttons 
    backButtonPlacement:{
        // TODO: change ? should this be on top of the screen
        flex: 1,
        justifyContent:'flex-end',
        alignItems:'center',
        marginBottom:40,
        width:'100%'
    },
    
    // Common body text used 
    text:{
        fontSize: 20,
        color: themeColors ? themeColors.text : 'red',
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
    },
    // Common titles 
    title:{
        fontSize: 24,
        color: themeColors ? themeColors.title : 'red',
        fontWeight: 'bold',
    },

    // Container for the common titles 
    titleContainer:{
        marginTop:'5%',
        height:'10%',
        alignItems:'center',
        justifyContent:'flex-start',
      },

      // Labels for text input and similarly 
      label: {
        fontSize: 18,
        marginBottom: 5,
        color: themeColors ? themeColors.labelText : 'black',
      },

      // Text input elements
      input: {
        height: 40,
        borderColor: themeColors ? themeColors.inputContainer : 'gray',
        backgroundColor: themeColors ? themeColors.inputContainer : 'gray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius:15, 
      },


      buttonText: {
        color: themeColors ? themeColors.buttonText : '#fff',
        fontSize: 20,
      },
      addButton: {
        backgroundColor: themeColors ? themeColors.button : '#3498db',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 20,
        alignItems: 'center',
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

      displaySubtasks: {
        fontSize:16,
        color: themeColors ? themeColors.labelText : 'gray',
        alignItems: 'flex-start',
        margin: 20,
      },
      dateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
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
    },
    colorPickerContainer: {
        width:'80%',
        padding: 20,
        backgroundColor: themeColors ? themeColors.colorPicker : 'black',
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
        flex: 1,
        flexDirection: 'row',
      },
      taskName: {
        color: themeColors ? themeColors.boxText : '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      taskDescription: {
        color: themeColors ? themeColors.boxText : '#fff',
        fontSize: 16,
        marginBottom: 5,
      },
      taskTime: {
        color: themeColors ? themeColors.boxText : '#fff',
        fontSize: 16,
      },
    checkBox:{
      width: 40, // Fixed width and height for the checkbox
      height: 40,
      margin: 5,
      marginBottom: 10,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 5,
      borderColor: themeColors ? themeColors.boxText : '#fff',
    },
    column1:{
      flexDirection: 'column',
      alignItems: 'flex-start', // Align the arrow to the right
      flex: 1
    },
    column2:{
      flexDirection: 'column',
      alignItems: 'flex-end', // Align the arrow to the right
      flex: 1
    },
    checkMark:{
      color: themeColors ? themeColors.boxText : '#fff',
      fontSize: 20,
    },
    twobutton:{
      alignItems:'center',
      backgroundColor: themeColors ? themeColors.button : 'gray',
      fontSize: 24,
      padding: 15,
      margin: 4,
      width:'50%',
      borderRadius: 20,
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