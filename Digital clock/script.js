let hrs=document.getElementById("hrs");
let min=document.getElementById("min");
let sec=document.getElementById("sec");
setInterval(() => {
    let recentTime= new Date();
hrs.innerHTML= (recentTime.getHours()>10?"":"0")+recentTime.getHours();
min.innerHTML=(recentTime.getMinutes()>10?"":"0") +recentTime.getMinutes();
sec.innerHTML=(recentTime.getSeconds()>10?"":"0") + recentTime.getSeconds();
},1000);
