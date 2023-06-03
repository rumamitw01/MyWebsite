/*
//多語系切換實時時間顯示格式
	
setInterval(function (){
	if (localStorage.getItem("locale")==null){}
	else{
		var locale=localStorage.getItem("locale");
		console.log(locale);
		var time=new Date().toLocaleString(locale);
    	document.getElementById("Time").innerText=time;}
},100);
*/
//預計打掉重來，暫時移除語系切換功能