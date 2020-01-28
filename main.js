var showCurrentTime = function (){
    var clock = document.getElementById('clock');
    var currentTime = new Date();
    var hours=currentTime.getHours();
    var minutes=currentTime.getMinutes();
    var seconds=currentTime.getSeconds();
    var meridian="AM";
    
    
    if(hours >12)
        {
            meridian="PM";
            
        }
    if(hours>12)
        {
            hours=hours-12;
            hours="0"+hours;
        }
    if(minutes<10)
        {
            minutes="0"+minutes;
        }
    if(seconds<10)
        {
            seconds="0"+seconds;
        }
    var clocktime=hours+":"+minutes+":"+seconds+" "+meridian;
    
    clock.innerText=clocktime;
    
};

var updateClock = function(){
 showCurrentTime();
};
updateClock();

var oneSecond=1000;
setInterval(updateClock,oneSecond);
    
