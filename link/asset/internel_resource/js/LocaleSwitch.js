//這裡註解掉是因為在main.js中已引入jquery，不用引入第二次，一般測試情況請引入jquery
//document.write('<script src="./asset/internel_resource/js/jquery-3.6.4.slim.min.js"></script>');

//第一版寫法
$(document).ready(
	function () {
		$.fn.jqmultilang = 
		function (l) {
			$(this).html($(this).data("lang-" + l));
		};
	}
);

function Locale_Switch_Old(times,input){
	$('#LocaleReq'+String(times)).jqmultilang(input);
}



//後續寫法

function Locale_Switch_New(locale){
	$("#locale").text(locale);
	var requestURL="./asset/internel_resource/locale/locale_"+locale+".json";
	var request=new XMLHttpRequest();
	request.open("get",requestURL);
	request.responseType = 'json';
	request.send();
	request.onload = function() {
		var data=request.response;
		var data_key=Object.keys(data);
		var data_value=Object.values(data);
		for (var i=0;i<data_key.length;i++){
			if (i===1){
				document.title=data_value[i];
			}
			$("#"+data_key[i]).text(data_value[i]);
		}
	}
}





//利用User Agent設定初始語系，支援語言切換功能第二版以後

var locale=navigator.language;
locale=locale.toLowerCase();
var requestURL="./asset/internel_resource/locale/supported_locale.json";
var request=new XMLHttpRequest();
request.open("get",requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
	var data=request.response;
	var data_key=Object.keys(data);
	var data_value=Object.values(data);
	for (var i=0;i<data_key.length;i++){
		if (locale.startsWith(data_key[i]) && locale.endsWith(data_value[i].toLowerCase())){
			Locale_Switch_New(data_key[i]+"-"+data_value[i]);
			return 0;
		}
	}
	Locale_Switch_New("en-US");
}




//多語系切換實時時間顯示格式
	
setInterval(function (){
	var locale=$("#locale").text();
	var time=new Date().toLocaleString(locale);
    $("#Time").text(time);
},100);
