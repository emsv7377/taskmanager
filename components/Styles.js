/**
 *          StyleSheet for the application
 * 
 */
import { StyleSheet, Platform } from 'react-native';

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
        borderColor: themeColors ? themeColors.headerBorderColor : 'gray',
        width:'80%',
    },
    menuHeader:{
        fontSize:16,
        color: themeColors ? themeColors.labelTextColor : 'gray',
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
    icon:{
        color: themeColors ? themeColors.textColor : '#ffffff',
    },
    menuText:{
        fontSize:20,
        color: themeColors ? themeColors.textColor : 'black',
    },
    menuArrow:{
      position:'absolute',
      right:15,
      alignSelf:'center',
      fontSize:20,
      color: themeColors ? themeColors.textColor : 'black',  
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
        backgroundColor: themeColors ? themeColors.buttonColor : 'green',
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
    
    // Common body text used 
    text:{
        fontSize: 20,
        color: themeColors ? themeColors.textColor : 'red',
    },
    timerContainer:{
        alignItems: 'center',
        flex:1,
        justifyContent:'center',
    },
    timerText:{
        fontSize: 80,
        color: themeColors ? themeColors.textColor : 'white',
        marginTop: 20,
        marginBottom:30,
    },
    timerButtonContainer:{
        width:'100%',
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
        backgroundColor : themeColors ? themeColors.resetButtonColor : 'blue',
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
        backgroundColor: themeColors ? themeColors.buttonColor : 'gray',
        fontSize: 24,
        padding: 15,
        margin: 4,
        width:'80%',
        borderRadius: 20,
    },
    buttonText:{
        color: themeColors ? themeColors.buttonTextColor : 'darkgrey',
        fontSize: 20,
    },
    // Application name on IntroductionScreen 
    appName:{
        fontSize:60,
        fontFamily:'Georgia',
        color:'white',
        marginTop: Platform.OS === 'android' ? 60 : 0,

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
        backgroundColor: themeColors ? themeColors.backgroundColor : '#fff',
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
        backgroundColor: themeColors ? themeColors.boxColor : '#3498db',
        margin: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor:'black',
    },
    // Text for the boxes in AddTaskScreen 
    boxText: {
        color: themeColors ? themeColors.boxTextColor : '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    // Used by AddTaskScreen for grid view
    addTaskContainer:{
        flex: 1, 
        padding: 20,
        backgroundColor: themeColors ? themeColors.backgroundColor : '#000',
        alignItems:'center',
    },
    textInputContainer:{
        marginTop:20,
        marginBottom: 20,
        alignItems: 'center',
        width:'90%',
    },
    input: { 
        // TextInput-elements 
        height: 40,
        borderColor: themeColors ? themeColors.inputContainerColor : 'gray',
        backgroundColor: themeColors ? themeColors.inputContainerColor : 'gray',
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
        color: themeColors ? themeColors.labelTextColor : 'black',
        textAlign:'left',
        alignSelf:'flex-start',
    },
    // Common titles 
    title:{
        fontSize: 24,
        color: themeColors ? themeColors.titleColor : 'red',
        fontWeight: 'bold',
    },
    // Container for the common titles 
    titleContainer:{
        top:-20,
        alignItems:'center',
        justifyContent:'flex-start',
      },
    buttonText: {
        color: themeColors ? themeColors.buttonTextColor : '#fff',
        fontSize: 20,
    },
    addButton: {
        backgroundColor: themeColors ? themeColors.backButtonColor : '#3498db',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 20,
        alignItems: 'center',
        width:'55%',
        //marginRight:10,
      
    },
    backButton: {
        backgroundColor: themeColors ? themeColors.buttonColor : '#3498db',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 20,
        //marginLeft:10,
        alignItems: 'center',
        width:'40%',
      },
        // ColorPicker 
    modalContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor : themeColors ? themeColors.colorPicker : 'gray',
    },
    optionsContainer: {
        //flexDirection: 'row',
        justifyContent:'space-between',
        width:'80%',
        padding: 20,
        backgroundColor: themeColors ? themeColors.backButtonColor : 'blue',
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
    // Used in AddTaskScreen
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
    dateRow:{
        flexDirection: 'row',
        justifyContent:'center',
        marginTop:20,
        alignItems:'center', 
        marginBottom:10,
        width:'100%',
    },
    dateLabel:{
        fontSize: 20,
        color: themeColors ? themeColors.textColor : '#fff',
        fontWeight:'bold', 
      },
    dateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width:'90%',
        // Additional styles for the container of date text and button
    },
    optionButton:{
        width: '30%', // Adjust the width as needed for three buttons in a row
        aspectRatio:1,  // this makes the button a perfect square
        borderRadius: 50,   // borderradius of 50 will make the square a circle 
        //height:60,
        color: themeColors ? themeColors.textColor : 'red',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        margin: 5, // Added margin for better spacing between items
    },
    // Used by CategoryPicker
    categoryRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    },
    iconContainer:{
        flexDirection: 'column',
        alignItems:'center',
        marginHorizontal:20,

    },
    colorPickerButton: {
        padding: 10,
        width:50,
        height:50,
        borderRadius: 10,
        marginBottom: 20,
        marginLeft: 10, 
        marginRight: 10,
        margin:5,
        justifyContent:'center',
        alignItems:'center',
    },
    colorPickerButtonText: {
        color: themeColors ? themeColors.buttonTextColor : '#fff',
        fontSize: 16,
    },
    subtasklistContainer:{
      borderColor: themeColors ? themeColors.inputContainerColor : 'gray',
      backgroundColor: themeColors ? themeColors.inputContainerColor : 'gray',
      paddingHorizontal: 10,
      borderRadius:15,
      margin: 10, // Adjust this value to add more space between subtasks
    },

    subtasklist: { 
      marginBottiom: 20,
      flexDirection: 'row',
      flexWrap: 'wrap', // Sätt flex-wrap till wrap för att subtasks ska hamna på nya rader
      justifyContent:'space-evenly',
  },
    displaySubtasks: {
        fontSize:16,
        color: themeColors ? themeColors.labelTextColor : 'gray',
      },
    changeButton: {
        backgroundColor: themeColors ? themeColors.buttonColor : '#3498db',
        paddingVertical: 10,
        paddingHorizontal: 10,
        margin: 20,
        borderRadius: 5,
        alignItems: 'center',
    },
    closeButtonContainer:{
        alignItems: 'flex-end',
        marginTop: 20,
    },
    closeButton: {
        // Used by ColorPicker
        fontSize: 16,
        color: themeColors ? themeColors.buttonTextColor : 'black',
    },
    /// END AddTaskScreen 


    

    //Tasklistscreen
      taskItem: {
        padding: 15,
        marginBottom: 15,
        borderRadius: 10,
        flex: 1,
        flexDirection: 'row',
      },
      taskName: {
        color: themeColors ? themeColors.boxTextColor : '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      taskDescription: {
        color: themeColors ? themeColors.boxTextColor  : '#fff',
        fontSize: 16,
        marginBottom: 5,
      },
      taskTime: {
        color: themeColors ? themeColors.boxTextColor  : '#fff',
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
      borderRadius: 10,
      borderColor: themeColors ? themeColors.boxTextColor : '#fff',
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
    column3:{
      flexDirection: 'column',
      alignItems: 'flex-start', // Align the arrow to the right
      flex: 0.4,
      borderRightWidth: 0.1,
      borderColor: themeColors ? themeColors.boxTextColor  : '#fff',
    },
    checkMark:{
      color: themeColors ? themeColors.boxTextColor  : '#fff',
      fontSize: 20,
    },
    twobutton:{
      alignItems:'center',
      backgroundColor: themeColors ? themeColors.buttonColor  : 'gray',
      fontSize: 24,
      padding: 15,
      margin: 4,
      width:'50%',
      borderRadius: 20,
  },
    //End TasklistScreen

    //TaskScreen:
    //name of task
    additionalStyle:{
      padding: 15,
      marginBottom: 15,
      borderRadius: 10,
      flex: 1,
    },
    tasknameContainer:{
      justifyContent:'center',
      alignItems:'center',
  },
      taskTitle:{
        fontSize: 24,
        color: themeColors ? themeColors.boxTextColor : '#fff',
        fontWeight: 'bold',
    },
      subTasksTitle: {
        fontSize: 18,
        color: themeColors ? themeColors.boxTextColor : '#fff',
        fontWeight: 'bold',
        marginBottom: 10,
      },
      subTaskContainer: {
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row',
        borderColor: themeColors ? themeColors.boxTextColor : '#fff',
        marginBottom: 5,
      },
      subTask: {
        color: themeColors ? themeColors.boxTextColor : '#fff',
        fontSize: 18,
        margin: 10,
      },
      checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: themeColors ? themeColors.boxTextColor : '#fff',
    },
    iconContainer:{
      justifyContent: 'center',
      alignItems: 'center',
    }
    //End TaskScreen
}); 

export default Styles;