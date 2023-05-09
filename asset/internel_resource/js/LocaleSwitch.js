//此程式相依於jquery，不引入jquery無法使用

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
	var temp=String(document.location);
	var tempList=temp.split("/");
	var path=""
	if ((temp.endsWith("html")) || (temp.endsWith("php"))){
		tempList.pop();
	}
	for (var i=0;i<tempList.length;i++){
		path=path+tempList[i]+"/";
	}
	var LocalePath="/asset/internel_resource/locale/"; //這裡請輸入語系檔的所在資料夾相對網頁所在處的路徑，僅支援檔案結構相同的多網頁
	var requestURL=path+LocalePath+"locale_"+locale+".json";
	var request=new XMLHttpRequest();
	request.open("get",requestURL);
	request.responseType = 'json';
	request.send();
	request.onload = function() {
		var data=request.response;
		var data1_value=Object.values(data);
		for (var i=0;i<data1_value.length;i++){
			var data2_key=Object.keys(data1_value[i]);
			var data2_value=Object.values(data1_value[i]);
			var data3_key=Object.keys(data2_value[0]);
			var data3_value=Object.values(data2_value[0]);
			for (var i=0;i<data3_key.length;i++){
				if (data3_value[0]==$("#filename").text()){
					if (i==2){
						document.title=data3_value[i];
					}
					$("#"+data3_key[i]).text(data3_value[i]);
				}
				else{
					return 0;
				}
			}
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