var Theme_List=["is-dark","is-light"];

//設定主題
function Theme_Set(Theme_Name){
    var Page_Class=document.querySelector("html").className.split(" ");
    if (Theme_List.includes(Page_Class[Page_Class.length-1])){
        Page_Class[Page_Class.length-1]=Theme_Name;
    }
    else{
        Page_Class.push(Theme_Name);
    }
    localStorage.setItem("theme",Theme_Name);
    document.querySelector("html").className=Page_Class.join(" ");
}

//設定初始主題
function Init_Theme(){
    if (localStorage.getItem("theme")==null){
        if (matchMedia("(prefers-color-scheme: dark)").matches==true){
            localStorage.setItem("theme","is-dark");
        }
        else{
            localStorage.setItem("theme","is-light");
        }
    }
    Theme_Set(localStorage.getItem("theme"));
}

//切換主題
function Theme_Switch(){
    if (localStorage.getItem("theme")=="is-dark"){
        Theme_Set("is-light");
    }
    else{
        Theme_Set("is-dark");
    }
}

Init_Theme();