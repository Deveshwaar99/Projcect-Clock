//Getting the Location
//The clock
function currentTime(){
const time=new Date();
let hour=time.getHours();
let min=time.getMinutes();
let sec=time.getSeconds();
let day='';
/*if(hour<=12)
{
    day="am";
    document.getElementById('day').innerHTML=day;
}
else{
    day="pm"
    document.getElementById('day').innerHTML=day;
}
hour=hour>12?hour-12:hour;*/
hour=hour<10?"0"+hour:hour;
min=min<10?"0"+min:min;
sec=sec<10?"0"+sec:sec;

document.getElementById('hour').innerHTML=hour+':';
document.getElementById('min').innerHTML=min+':';
document.getElementById('sec').innerHTML=sec;

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const dayOfWeek = daysOfWeek[time.getDay()];
const dayOfMonth = time.getDate();
const monthOfYear = monthsOfYear[time.getMonth()];
const year = time.getFullYear();
const date=`${dayOfWeek}, ${dayOfMonth}${monthOfYear} ${year}`;
document.getElementById('date').innerHTML=date;
}
setInterval(currentTime,1000);