//多語系切換實時時間顯示格式
	
setInterval(function (){
	var locale=document.getElementById("locale").outerText;
	var time=new Date().toLocaleString(locale);
    document.getElementById("Time").innerText=time;
},100);
