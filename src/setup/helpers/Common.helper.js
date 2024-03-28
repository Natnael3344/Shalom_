//@flow
import React from 'react';
import moment from 'moment';
import FIcon from 'react-native-vector-icons/dist/FontAwesome';
import {COLOR} from '../constants/GlobalConstants';

const {INPROGRESS,COMPLETE,UPCOMING} = COLOR;

export const commonHelper = {
	capitalizeFirstLetter,
	changeDateFormat,
    changeDateTimeFormat,
    changeDateTimeFormatContest,
    roundOff,
    displayPrice,
    getUTCFormat,
    getDOBFormat,
    getInitials,
    getCountDownTime,
    isPastDate
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function roundOff( value ){
    let price   =   0;
  
    if(typeof value != 'undefined')
    {
        let haveDecimal = (value - Math.floor(value)) !== 0; 
     
        if(haveDecimal)
        {
            price   =   parseFloat(value).toFixed(2);
        }
        else{
            price   =   parseInt(value);
        }       
    }
    
    return( price );
}

function displayPrice( price, iconSize = 14 ){
	
	//return( '₹'+roundOff(price,2) );
	
	let priceData	=	<FIcon name="rupee" size={iconSize} > {roundOff(price,2)} </FIcon>;
	return(priceData);
}
/*function for chnage date format */
function changeDateFormat(date) {
    let dateN = new Date(date);  //or your date here
    return (dateN.getFullYear() + '-' + (dateN.getMonth() + 1) + '-' + dateN.getDate());
}/*end of changeDateFormat */

/*function for change date and time */
function changeDateTimeFormat(date) {
    let dateN = new Date(date);  //or your date here
    let hours = dateN.getHours()% 12;
    let ampm = hours <= 12 ? 'PM' : 'AM';
    return (dateN.getDate() + '/' + (dateN.getMonth() + 1) + '/' + dateN.getFullYear() +'  '+ dateN.getHours()% 12 +':'+ dateN.getMinutes() + ampm);
}/* end of changeDateTimeFormat*/


/*function for change date and time for Contest */
function changeDateTimeFormatContest(date) {
    return moment(date*1000).format("MMMM Do , YYYY, hh:MM A"); 
}/* end of changeDateTimeFormatContest*/

/* FUNCTION TO GET UTC DATE FORMATE */
function getUTCFormat(date){
        
    if(date != '')
    {      
        let dateString  =   moment(date).format('DD/MM/YYYY');
        let dateString1 =   dateString.split("/");

        returnDate      =    new Date(dateString1[2], dateString1[1] - 1, dateString1[0])
    }
    else{
        returnDate      =    new Date();
    }

    return returnDate
}

/* FUNCTION TO GET UTC DATE FORMATE */
function getDOBFormat(date){
        
    if(date != '')
    {        
        let dateString1 =   date.split("-");

        returnDate      =    new Date(dateString1[0], dateString1[1] - 1, dateString1[2])
    }
    else{
        returnDate      =    new Date();
    }

    return returnDate
}

/** get text short name */
function getInitials(string) {
    let p_String = string.trim();
    let names = p_String.split(' ',2);
    initials = names[0].substring(0, 1);
    if (names.length > 1) {
        initials += ' ' +names[names.length - 1];
    } else if(names.length == 1){
      initials = p_String;
    }
     return initials;
}
    

/* FUNCTION TO GET COUNTDOWN TIME */
function getCountDownTime(time)
{
        // Get countDownDate date and time
    let countDownDate           =    (time * 1000);

    let now                     =   new Date().getTime();
    
     let distance               =   countDownDate - now;
     let hours                  =   Number(Math.floor((24 * distance / (1000 * 60 * 60 * 24))));
     let minutes                =   Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
     let seconds                =   Math.floor((distance % (1000 * 60)) / 1000);
     let oneDay                 =   24*60*60*1000; // hours*minutes*seconds*milliseconds
     let diffDays               =   Math.round(Math.abs((distance)/(oneDay)));
     let diffDaysBeforeDecimal  =   Math.trunc((distance)/(oneDay));
     let daysDifference         =   Math.floor(distance/1000/60/60);

     let res                    =   '';
     let countDownColor         =   '';

    if(diffDays <= 2)
     {
        res                     =   hours + "h " + minutes + "m " + seconds + "s ";
        res                     =   res + " ";
     }
     else{
        res                     =   diffDaysBeforeDecimal + " days left";
     }

    if(daysDifference < 1){
        countDownColor = UPCOMING;
    }else if(daysDifference >= 1 && daysDifference < 24 ){
        countDownColor = INPROGRESS;      
    }else{
        countDownColor = COMPLETE;
    }
   

    return { timeStr : res, distance : distance, daysDifference : daysDifference, countDownColor : countDownColor}
     
}


function isPastDate(date){
    let start_date = moment.utc(date);
    return moment().isBefore(start_date);
}