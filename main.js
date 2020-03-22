
function ShowMenu(){
    document.getElementById('MenuBar').classList.toggle('show');

}
window.onclick = function(e){
    if(!e.target.matches('.MenuBtn')){
        var myMenu = this.document.getElementById('MenuBar');
        if(myMenu.classList.contains('show')){
            myMenu.classList.remove('show');
        }
    }
}





function ShowTime(){

    var today = new Date();
    var day = today.getDate();
    var dd = today.getDay();
    var dayList =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var mm =today.getMonth()+1;
    var yy = today.getFullYear();
    var seconds = today.getSeconds();
    var minutes = today.getMinutes();
    var hour = today.getHours();
    
    function CheckTime(){
        if(seconds<10){
            seconds='0'+seconds;
        }
        if(minutes<10){
            minutes = '0'+minutes;
        }
        if(hour<10){
            hour = '0'+hour;
        }
    }

    CheckTime();
    
    document.getElementById('time').innerHTML = mm + '/'+day+'/' + yy +' '+ dayList[dd] +' ' +hour + ':' +minutes + ':' + seconds;

    
    }
    
    var clock = setInterval(ShowTime,500)

 

function ShowMessage(){

    alert("成功提交！");
}
