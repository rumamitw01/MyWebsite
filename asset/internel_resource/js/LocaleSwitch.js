//此程式相依於jquery，不引入jquery無法使用

function Locale_Switch(locale){
	$("#locale").text(locale);
	var LocalePath="/asset/internel_resource/locale/" //這裡請輸入語系檔所在資料夾
	var path=String(document.location);
	var temp_list=path.split("/");
	if (path.endsWith("html")==false || path.endsWith("php")==false){
		if ($("#filename").text()=="index.html" || $("#filename").text()=="index.php"){
			temp_list[temp_list.length-1]=$("#filename").text();
		}
	}
	path="";
	for (var i=3;i<temp_list.length;i++){
		path=path+"/"+temp_list[i];
	}
	var requestURL=LocalePath+"locale_"+locale+".json";
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
				if (data3_value[0]==path){
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





//利用User Agent設定初始語系

var locale=navigator.language;
locale=locale.toLowerCase();
var requestURL="/asset/internel_resource/locale/supported_locale.json";
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
			Locale_Switch(data_key[i]+"-"+data_value[i]);
			return 0;
		}
	}
	Locale_Switch("en-US");
}