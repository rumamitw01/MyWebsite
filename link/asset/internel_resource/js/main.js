//多語系切換實時時間顯示格式
	
setInterval(function (){
	var locale=$("#locale").text();
	var time=new Date().toLocaleString(locale);
    $("#Time").text(time);
},100);
