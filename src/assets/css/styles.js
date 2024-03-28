export const COLORS = {
    BACKGROUND_COLOR_START                  :   "#009fb0",
    BACKGROUND_COLOR_END                  :   "#005a64",
}

// @ flow 
import { StyleSheet,Platform , Dimensions} from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize} from 'react-native-responsive-dimensions';
import {COLOR, globalConstants} from '../constants/GlobalConstants';
const { width, height } = Dimensions.get('window');
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const {INPROGRESS,COMPLETE,UPCOMING} = COLOR;

let DEVICE_WIDTH               =    Dimensions.get('window').width;
let DEVICE_HEIGHT              =    Dimensions.get('window').height;

export const IOS_PLATFORM      =   (Platform.OS === globalConstants.IOS ) ? true : false; 

export const CAMBRIABOLD       =   IOS_PLATFORM ? 'Poppins-Bold'        : 'Poppins-Bold';
export const CAMBRIA           =   IOS_PLATFORM ? 'Poppins-Black'       : 'Poppins-Black';
export const MONSTERREGULAR    =   IOS_PLATFORM ? 'Poppins-Regular' 	: 'Poppins-Regular';

const DAGGERSQUARE      	   =   IOS_PLATFORM ? 'Poppins-Black'       : 'Poppins-Black';
const MONSTERBOLD       	   =   IOS_PLATFORM ? 'Poppins-Bold'     	: 'Poppins-Bold';
const MONSTERSEMIBOLD   	   =   IOS_PLATFORM ? 'Poppins-SemiBold' 	: 'Poppins-SemiBold';
const MONSTERITALIC            =   IOS_PLATFORM ? 'Poppins-Italic'   	: 'Poppins-Italic';

const MONSTERTHIN              =   IOS_PLATFORM ? 'Poppins-Thin'     	: 'Poppins-Thin';
const MONSTERMEDIUM            =   IOS_PLATFORM ? 'Poppins-Medium'   	: 'Poppins-Medium';

export const POPPINSBLACK      =   IOS_PLATFORM ? 'Poppins-Black'       : 'Poppins-Black';
export const POPPINSREGULAR    =   IOS_PLATFORM ? 'Poppins-Regular' 	: 'Poppins-Regular';
export const POPPINSBOLD       =   IOS_PLATFORM ? 'Poppins-Bold'        : 'Poppins-Bold';
export const POPPINSSEMIBOLD   =   IOS_PLATFORM ? 'Poppins-SemiBold' 	: 'Poppins-SemiBold';
export const POPPINSITALIC     =   IOS_PLATFORM ? 'Poppins-Italic'   	: 'Poppins-Italic';
export const POPPINSTHIN       =   IOS_PLATFORM ? 'Poppins-Thin'     	: 'Poppins-Thin';
export const POPPINSMEDIUM     =   IOS_PLATFORM ? 'Poppins-Medium'   	: 'Poppins-Medium';

const globalStyles = StyleSheet.create({ 
	poppinSemiBold:{
		fontFamily:POPPINSSEMIBOLD
	},
	poppinReguller:{
		fontFamily:POPPINSREGULAR
	},
	tinyFont:{
		fontSize: responsiveFontSize(1)
	},
	smallFont:{
		fontSize: responsiveFontSize(1.5)
	},
	normalFont:{
		fontSize: responsiveFontSize(1.8)
	},
	largeFont:{			   
		fontSize: responsiveFontSize(2)
	},
	extraLargeFont:{
		fontSize: responsiveFontSize(2.5)
	},
	grayColor:{
	   color: COLOR.GRAY
	},
    alignSelfCenter:{
        alignSelf: 'center',
    },
    AuthLogoContainer:{
        flex:3,
        alignItems:'center',
        justifyContent:'flex-end'
    },
    AuthLogo: {
        width: responsiveWidth(70),
        height: responsiveHeight(30),
    },
    AuthLogoSignUp: {
        width: responsiveWidth(45),
        height: responsiveHeight(30),
    },
    AuthTextInput: {
        justifyContent:'center',        
        alignSelf:'center',
        borderRadius:20,
        marginVertical: responsiveHeight(1),
        backgroundColor:'#fff',
        width:responsiveWidth(95),
        height:responsiveHeight(4),
        paddingHorizontal:responsiveWidth(2),
    },
	ProfileTextInput: {
        justifyContent:'center',
        alignSelf:'center',
        borderRadius:5,      
        backgroundColor:'#fff',
        width:responsiveWidth(90),
        height:responsiveHeight(7),        
    },
    ProfileDarkTextInput: {
        justifyContent:'center',
        alignSelf:'center',
        borderRadius:5,
        borderColor : "#666",
        width:responsiveWidth(90),
        height:responsiveHeight(7),
    },
    AuthInputConatainerHeight:{
       height:responsiveHeight(8),
    //   backgroundColor:"red"
    },
    AuthMarginTop:{
        //marginTop:responsiveHeight(4),
    },
    AuthTextInputSignUp: {
        justifyContent:'center',
        alignSelf:'center',
        borderRadius:5,
        marginTop: responsiveHeight(5),
        marginBottom: responsiveHeight(1),
        backgroundColor:'#fff',
        width:responsiveWidth(90),
        height:responsiveHeight(7.5),
    },
    AuthSubText:{
        alignSelf:'center',
        color:'#f4b272',
        fontFamily:POPPINSREGULAR,
        fontSize: responsiveFontSize(1.7), 
    },
    AuthSocialLoginIconContainer:{
       // flex:5,
        alignItems: 'center',
    },
    AuthTextOr:{
        alignSelf:'center',
        color:'#fff',
        fontFamily:MONSTERBOLD,
        fontSize: responsiveFontSize(2), 
    },
    AuthCommonContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical:responsiveHeight(.6)
    },
    AuthFooterText:{
        alignSelf:'center',
        color:'#fff',
        fontFamily:MONSTERREGULAR,
        fontSize: responsiveFontSize(1.8), 
    },
    AuthSubmitBtnText:{
        color:'#fff',
        fontSize:responsiveFontSize(2.2),
        fontFamily:POPPINSSEMIBOLD,
        alignSelf:'center'
    },
    submitBtnText:{
        color:'#fff',
        fontSize:responsiveFontSize(2),
        fontFamily:POPPINSREGULAR,
        alignSelf:'center'
    },
    AuthRippleBtn:{
        backgroundColor:'#E3140F',
        width:responsiveWidth(90),
        height:responsiveHeight(7.5),
        justifyContent:'center',
        alignSelf:'center',
        borderRadius:5,
        marginTop:responsiveHeight(1)
    },
    AuthErrorMsg:{
        color:'red',
        fontFamily:MONSTERREGULAR,
        fontSize: responsiveFontSize(1.6), 
        marginLeft:responsiveWidth(1),
        marginTop:responsiveHeight(-2),    
    },
	 ProfileErrorMsg:{
        color:'#f9f967',
        fontFamily:MONSTERREGULAR,
        fontSize: responsiveFontSize(1.7), 
        marginLeft:responsiveWidth(1.5),       
    },	
    AuthMainText:{
        //top:responsiveHeight(1)
    },    
    appContainer:{
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
    },    
    activityIndicatorContainer: {     
        flex: 1,
        flexDirection:"row",
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor:"#fff",   
     },
    activityIndicator: {     
        justifyContent: 'center',
        alignItems: 'center',    
        backgroundColor:"#fff",       
     },
     appImgBackGround : { flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
    registerLogo:{
        width:responsiveWidth(35),
        height : responsiveHeight(20)
    },    
	shadowAndroid:{
		elevation:3,
		backgroundColor:'#fff',
		borderRadius:5,
		overflow:"hidden"
    },    
    networkErrorContainer :{
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        width:responsiveWidth(100),
        height:responsiveHeight(100),
        backgroundColor:"#601117"
    },
    networkErrorLogo :{
        height : responsiveHeight(50), 
        width : responsiveWidth(75),
    },
    networkErrorContainerContent : {marginVertical : responsiveHeight(5),justifyContent : "center", alignItems : "center"},
    networkErrorContainerContentText : {color:'#FFFFFF' ,fontSize:responsiveFontSize(3), textAlign : "center"},
    /*-------------------------- After Authentication CSS Start ------------------------------------------------*/
    /*-- Header Css Start --*/
    header_flex1: {
        flex: 1,
    },
    header_container: {
        flex            : 1,
        flexDirection   : 'row',
        justifyContent  : 'center',
        alignSelf       : 'flex-end',
        alignItems      : 'flex-end',
            
        width           : responsiveWidth(100),
    },
    header_row: {
        flexDirection: 'row',
        alignItems: 'center',         
    },
    header_title_text: {
        color: '#ffffff', 
        fontFamily:MONSTERREGULAR,      
        fontSize: responsiveFontSize(2),     
       // top:responsiveHeight(.5)
    },
    header_back_icon_container: {      
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:"flex-start",
        paddingVertical:responsiveHeight(1),  
        paddingLeft:responsiveWidth(1),
        paddingRight:responsiveWidth(3),                    
    },
    header_back_icon: {       
        paddingVertical:responsiveWidth(1),       
        alignSelf:"flex-start",     
		height:responsiveHeight(3.5)							
    },
    header_left_icon: {
        right: IOS_PLATFORM ? responsiveWidth(1.2) : responsiveWidth(4),
        marginTop: responsiveHeight(2),
        width:responsiveWidth(45),
        height:responsiveHeight(4),        
        alignSelf:"flex-start"
    },
    header_center_icon: {
        marginLeft: responsiveWidth(2),
        marginTop: responsiveHeight(2),
        width:responsiveWidth(45),
        height:responsiveHeight(4),
        left:responsiveWidth(25),
    },
    header_right_ball_icon: {
        marginHorizontal: responsiveWidth(2),
    },
    header_right_setting_icon: {
        marginHorizontal: responsiveWidth(2),
        marginTop: responsiveHeight(2)
    },
	header_right_setting_iconIOS:{
        marginHorizontal: responsiveWidth(2),
    },	
    header_right_notification_icon: {
        marginLeft: responsiveWidth(2),     
        marginTop: responsiveHeight(2),
    },									   
	 header_right_notification_iconIOS:{
        marginLeft: responsiveWidth(2),
    },
    header_before_badge_cover: {
        backgroundColor: '#dc3545',
        height: responsiveHeight(3),
        width: responsiveHeight(3),
        borderRadius: 50,
        alignItems: 'center',
        position: 'absolute',
        right: responsiveWidth(4.2),
        top: responsiveHeight(1.5),
    },
    header_after_badge_cover: {
        backgroundColor: '#dc3545',
        height: responsiveHeight(3),
        width: responsiveHeight(3),
        borderRadius: 50,
        alignItems: 'center',
        position: 'absolute',
        right: responsiveWidth(4),
        bottom: responsiveHeight(2.2),
    },

    /*-- Header Css End --*/

    /*-- Bottom Bar Css Start --*/

    bottom_container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderTopColor:'#eeeeee',
        height:responsiveHeight(9),	   
        borderTopWidth:1,     
        justifyContent:"center",
        alignItems:"center"
    },
	bottom_containerIOS : {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderTopColor:'#eeeeee',
        borderTopWidth:1,
        justifyContent:"center",
        alignItems:"center"
    },
    bottom_child_container: {
        flex: 1,    
        justifyContent:"center",
        alignItems:"center",       
    },
    bottom_icon_container: {
        justifyContent: 'center',
        alignItems:'center',   
        marginBottom:0
    },
    bottom_bar_icons: {
        alignSelf: 'center',
    },
    bottom_bar_more_icons: {
        alignSelf: 'center',
        marginBottom: responsiveHeight(0.6),
    },
    bottom_bar_text: {
        alignSelf: 'center',
        color: COLOR.DEFAULT_BOTTOM_MENU,
        fontSize: responsiveFontSize(1.5),
        fontFamily: POPPINSSEMIBOLD,
        marginTop: responsiveHeight(0)
    },
    bottom_bar_text_focus: {
        alignSelf: 'center',
        color: COLOR.SELECTED_BOTTOM_MENU,
        fontSize: responsiveFontSize(1.5),
        fontFamily: POPPINSSEMIBOLD,
        marginTop: responsiveHeight(0)
    },

    /*-- Bottom Bar Css Start --*/


    /*-- Picture Sliders Css End --*/

    img_slider_container: {
        height: responsiveHeight(5)
    },

    /*-- Picture Sliders Css End --*/

    /*-- Tab View Css End --*/

    tab_view_container: {
        backgroundColor: "#FFFFFF",
        marginTop: responsiveHeight(0),
        height: responsiveHeight(6),
        borderRadius: 5
    },
    tab_view_fantasy_point_container: {
        flex:1,
        backgroundColor: "#FFFFFF",
        marginTop: responsiveHeight(1),
        height: responsiveHeight(6),
        borderRadius: 5,
        borderBottomWidth: 2,
        borderBottomColor: '#117bcf',
    },
    tab_view_text_title: {
        fontFamily : DAGGERSQUARE,
        paddingTop: responsiveHeight(0.5),
        fontSize: responsiveFontSize(3.5),
    },
    tab_view_text_title_fantasy_point: {
        fontFamily : DAGGERSQUARE,
        paddingTop: responsiveHeight(1.9),
        fontSize: responsiveFontSize(4),
        alignSelf: 'center'
    },
    tabStyle: {
        opacity: 1,
        width: 'auto',
        marginRight: 2,
        paddingTop: 0,
        paddingLeft: 0,
        paddingRight: 0,
        paddingBottom: 0,
        backgroundColor: 'red',
    },
    tab: {
        backgroundColor: 'blue',
        paddingRight: 5,
        paddingLeft: 20,
        paddingTop: 20,
        marginTop: 2,
    },

    /*-- Tab View Css End --*/
    /*-- Home Css Start --*/

    home_container: {
        backgroundColor: '#FFFFFF',
        position:'relative'
    },
    home_card_container: {
        marginVertical: responsiveHeight(0.8),
    },
    home_card_team: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: responsiveWidth(2.5),
        paddingVertical: responsiveHeight(0.5),
    },
    home_card_team_title_text: {
        color: '#403f3fe0',
        fontFamily: 'roboto-regular',
        fontSize: responsiveFontSize(3.1),
        textAlign: 'center'
    },
    home_card_body_container: {     
        flex:3,
        marginHorizontal: responsiveWidth(2),
        flexDirection:'row',
        justifyContent:"flex-start",
        alignItems:'flex-start',
    },
    home_card_team_heading_text: {
        color: '#403f3f',
        fontFamily: 'montserratextrabold',      
        fontSize: responsiveFontSize(3.3),
        textAlign: 'center'
    },
    home_card_vs_icon: {
        marginVertical: responsiveHeight(1.2),
        alignSelf: 'center',
    },
    home_card_timer_title: {
        fontSize: responsiveFontSize(1.5),
        color: UPCOMING,
        fontFamily:POPPINSREGULAR,
        alignSelf: 'center'
    },
    home_card_timer_league: {
        fontSize: responsiveFontSize(3),
        color: '#e80606',
        fontFamily: 'roboto-regular',
        alignSelf: 'center',
        marginTop: responsiveHeight(1),
    },

    /*-- Home Css End --*/

    /*-- Cms Pages Css Start --*/

    cms_contents: {
        paddingHorizontal: responsiveWidth(2),
        paddingVertical: responsiveHeight(2),
    },        
       textBold:{
            fontFamily : CAMBRIABOLD
        },
        text:{
            fontFamily : MONSTERREGULAR
        },
        daggerSquare: {
            fontFamily: DAGGERSQUARE
        },
        montserratMedium:{
            fontFamily: MONSTERMEDIUM
        },
        montserratThin:{
            fontFamily: MONSTERTHIN
        },
        montserratRegular:{
            fontFamily: MONSTERREGULAR
        },
        montserratBold:{
            fontFamily: MONSTERBOLD
        },
        montserratSemiBold:{
            fontFamily : MONSTERSEMIBOLD
        },  
        montserratItalic:{
            fontFamily: MONSTERITALIC
        },
        bgColor : {           
            backgroundColor : COLOR.BACKGROUND_COLOR
        },
        bottomColor:{
            borderColor:'#DCDBDB'
        },
        themeColor : {
            backgroundColor: "#282968"
        },
        highlightBox:{
            backgroundColor:'#ff1aff'
        },
        joinButtonGlobal:{
            alignSelf:'flex-end',
            borderWidth:1,
            justifyContent:'center',
            maxWidth:responsiveWidth(20),   
            borderColor:'#969696',
            backgroundColor:'#969696',
            borderRadius:50,
            height:responsiveHeight(4),   
            elevation:2,   
            paddingHorizontal : responsiveWidth(3.5) 
        },
        btn:{
            width:responsiveWidth(36),
            paddingVertical:responsiveHeight(2),       
            maxWidth:responsiveWidth(36),
            justifyContent:'center',
            backgroundColor:'#FFFFFF',
            alignItems:'center',
            margin:10,
            elevation:3,
            borderRadius:30,
        
        },
        copyright:{
            alignSelf:'center',
            color:'#fff',
            fontSize:responsiveFontSize(1.5)
        },
        heading:{
            color:'#000',
            fontSize:responsiveFontSize(2.8),
            alignSelf:'center',
            fontFamily:POPPINSMEDIUM
        },
        errorMsg:{
            color:'#E25950', 
            marginLeft: responsiveWidth(2),
            fontSize:responsiveFontSize(1.5)
        },
        helpText:{
            color:'#C1C5D9',
            fontSize:responsiveFontSize(1.3)
        },
        btnText:{
            color:'#21387C',
            fontSize:responsiveFontSize(2.2)
        },
        subTitle:{
            fontSize: responsiveFontSize(1.5),
            color:'#A8AAB8'
        },
        title:{
            fontSize:responsiveFontSize(1.9),
            color:'#fff'
        },
        or:{
            fontSize:responsiveFontSize(2.5)
        },
        linkText:{
            color: '#F1DB22',
            fontSize: responsiveFontSize(1.9),
        },
        tabText:{
            fontSize:responsiveFontSize(1.8)
        },
        otpSuccess:{
            flexDirection:'row',
            width:responsiveWidth(70),
            paddingVertical:responsiveHeight(2),
            borderRadius:50,
            alignSelf:'center',
            position:'absolute',          
            justifyContent:"center",
            backgroundColor:'rgba(255,255,255,255)'
        },
        otpSuccessText:{
            color:'#000',
            alignSelf:'center',
            fontSize:responsiveFontSize(2)
        },
        socialAlignment:{
            height:responsiveHeight(7.5),
            width:responsiveWidth(17)
        },
        selfCenter:{
            alignSelf:'center',           
        },
        overlay: {
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "gray",
            opacity: 0.5,
        },
        headerMargin:{
            marginTop: IOS_PLATFORM ? responsiveHeight(8.5) : responsiveHeight(10)
        },
        tabHeading:{
            backgroundColor:'#e8e8e8'
        },
        subText:{
            color:'#AEAEAF'
        },
        viewAll:{
            color:'#282968',
            fontSize:responsiveFontSize(1.3),
            marginRight:responsiveWidth(1)
        },
        teamTitle:{
            color:'#252525',
            fontSize:responsiveFontSize(1.6),
            fontFamily : POPPINSBOLD
        },
        reletedTeamCardText:{
            color:'#969696',         
            fontSize:responsiveFontSize(1.4),
            fontFamily:POPPINSREGULAR,
            textAlign:"left"
        },
        cardMiddleContainer : { flex:2,
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',            
        },
        cardCometionNameContainer : { 
            width:responsiveWidth(45),         
            flex:1,
            justifyContent:'flex-start',
            alignItems:'flex-start',     
            marginRight:responsiveWidth(40),           
        },
        cardVsContainer : { 
            flex:2, 
            flexDirection:'column',
            width:responsiveWidth(40),
            marginLeft:responsiveHeight(2.5),           
            justifyContent : "center", 
            alignItems : "center"
        },
        cardVsImg : { 
            alignContent : "center", 
            marginVertical : responsiveHeight(1),
            marginTop : responsiveHeight(5)
        },
        countDownText:{           
            textAlign:'center',          
            fontSize:responsiveFontSize(1.6),
            fontFamily:POPPINSREGULAR
        },
        contestHeaderTitle:{
            color:'#4a4a4a',
            fontSize:responsiveFontSize(1.6),
            fontFamily:POPPINSBOLD
        },
        contestSubTitle:{
            fontSize:responsiveFontSize(1.6),
            fontFamily:POPPINSREGULAR
        },      
        contestTitle:{
            color:COLOR.CMS_TEXT_COLOR,
            fontSize:responsiveFontSize(2),
            fontFamily:POPPINSSEMIBOLD
        },
		 contestHeading:{
            color:COLOR.CMS_TEXT_COLOR,
            fontSize:responsiveFontSize(1.8),
            fontFamily:POPPINSSEMIBOLD
        },
        contestSubtitle : {
            color:COLOR.CMS_TEXT_COLOR,
            fontSize:responsiveFontSize(1.4),
            fontFamily:POPPINSMEDIUM
        },
        contestCatTitle:{
            color:COLOR.CMS_TEXT_COLOR,
            fontSize:responsiveFontSize(1.8),
            fontFamily:POPPINSSEMIBOLD
        },
        contestCatSubtitle : {
            color:"rgba(64,63,63,0.6)",
            fontSize:responsiveFontSize(1.4),
            fontFamily:POPPINSMEDIUM,
            top:responsiveHeight(-1)
        },
        contestBtnText :{
            color:COLOR.SELECTED_BOTTOM_MENU,
            fontSize:responsiveFontSize(1.6),
            fontFamily:POPPINSSEMIBOLD,
            paddingHorizontal : responsiveWidth(1)
        },
        contestLabel:{
            fontSize:responsiveFontSize(1.4),
            fontFamily:POPPINSREGULAR,
            color:'#a2a2a2',            
        },
        contestValue:{
            color:COLOR.CMS_TEXT_COLOR,
            fontSize:responsiveFontSize(1.6),
            fontFamily:POPPINSREGULAR
        },
        joinBtnText:{
            color:"#fff",
            fontSize:responsiveFontSize(1.6),
            fontFamily: POPPINSMEDIUM,
            alignSelf:'center'
        },
        tagBadge:{
            fontSize:responsiveFontSize(1.6),
            alignSelf:'center',
            fontFamily : POPPINSREGULAR,
            color : "#969696"
        },
        popUpTitle:{
            alignSelf:'center',
            fontSize:responsiveFontSize(1.6),
            fontFamily:POPPINSMEDIUM,
            color:"#999999"
        },
        infoContestText:{
            color:COLOR.CMS_TEXT_COLOR,
            fontSize:responsiveFontSize(1.2),  
            fontFamily:POPPINSMEDIUM        
        },
        joinBtn:{
            color:'#fff',
            fontSize:responsiveFontSize(1.7)
        },
        playerStats:{
            color:'#DE0A0A',
            fontSize:responsiveFontSize(1.8)
        },
        button:{
            flex:1,
            elevation:1,
            justifyContent:'center',
            alignItems:'center',
            color : '#fff',
            borderRadius:5,
            flexDirection:'row',
            backgroundColor:COMPLETE,
            marginHorizontal:responsiveHeight(1),
            paddingVertical:responsiveHeight(2)
        },
        textDark:{
            color:'#000', 
            fontFamily : CAMBRIA,
            fontSize: responsiveFontSize(2)
        },
        textWhite:{
            color:'#fff', 
            fontFamily : CAMBRIA,
            fontSize: responsiveFontSize(2)
        },
        labelColor:{
            color:'#A6A5A5'
        },
		 //  ---------------------- TAB BAR STYLE  ------------------------------
        tabBar: {
            flexDirection: 'row',
            width:responsiveWidth(100)  
									
							   
        },
        scene: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
		selectedTabItems : {
            width:responsiveWidth(33.33),
									 
			alignItems: 'center',
            padding: 16,
											
												   
            backgroundColor:"#A80000",
            borderBottomColor:'#fff',
            borderBottomWidth:2          
							   
									
        },
        defaultTabBarItem : {
            width:responsiveWidth(33.33),									 
			alignItems: 'center',
            padding: 16,					   
            backgroundColor:"#A80000",
            borderBottomColor:'#A80000',
            borderBottomWidth:2    
        },
       selectedTabItemsText : {
            fontFamily :POPPINSSEMIBOLD,
            color : '#fff'
        },
        defaultTabBarItemText : {
            color:'rgba(255,255,255,.7)',
            fontFamily :POPPINSSEMIBOLD,           
        },
        overlayContainer: {
            flex: 1,	
            left: 0,
            top: 0,
            opacity: 0.9,
            backgroundColor: '#25ae88',
            justifyContent: 'center',
            alignItems: 'center',
            
        },
        overlayContainerText: {
            fontSize: responsiveFontSize(1.8),
            textAlign: 'center',
            margin: 10,
            color:'#fff',
            fontFamily: POPPINSBOLD
        }, 
         //  ---------------------- TAB BAR STYLE  ------------------------------   

          /////////////////// FORM CSS ///////////////////////
        errorMsg:{
            color:'#E25950', 
            marginHorizontal:responsiveWidth(4),
            marginVertical:responsiveHeight(0),
            fontSize:responsiveFontSize(1.5),
            fontFamily : CAMBRIA,
        },
        errorMsgDark:{
            color:'#E25950', 
            marginHorizontal:responsiveWidth(1),
            marginVertical:responsiveHeight(0),
            fontSize:responsiveFontSize(1.5),
            fontFamily : CAMBRIA,
        },
        helpText:{
            color:'#C1C5D9',
            fontSize:responsiveFontSize(1.3),
            paddingHorizontal:responsiveWidth(5),
            paddingVertical:responsiveHeight(1)
        },
        helpTextDark:{
            color:'#C1C5D9',
            fontSize:responsiveFontSize(1.5),
            fontFamily : CAMBRIA,
            paddingHorizontal:responsiveWidth(0),
            paddingVertical:responsiveHeight(1)
        },
        lableText:{
           color:'#fff', 
           fontFamily : CAMBRIA          
        },
        lableTextDark:{
            color:'#000', 
            fontFamily : CAMBRIA        
        },
        selectlableTextDark:{
            color:'#000', 
            height:responsiveHeight(10),
            paddingHorizontal:responsiveWidth(5),
         },
        textInputContainer : {height:responsiveHeight(9.5) },
        textInputContainerDark : {
			borderColor:'#C5C7D8',
			height:responsiveHeight(10),
			marginHorizontal:responsiveWidth(2),
            
		}, 
		shadowIOS :	{
            shadowColor : '#000',
            shadowOffset : {width: 2,height: 3},
            shadowOpacity : 0.2,
            shadowRadius : 2,
            borderTopWidth:0,
		},					       

         /////////////////// FORM CSS ///////////////////////
        
		sortTeamText:{
			borderColor:'#888888',
			borderWidth:1,
			borderRadius:3,
			fontSize:responsiveFontSize(1.2),
			paddingTop: responsiveHeight(0.5), 
			paddingBottom :responsiveHeight(0.1),
			paddingHorizontal:responsiveWidth(1)
        },
        winning_prize_amount:{ color : COMPLETE},
        /*####################################### CSS 24-5-2019  CSS ############################*/
        fullwidthInfoContainer:{
            fontFamily : CAMBRIA,
            backgroundColor : COLOR.BACKGROUND_COLOR,    
            paddingVertical: responsiveHeight(0.5),
            paddingBottom: responsiveHeight(5),                
        },
        commonInfoContainer:{
            fontFamily : CAMBRIA,
            backgroundColor : COLOR.BACKGROUND_COLOR,        
            paddingHorizontal: responsiveWidth(2),
            paddingVertical: responsiveHeight(0.5),                               
        },
        commonContentContainer:{
            backgroundColor : '#ffffff',   
            marginTop: responsiveHeight(1), 
            marginBottom: responsiveHeight(5),              
        },
        commonContentInnerContainer: {           
            paddingHorizontal: responsiveHeight(2),
            marginBottom: responsiveWidth(2),
            textAlign : 'center'
        },
        rowCenter:{
            flexDirection: "row", 
            justifyContent: "center"
        },
        cardBodyCenter:{
            justifyContent : 'center',
            alignContent : 'center'
        },
        noRecordText:{
            fontSize: responsiveFontSize(1.6),
            fontFamily : POPPINSMEDIUM,
            textAlign : "center",
            alignSelf:'center',
            paddingHorizontal:responsiveWidth(2),     
            paddingVertical:responsiveHeight(2),         
            color:'#a9a9a9',           
        },
        noRecordImage:{
            padding:10, 
            alignSelf : 'center'     
        },

        /* ACCORDIAN CSS */
        tabHeadingContainer:{
            flexDirection: "row", 
            borderColor:'#e3e3e3',
            borderWidth:1,   
            borderRadius:5,               
            paddingHorizontal: responsiveWidth(2),
            paddingVertical: responsiveHeight(1.5),         
            justifyContent: "space-between", 
            alignItems: "center", 
            backgroundColor: "#fff",     
            marginBottom   :  responsiveHeight(2),               
            elevation: 2,           
        },
        tabHeadingContainerExpanded :{
            flexDirection: "row", 
            borderColor:'#e3e3e3',
            borderWidth:1,  
            paddingHorizontal: responsiveWidth(2),
            paddingVertical: responsiveHeight(1.5),         
            justifyContent: "space-between",    
            alignItems: "center", 
            backgroundColor: "#fff",           
        },
        tabHeadingText:{
            color:'rgba(12,34,58,0.60)',
            fontSize:responsiveFontSize(1.8),
            left:responsiveWidth(1),       
            fontFamily : POPPINSREGULAR
        },
        tabHeadingArrow:{
            color:'#0c223a99',
            fontSize:responsiveFontSize(3),
            right:responsiveWidth(2),
            position:'absolute'
        },
        tabContent:{
            paddingHorizontal: responsiveWidth(3),
            paddingVertical: responsiveHeight(2),
            borderColor:'#e3e3e3',
            borderWidth:1,   
            borderTopWidth:0,
            backgroundColor:COLOR.BACKGROUND_CONTAINER_COLOR             
        },
        tabContainer:{
            marginTop: responsiveHeight(1),            
        },
        accordianCss:{
            backgroundColor:'#fff', 
            marginBottom : responsiveHeight(2),            
        },
        pointTabContainerStyle :{ 
            height: responsiveHeight(2),                                 
            backgroundColor:'#F9F9F9',
            borderColor:'#e3e3e3',
            elevation: 0,
        },
        pointListContent:{
            backgroundColor :  "#fff", 
            borderColor     :  "#e3e3e3",
            borderWidth     :   1,
            bottom          :  responsiveHeight(2),
            borderTopWidth  :   0                   
        },
        pointTabHeadingContainer:{
            color: '#535353',
            fontSize:responsiveFontSize(3),
            fontFamily: DAGGERSQUARE
        },
        pointTabHeadingContainerDefault:{
            backgroundColor: '#ffffff',
            borderColor:'#ffffff',
            borderWidth:1,
            borderRadius:5,
            marginHorizontal:5
        },
        pointTabHeadingContainerActive:{
            backgroundColor: '#535353',
            borderColor:'#535353',
            borderWidth:1,
            borderRadius:5,
            marginHorizontal:5
        },
        pointTabHeadingText:{
            color: '#535353',
            fontSize:responsiveFontSize(1.8),
            fontFamily: DAGGERSQUARE             
        },
        pointTabHeadingTextActive:{
            color: '#ffffff',
            fontSize:responsiveFontSize(1.8),
            fontFamily: DAGGERSQUARE                
        },
        /* ACCORDIAN CSS */

        /* FOOTER BUTTONS */ 
        bottomButtonBar : {
            flexDirection: 'row',
            height: 50,
            paddingHorizontal:responsiveWidth(1.6),
            position:'absolute',
            bottom:0,
            width:responsiveWidth(100),
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:COLOR.DEFAULT_BUTTON_COLOR,
            paddingTop:responsiveHeight(1),  
            paddingBottom:responsiveHeight(1),               
        },
        bottomButtonLeft : {
            flex:1,
            elevation:1,
            justifyContent:'center',
            alignItems:'center',          
            borderRadius:5,
            flexDirection:'row',
            backgroundColor:'#fff',
            marginRight:responsiveWidth(2),
            paddingVertical:responsiveHeight(1),
            maxWidth:responsiveWidth(50)
        },
        bottomButtonRight : {
            flex:1,
            justifyContent:'center',
            alignItems:'center',         
            borderRadius:5,
            elevation:1,
            flexDirection:'row',
            backgroundColor:'#fff',
            paddingVertical:responsiveHeight(1),
            maxWidth:responsiveWidth(100)
        },
        bottomButtonRightDisable : {
            flex:1,
            justifyContent:'center',
            alignItems:'center',         
            borderRadius:5,
            elevation:1,
            flexDirection:'row',
            backgroundColor:'#ddd',
            paddingVertical:responsiveHeight(1),
            maxWidth:responsiveWidth(50)
        },
        bottomButtonCenter : {
            flex:1,
            justifyContent:'center',
            alignItems:'center',         
            borderRadius:50,
            elevation:1,
            flexDirection:'row',
            backgroundColor:COLOR.DEFAULT_BUTTON_COLOR,
            paddingVertical:responsiveHeight(1),
            maxWidth:responsiveWidth(50)
        },  
        bottomButtonBadge : {
            backgroundColor : COLOR.DEFAULT_BUTTON_COLOR,
            borderRadius:2,
            height:responsiveHeight(3)
        },
        bottomButtonBadgeText : {
            color:"#fff"
        },
        bottomButtonBarFull : {
            flexDirection: 'row',
            height: responsiveHeight(7),         
            bottom:0,
            width:responsiveWidth(100),
            justifyContent:'space-between',
            alignItems:'center',         
        },
        bottomButtonBarCreateContest : {
            flexDirection: 'row',
            height: responsiveHeight(8),         
            position:'absolute',
            bottom:0,
            width:responsiveWidth(100),
            justifyContent:'space-between',
            alignItems:'center',               
        },
        bottomButtonLeftFull : {
            flex:1,
            elevation:1,
            justifyContent:'center',
            alignItems:'center',      
            flexDirection:'row',
            backgroundColor:'#fff',     
            paddingVertical:responsiveHeight(2),
            maxWidth:responsiveWidth(50)
        },
        bottomButtonRightFull : {
            flex:1,
            justifyContent:'center',
            alignItems:'center',      
            elevation:1,
            flexDirection:'row',
            backgroundColor:'#32a13e',
            paddingVertical:responsiveHeight(2),
            maxWidth:responsiveWidth(100)
        },
        drawerOverlay: {
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
            opacity: 0.9,
          },
          drawerOverlayText: {
            width: "20",
            fontSize: 15,
            color: "black",
            fontWeight: "bold"
          },
        /* FOOTER BUTTONS */ 
      
        /*####################################### CSS 24-5-2019  CSS ############################*/
		
        tabPlayerContainer:{
            elevation:15,
            borderRadius:50,
            height:responsiveHeight(10),
            width:responsiveWidth(18),
            backgroundColor:'#FAFAFA',
            justifyContent:'center'
        },
        tabPlayerContainerIOS:{
            borderRadius:50,
            height:responsiveHeight(8),
            width:responsiveWidth(14),
            backgroundColor:'#FAFAFA',
            justifyContent:'center',
            shadowColor : '#000',
            shadowOffset : {width: 2,height: 3},
            shadowOpacity : 0.2,
            shadowRadius : 2,			   
        },
        tabIconPlayerIOS :{				
            alignSelf:'center',
            height:responsiveHeight(4),
            width:responsiveWidth(6)
        },
        topTabStyle:{
            backgroundColor : '#fff',
            top             : IOS_PLATFORM ? responsiveHeight(3) : responsiveHeight(10)
        },
        winningPopUpContainer :{
            height:responsiveHeight(7),							 
            backgroundColor:'#FFFFFF', 
            paddingVertical: responsiveHeight(3),
            alignItems:'center',
            flex:1,
            flexDirection:'row',  
            justifyContent:'center',
            alignSelf:'center',
            borderTopLeftRadius:10,
            borderTopRightRadius:10,
        },
        winningPopUpContainerIOS :{
            height:responsiveHeight(7),
            backgroundColor:'#FFFFFF',
            paddingHorizontal:responsiveWidth(3),
            flexDirection:'row',
            width:responsiveWidth(85),
            alignSelf:'center',		
			alignItems:'center',					
            justifyContent:'center',
            borderTopLeftRadius:10,
            borderTopRightRadius:10,	 
        },
         /* Join Contest and Switch Team Contest  */
         joinContestHeading:{
            color:'#4a4a4a',
            fontSize:responsiveFontSize(2),
            fontFamily : POPPINSSEMIBOLD,           
            paddingVertical:responsiveHeight(2)
        },
        joinContestCard:{                 
            paddingVertical:responsiveHeight(1),
            paddingHorizontal:responsiveWidth(1)
        },
        joinContestCardHeader:{
            height:(IOS_PLATFORM) ? responsiveHeight(7.5) : responsiveHeight(6),
            borderBottomWidth:1,
            borderBottomColor:'#e8e8e8'
        },
        joinContestCardHeading:{
            color:'#000',
            fontSize:responsiveFontSize(2),
            fontFamily : CAMBRIA,           
            paddingVertical:(IOS_PLATFORM) ? 0 : responsiveHeight(1)
        },
        joinContestCardHeadingSelected:{
            color:'#32CD32',
            fontSize:responsiveFontSize(2),
            fontFamily : CAMBRIA,           
            paddingVertical:responsiveHeight(1)
        },
        /* Join Contest and Switch Team Contest  */

        
		
		
		/**/
		colorbg_aa     : { backgroundColor :  "#000000", color : "#fff"  },
		colorbg_ads    : { backgroundColor :  "#2F4F4F", color : "#fff"  },
		colorbg_afg    : { backgroundColor :  "#7F00FF", color : "#fff"  },
		colorbg_arca   : { backgroundColor :  "#778899", color : "#fff"  },
		colorbg_ats    : { backgroundColor :  "#696969", color : "#fff"  },
		colorbg_aus    : { backgroundColor :  "#808080", color : "#fff"  },
		colorbg_ausw   : { backgroundColor :  "#800000", color : "#fff"  },
		colorbg_ban    : { backgroundColor :  "#A52A2A", color : "#fff"  },
		colorbg_bh     : { backgroundColor :  "#A0522D", color : "#fff"  },
		colorbg_cgv    : { backgroundColor :  "#8B4513", color : "#fff"  },
		colorbg_ck     : { backgroundColor :  "#D2691E", color : "#fff"  },
		colorbg_cob    : { backgroundColor :  "#CD853F", color : "#fff"  },
		colorbg_cs     : { backgroundColor :  "#B8860B", color : "#fff"  },
		colorbg_csk    : { backgroundColor :  "#DAA520", color : "#fff"  },
		colorbg_cvs    : { backgroundColor :  "#F4A460", color : "#fff"  },
		colorbg_dd     : { backgroundColor :  "#BC8F8F", color : "#fff"  },
		colorbg_dds    : { backgroundColor :  "#DEB887", color : "#fff"  },
		colorbg_der    : { backgroundColor :  "#191970", color : "#fff"  },
		colorbg_dol    : { backgroundColor :  "#000080", color : "#fff"  },
		colorbg_dur    : { backgroundColor :  "#00008B", color : "#fff"  },
		colorbg_eng    : { backgroundColor :  "#0000CD", color : "#fff"  },
		colorbg_engw   : { backgroundColor :  "#0000FF", color : "#fff"  },
		colorbg_ess    : { backgroundColor :  "#4169E1", color : "#fff"  },
		colorbg_ets    : { backgroundColor :  "#7B68EE", color : "#fff"  },
		colorbg_ger    : { backgroundColor :  "#6495ED", color : "#fff"  },
		colorbg_gla    : { backgroundColor :  "#1E90FF", color : "#fff"  },
		colorbg_glo    : { backgroundColor :  "#00BFFF", color : "#fff"  },
		colorbg_gwh    : { backgroundColor :  "#87CEFA", color : "#000"  },
		colorbg_ham    : { backgroundColor :  "#4682B4", color : "#fff"  },
		colorbg_hbh    : { backgroundColor :  "#5F9EA0", color : "#fff"  },
		colorbg_hrh    : { backgroundColor :  "#00CED1", color : "#fff"  },
		colorbg_ind    : { backgroundColor :  "#48D1CC", color : "#fff"  },
		colorbg_indw   : { backgroundColor :  "#40E0D0", color : "#fff"  },
		colorbg_ire    : { backgroundColor :  "#00FFFF", color : "#fff"  },
		colorbg_irew   : { backgroundColor :  "#008080", color : "#fff"  },
		colorbg_ita    : { backgroundColor :  "#008B8B", color : "#fff"  },
		colorbg_iu     : { backgroundColor :  "#20B2AA", color : "#fff"  },
		colorbg_kent   : { backgroundColor :  "#8FBC8B", color : "#fff"  },
		colorbg_kk     : { backgroundColor :  "#66CDAA", color : "#fff"  },
		colorbg_kkr    : { backgroundColor :  "#556B2F", color : "#fff"  },
		colorbg_kni    : { backgroundColor :  "#808000", color : "#fff"  },
		colorbg_kts    : { backgroundColor :  "#6B8E23", color : "#fff"  },
		colorbg_kws    : { backgroundColor :  "#9ACD32", color : "#fff"  },
		colorbg_kxip   : { backgroundColor :  "#006400", color : "#fff"  },
		colorbg_lan    : { backgroundColor :  "#008000", color : "#fff"  },
		colorbg_lei    : { backgroundColor :  "#228B22", color : "#fff"  },
		colorbg_lio    : { backgroundColor :  "#2E8B57", color : "#fff"  },
		colorbg_ll     : { backgroundColor :  "#3CB371", color : "#fff"  },
		colorbg_lq     : { backgroundColor :  "#00FF7F", color : "#fff"  },
		colorbg_lt     : { backgroundColor :  "#7B68EE", color : "#fff"  },
		colorbg_mi     : { backgroundColor :  "#483D8B", color : "#fff"  },
		colorbg_mid    : { backgroundColor :  "#6A5ACD", color : "#fff"  },
		colorbg_mlr    : { backgroundColor :  "#4B0082", color : "#fff"  },
		colorbg_mls    : { backgroundColor :  "#800080", color : "#fff"  },
		colorbg_mnetk  : { backgroundColor :  "#8B008B", color : "#fff"  },
		colorbg_ms	  	: { backgroundColor :  "#9932CC", color : "#fff"  },
		colorbg_nbb       : { backgroundColor :  "#9400D3", color : "#fff"  },
		colorbg_nk        : { backgroundColor :  "#8A2BE2", color : "#fff"  },
		colorbg_nl        : { backgroundColor :  "#663399", color : "#fff"  },
		colorbg_nmp       : { backgroundColor :  "#9370DB", color : "#fff"  },
		colorbg_nz        : { backgroundColor :  "#BA55D3", color : "#fff"  },
		colorbg_nzw       : { backgroundColor :  "#FF00FF", color : "#fff"  },
		colorbg_omn       : { backgroundColor :  "#FFA500", color : "#fff"  },
		colorbg_ov        : { backgroundColor :  "#FF8C00", color : "#fff"  },
		colorbg_pak       : { backgroundColor :  "#FF4500", color : "#fff"  },
		colorbg_pakw      : { backgroundColor :  "#FF6347", color : "#fff"  },
		colorbg_per       : { backgroundColor :  "#FF7F50", color : "#fff"  },
		colorbg_pz        : { backgroundColor :  "#FFA07A", color : "#fff"  },
		colorbg_qg        : { backgroundColor :  "#DB7093", color : "#fff"  },
		colorbg_rcb       : { backgroundColor :  "#C71585", color : "#fff"  },
		colorbg_rks       : { backgroundColor :  "#FF1493", color : "#fff"  },
		colorbg_rr        : { backgroundColor :  "#FF69B4", color : "#fff"  },
		colorbg_rrs       : { backgroundColor :  "#8B0000", color : "#fff"  },
		colorbg_rsa       : { backgroundColor :  "#B22222", color : "#fff"  },
		colorbg_rsaw      : { backgroundColor :  "#FF0000", color : "#fff"  },
		colorbg_sct       : { backgroundColor :  "#DC143C", color : "#fff"  },
		colorbg_shs       : { backgroundColor :  "#CD5C5C", color : "#fff"  },
		colorbg_sl        : { backgroundColor :  "#F08080", color : "#fff"  },
		colorbg_slw       : { backgroundColor :  "#FA8072", color : "#fff"  },
		colorbg_snv       : { backgroundColor :  "#E9967A", color : "#fff"  },
		colorbg_sobs      : { backgroundColor :  "#FFA07A", color : "#fff"  },
		colorbg_spl       : { backgroundColor :  "#FFD700", color : "#fff"  },
		colorbg_srh       : { backgroundColor :  "#FFFF00", color : "#fff"  },
		colorbg_srl       : { backgroundColor :  "#BDB76B", color : "#fff"  },
		colorbg_ss        : { backgroundColor :  "#DDA0DD", color : "#fff"  },
		colorbg_sv        : { backgroundColor :  "#EE82EE", color : "#fff"  },
		colorbg_syd       : { backgroundColor :  "#0095B6", color : "#fff"  },
		colorbg_syt       : { backgroundColor :  "#DE5D83", color : "#fff"  },
		colorbg_tbz       : { backgroundColor :  "#CD7F32", color : "#fff"  },
		colorbg_ttn       : { backgroundColor :  "#964B00", color : "#fff"  },
		colorbg_uae       : { backgroundColor :  "#800020", color : "#fff"  },
		colorbg_usa       : { backgroundColor :  "#702963", color : "#fff"  },
		colorbg_vly       : { backgroundColor :  "#960018", color : "#fff"  },
		colorbg_war       : { backgroundColor :  "#DE3163", color : "#fff"  },
		colorbg_wf        : { backgroundColor :  "#007BA7", color : "#fff"  },
		colorbg_wi        : { backgroundColor :  "#7B3F00", color : "#fff"  },
		colorbg_wiw       : { backgroundColor :  "#0047AB", color : "#fff"  },
		colorbg_wrs       : { backgroundColor :  "#6F4E37", color : "#fff"  },
		colorbg_ws        : { backgroundColor :  "#B87333", color : "#fff"  },
		colorbg_yd        : { backgroundColor :  "#00FF3F", color : "#fff"  },
		colorbg_zim       : { backgroundColor :  "#00A86B", color : "#fff"  },
		colorbg_zimw      : { backgroundColor :  "#B57EDC", color : "#fff"  },
		colorbg_zwr       : { backgroundColor :  "#D1E231", color : "#fff"  },
		colorbg_default   : { backgroundColor :  "#000", color : "#fff" },
		colorbg_0		  : { backgroundColor :  "#fff", color : "#000" },
		colorbg_1		  : { backgroundColor :  "#000", color : "#fff" },

        colortext_default     : { color : "#000"  },
		colortext_aa     : { color : "#000000"  },
		colortext_ads    : { color : "#2F4F4F"  },
		colortext_afg    : { color : "#7F00FF"  },
		colortext_arca   : { color : "#778899"  },
		colortext_ats    : { color : "#696969"  },
		colortext_aus    : { color : "#808080"  },
		colortext_ausw   : { color : "#800000"  },
		colortext_ban    : { color : "#A52A2A"  },
		colortext_bh     : { color : "#A0522D"  },
		colortext_cgv    : { color : "#8B4513"  },
		colortext_ck     : { color : "#D2691E"  },
		colortext_cob    : { color : "#CD853F"  },
		colortext_cs     : { color : "#B8860B"  },
		colortext_csk    : { color : "#DAA520"  },
		colortext_cvs    : { color : "#F4A460"  },
		colortext_dd     : { color : "#BC8F8F"  },
		colortext_dds    : { color : "#DEB887"  },
		colortext_der    : { color : "#191970"  },
		colortext_dol    : { color : "#000080"  },
		colortext_dur    : { color : "#00008B"  },
		colortext_eng    : { color : "#0000CD"  },
		colortext_engw   : { color : "#0000FF"  },
		colortext_ess    : { color : "#4169E1"  },
		colortext_ets    : { color : "#7B68EE"  },
		colortext_ger    : { color : "#6495ED"  },
		colortext_gla    : { color : "#1E90FF"  },
		colortext_glo    : { color : "#00BFFF"  },
		colortext_gwh    : { color : "#87CEFA"  },
		colortext_ham    : { color : "#4682B4"  },
		colortext_hbh    : { color : "#5F9EA0"  },
		colortext_hrh    : { color : "#00CED1"  },
		colortext_ind    : { color : "#48D1CC"  },
		colortext_indw   : { color : "#40E0D0"  },
		colortext_ire    : { color : "#00FFFF"  },
		colortext_irew   : { color : "#008080"  },
		colortext_ita    : { color : "#008B8B"  },
		colortext_iu     : { color : "#20B2AA"  },
		colortext_kent   : { color : "#8FBC8B"  },
		colortext_kk     : { color : "#66CDAA"  },
		colortext_kkr    : { color : "#556B2F"  },
		colortext_kni    : { color : "#808000"  },
		colortext_kts    : { color : "#6B8E23"  },
		colortext_kws    : { color : "#9ACD32"  },
		colortext        : { color : "#006400"  },
		colortext_lan    : { color : "#008000"  },
		colortext_lei    : { color : "#228B22"  },
		colortext_lio    : { color : "#2E8B57"  },
		colortext_ll     : { color : "#3CB371"  },
		colortext_lq     : { color : "#00FF7F"  },
		colortext_lt     : { color : "#7B68EE"  },
		colortext_mi     : { color : "#483D8B"  },
		colortext_mid    : { color : "#6A5ACD"  },
		colortext_mlr    : { color : "#4B0082"  },
		colortext_mls    : { color : "#800080"  },
		colortext_mnetk  : { color : "#8B008B"  },
		colortext_ms	  	: { color : "#9932CC"  },
		colortext_nbb       : { color : "#9400D3"  },
		colortext_nk        : { color : "#8A2BE2"  },
		colortext_nl        : { color : "#663399"  },
		colortext_nmp       : { color : "#9370DB"  },
		colortext_nz        : { color : "#BA55D3"  },
		colortext_nzw       : { color : "#FF00FF"  },
		colortext_omn       : { color : "#FFA500"  },
		colortext_ov        : { color : "#FF8C00"  },
		colortext_pak       : { color : "#FF4500"  },
		colortext_pakw      : { color : "#FF6347"  },
		colortext_per       : { color : "#FF7F50"  },
		colortext_pz        : { color : "#FFA07A"  },
		colortext_qg        : { color : "#DB7093"  },
		colortext_rcb       : { color : "#C71585"  },
		colortext_rks       : { color : "#FF1493"  },
		colortext_rr        : { color : "#FF69B4"  },
		colortext_rrs       : { color : "#8B0000"  },
		colortext_rsa       : { color : "#B22222"  },
		colortext_rsaw      : { color : "#FF0000"  },
		colortext_sct       : { color : "#DC143C"  },
		colortext_shs       : { color : "#CD5C5C"  },
		colortext_sl        : { color : "#F08080"  },
		colortext_slw       : { color : "#FA8072"  },
		colortext_snv       : { color : "#E9967A"  },
		colortext_sobs      : { color : "#FFA07A"  },
		colortext_spl       : { color : "#FFD700"  },
		colortext_srh       : { color : "#FFFF00"  },
		colortext_srl       : { color : "#BDB76B"  },
		colortext_ss        : { color : "#DDA0DD"  },
		colortext_sv        : { color : "#EE82EE"  },
		colortext_syd       : { color : "#0095B6"  },
		colortext_syt       : { color : "#DE5D83"  },
		colortext_tbz       : { color : "#CD7F32"  },
		colortext_ttn       : { color : "#964B00"  },
		colortext_uae       : { color : "#800020"  },
		colortext_usa       : { color : "#702963"  },
		colortext_vly       : { color : "#960018"  },
		colortext_war       : { color : "#DE3163"  },
		colortext_wf        : { color : "#007BA7"  },
		colortext_wi        : { color : "#7B3F00"  },
		colortext_wiw       : { color : "#0047AB"  },
		colortext_wrs       : { color : "#6F4E37"  },
		colortext_ws        : { color : "#B87333"  },
		colortext_yd        : { color : "#00FF3F"  },
		colortext_zim       : { color : "#00A86B"  },
		colortext_zimw      : { color : "#B57EDC"  },
		colortext_zwr       : { color : "#D1E231"  },   
		
		
        /**/        

       

         /* ################### SLIDER CARD ####################  */
        sliderButtons: {
            zIndex: 1,
            height: 15,
            marginTop: -25,
            marginBottom: 10,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
        },
        sliderButton: {
            margin: 3,
            width: 9,
            height: 6,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor:'#AFAFAF',
            borderRadius:3,
            margin:5
        },
        sliderButtonSelected: {
            margin: 3,
            width: 20,
            height: 6,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor:'#FFFFFF',
            borderRadius:3,
            margin:5
        },

        /* ################### SLIDER CARD ####################  */

        /* ################### BUDDIES CARD ####################  */

        buddiessPlayCardContainerItem: {
            height: responsiveHeight('12')
        },
        buddiessPlayCardImage: {
            flex: 1,
            width: null,
        },
        buddiessPlayCardEarnMore: {
            flex: 1,
            flexDirection: 'row'
        },
        buddiessPlayChildView: {
            flex: 2.5
        },
        buddiessPlayBoldText: {
            marginLeft: responsiveWidth('1.6'),
            color: '#403f3f',
            fontSize: responsiveWidth('3.3'),
            fontFamily: "DAGGERSQUARE",
        },
        buddiessPlayRegularText: {
            flexWrap: 'wrap',
            marginLeft: responsiveWidth('1.8'),
            color: "#403f3f",
            fontSize: responsiveWidth('2.8'),
            fontFamily: "roboto-medium",
            color: '#4B4B4B'
        },
        buddiessPlayButtonView: {
            flex: 1,
            justifyContent: 'center',
            marginRight: responsiveWidth('1.5'),
        },
        buddiessPlayButton: {
            alignSelf: 'center',
            backgroundColor: '#187FCE',
            borderRadius: 4
        },
        buddiessPlayKnowMoreButton: {
            color: '#fff',
            fontSize: responsiveWidth('2.8'),
            fontFamily: "DAGGERSQUARE",
        },
        /* ################### BUDDIES CARD ####################  */

       
        /* ###################### MORE SCREEN ###################### */ 
        itemsContainer:{
            backgroundColor: 'white',
            alignItems: 'center',
            paddingVertical: responsiveHeight(1.5),
            flex: 1, 
            flexDirection: 'row',
            borderBottomWidth: 0.4,
            borderColor: 'lightgray'
        },
        paddingVertical:{
            paddingVertical: responsiveHeight(2),
        },
        leftIcon:{
            marginLeft: responsiveWidth(3)
        },
        IconLeft:{
            marginLeft:responsiveWidth(1.5),
            color:'#aaa'
        },
        rightIcon:{
            color:"#9B9B9B" , 
            fontSize: responsiveFontSize(4.0),   
            marginRight: responsiveWidth(3)
        },
        textTitle:{
            color:'#323232',
            fontSize: responsiveFontSize(2),
            fontFamily: "Cambria",  
            paddingLeft: responsiveWidth(4),
            alignSelf: 'flex-start',
        },

        /* ###################### App-Intro SCREEN ###################### */ 

          appIntroTitle: {
            color: 'white',
            fontSize: 24,
            fontWeight: 'bold',
            alignSelf: 'center',
            marginTop:20
          },
          appIntroBody: {
            color: 'black',
            fontWeight: 'bold',
            alignSelf: 'center',
            marginBottom:20
          },
          appIntrocontainer: {
            height: 400,
            borderRadius: 50,
            backgroundColor: '#4bb9ac',
            width: '100%',
            marginTop: 30,
          },
          appIntrocontainer1: {
            backgroundColor: '#f0f5fb',
            marginTop: 30,
            flex: 1,
            width: '100%',
            borderRadius: 50,
            marginBottom: 10,
            paddingHorizontal: 20,
            justifyContent: 'center',
          },
          
        /* ###################### Login and OTP Screen ###################### */

        headerSmalltext: {
            fontSize: 16,
            color: 'white',
            alignSelf: 'center',
            marginTop: 20,
          },
        headerLargeText: {
            color: 'white',
            fontSize: 24,
            fontWeight: 'bold',
            alignSelf: 'center',
          },  
          bodyText: {
            color: 'black',
            fontWeight: 'bold',
            alignSelf: 'center',
          },
          bigContainer: {
            borderRadius: 50,
            backgroundColor: '#4bb9ac',
            width: '100%',
            paddingHorizontal:5,
            alignSelf: 'flex-start',
            justifyContent: 'flex-start',
            marginTop:30
          },
          smallContainer: {
            backgroundColor: '#f0f5fb',
            marginTop: 30,
            width: '100%',
            borderRadius: 50,
            marginBottom: 5,
            paddingHorizontal: 20,
            paddingVertical: 10, 
          },
          pressableText:{
            color: '#4bb9ac',
            fontWeight: 'bold',
            alignSelf: 'center',
          },
          codeInputStyle:{
            borderRadius: 18,
            borderWidth:1,
            height:35,
            backgroundColor:'white',
            borderColor: '#cacdcd',
            marginHorizontal : responsiveWidth(1),
           
            
          },

          /* ###################### Track Complaint SCREEN ###################### */
         
          complaintText:{
            color: 'black',
            fontWeight: 'bold',
            alignSelf: 'center',
          },
          complaintButtonText:{
            color: '#4bb9ac',
            fontWeight: 'bold',
            alignSelf: 'center',
            marginTop: 20,
          },
          warningText: {
            color: 'red',
          },
          complaintBigContainer:{
            borderRadius: 50,
            backgroundColor: '#4bb9ac',
            width: '100%',
          },
          complaintSmallContainer:{
            backgroundColor: '#f0f5fb',
            flex: 1,
            borderRadius: 50,
            marginBottom: 5,
            marginLeft: 5,
            marginRight: 5,
            padding: 30,
            justifyContent: 'center',
          },
          line: {
            width: 1,
            height: '70%',
            backgroundColor: '#4bb9ac',
          },
          descriptionIcon: {
            alignSelf: 'center',
          },
          descriptionContainer:{
            height: 20,
            alignItems: 'center',
            marginTop: 15,
            marginBottom: 15,
          },
          descriptionText:{
            fontWeight: 'bold',
          },
          evidenceContainer:{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginBottom: 20,
            marginTop:20
          },
          /* ###################### Track Complaint SCREEN ###################### */

          trackContainer:{
            backgroundColor:'#4bb9ac',
            borderRadius:50,
            width:'100%',
            paddingHorizontal:10,
            paddingVertical:20,
            marginVertical:10
        },
        trackContainerSmall:{
            backgroundColor:'white',
            borderRadius:50,
            paddingVertical:20,
            paddingHorizontal:30,
            marginVertical:20
        },
        calendarText:{
            color:'white', 
            fontSize:17,
            fontWeight:'bold'
        },
        row: {
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical:2
          },
          label: {
            fontWeight: 'bold',
            color:'black',
            fontSize:16,
            width:'40%',
            textAlign: 'justify',
          },
          value: {
            flex: 1,
            color:'black',
            fontSize:16,
          },
          /* ###################### App Header ###################### */ 

          headerContainer:{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
            marginLeft: 10,
            marginRight: 10,
            marginBottom: 20,
          },

          headerText:{
            color: 'black',
            fontSize: 20,
            fontWeight: 'bold',
            alignSelf: 'center',
          },
         /* ###################### DashBoard SCREEN ###################### */ 
         
         card:{
            backgroundColor: '#3498db',
            aspectRatio:1,
            width: (width - 105) / 2.2,
            minHeight: (width - 105) / 2.2,
            borderRadius: Math.round((50 * width) / 400),
            overflow: 'hidden',
            borderWidth: Math.round((2 * width) / 400),
            borderColor: '#4bb9ac',
            marginBottom:Math.round((10 * width) / 400),
         },
         imageContainer:{
            backgroundColor: 'white',
            // borderBottomLeftRadius:Math.min(width, height) * 0.10,
            borderBottomStartRadius:Math.min(width, height) * 0.1,
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            padding:10
         },
         textContainer:{
            backgroundColor: '#3498db',
            borderTopRightRadius:Math.min(width, height) * 0.15,
            justifyContent:'center',
            flex: 1,
         },
         cardText:{
            fontSize: Math.round((17 * width) / 400),
            color: 'white',
            fontWeight:"bold",
            alignSelf:'center',
            textAlign:'center',
            marginHorizontal:10
         },
         dashboardLargeText:{
            color:'white',
            fontSize:Math.round((23 * width) / 400),
            fontWeight:'bold',
            alignSelf:'center',
         },
         dashboardSmallTextHeading:{
            color:'white',
            alignSelf:'center',
            marginTop: Math.round((20 * width) / 600),
            textAlign:'center',
          //  marginBottom:20,
            paddingHorizontal:Math.round((5 * width) / 600),
            justifyContent:'center',
            fontSize:Math.round((15 * width) / 500)
         },
         dashboardSmallText:{
            color:'white',
            alignSelf:'center',
            marginTop:Math.round((20 * width) / 700),
            textAlign:'center',
            marginBottom:Math.round((20 * width) / 700),
            paddingHorizontal:Math.round((5 * width) / 400),
            justifyContent:'center',
            fontSize:Math.round((15 * width) / 500)
         },

         dashboardBigContainer:{
            borderRadius: Math.round((50 * width) / 400),
            backgroundColor: COLOR.BACKGROUND_COLOR,
            width: '100%',
            alignSelf: 'flex-start',
            justifyContent: 'flex-start',
         },
         dashboardSmallContainer:{
            backgroundColor: '#f0f5fb',
            borderRadius: Math.round((50 * width) / 400),
            padding: Math.round((10 * width) / 400),
         },
         dashboardLogo:{
            height: windowHeight * 0.08,
            width: windowHeight * 0.25,
            alignContent:'center'
         },

         toolkitButton:{
            paddingVertical:10,
            paddingHorizontal:20,
            borderRadius:30,
            alignSelf:'center',
            marginVertical:20,
            borderColor:'white',
            borderWidth:2
         },
         toolkitText:{
            color:'white',
            alignSelf:'center',
            fontWeight:'bold'
         },

         listCard:{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
            
         },
         dashBoardAppBar:{
            flexDirection: 'row',
            // marginTop: Math.round((30 * width) / 400),
            // marginHorizontal:Math.round((20 * width) / 400),
            height: 55,
            alignItems: 'center', 
            paddingLeft:40,
            justifyContent: 'space-between',
            backgroundColor:'white',
            paddingRight:20,
            paddingTop:10
          //  marginBottom: 20,
          
            
         },
         dashBoardBottomBar:{
            elevation:1, 
            // flex:(0.08 * width) / 700, 
            flex:0.07,
            
      margin:10,
            backgroundColor: 'transparent',
            padding:Math.round((20 * width) / 400),
            
         },
         /* ######################  Custtom Pressable ###################### */ 
         
         buttonStyle:{
            backgroundColor: 'white',
            width: width - 40,
            height: height * 0.10,
            marginBottom: height * 0.02,
            paddingRight: width * 0.05,
            paddingVertical: height * 0.02,
            justifyContent:'center',
            elevation: 5,
            shadowColor: 'black',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
         },
         buttonText: {
            fontWeight: 'bold',
            color: COLOR.BACKGROUND_COLOR,
            fontSize: Math.round((18 * width) / 400),
            alignSelf:'flex-start'
          },
          buttonText1: {
            color: COLOR.BACKGROUND_COLOR,
          },
          buttonContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: 'white',
            alignItems:'center',
            width: width - 40,
            height: height * 0.10,
            marginTop: height * 0.02,
            paddingRight: width * 0.05,
            // paddingVertical: height * 0.02,
            justifyContent:'center',
            elevation: 5,
            shadowColor: 'black',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            
          },
          buttonContainer1: {
            flex: 1,
            alignItems: 'flex-start',
            justifyContent:'center',
            backgroundColor:'white',
            marginLeft:20
          },
          
        /* ###################### Terms and Conditions ###################### */ 

        termsLargeText:{
            color:'black',
            textAlign:'left',
            fontSize:17,
            marginBottom:20,
            fontWeight:'bold'
        },

        termsSmallText:{
            color:'black',
            textAlign:'left',
            fontSize:16,
            marginBottom:20
        },

        /* ###################### Knowledge Bank ###################### */ 

        knowledgeContainer1:{
            marginTop:-15,
            // width: windowWidth - 40,
            paddingHorizontal:20,
            paddingVertical:10,
            marginBottom:20
        },
        knowledgeContainer3:{
            flexDirection:'row',
            justifyContent:'space-between',
            marginBottom:20
            
        },
        knowledgeText:{
            fontSize:18,
            fontWeight:'bold',
            color:'black',
            marginBottom:10,
            marginLeft:10,
            maxWidth: windowWidth - 180,
        },
        knowledgeImage:{
            marginBottom:10,
        },

        /* ###################### MORE SCREEN ###################### */ 
        gradientRound: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 30,
          },
          gradientButton : {
            borderRadius: 30,
            height: 50,
            marginBottom: 20,
            overflow: 'hidden',
        },
        buttonSmallCenterText:{
            fontWeight:'bold',
            color:'white'
        },
        loginCardContainer : {
            height: 350,
            borderRadius: 50,
            backgroundColor: '#4bb9ac',
            width: '100%',
          },
          loginCardInnerContainer : {
            backgroundColor: '#f0f5fb',
            marginTop: 30,
            flex: 1,
            width: '100%',
            borderRadius: 50,
            marginBottom: 10,
            padding: 30,
            justifyContent: 'center',
          },
          loginCardContainerHeading : {
            fontSize: 16,
            color: 'white',
            alignSelf: 'center',
            marginTop: 5,
          },
          loginCardContainerSubheading : {
            color: 'white',
            fontSize: 24,
            fontWeight: 'bold',
            alignSelf: 'center',
          },
          loginCardContainerText : {
            color: 'black',
            fontWeight: 'bold',
            alignSelf: 'center',
          },
          
				
});

export default globalStyles;
