document.write('<script src="./asset/internel_resource/js/jquery-3.6.4.slim.min.js"></script>');
document.write('<script src="./asset/internel_resource/js/LocaleSwitch.js"></script>');
//語言切換
//第一版寫法

function English_Locale_V1(){
	document.title="Rumami's Profile Page";
	for (var i=0;i<10;i++){
		Locale_Switch_Old(i,'en');
	}
}

function Chinese_Locale_V1(){
	document.title="琉見的個人頁面";
	for (var i=0;i<10;i++){
		Locale_Switch_Old(i,'zh-tw');
	}
}

function Japanese_Locale_V1(){
	document.title="ルマミの紹介ページ";
	for (var i=0;i<10;i++){
		Locale_Switch_Old(i,'ja');
	}
}