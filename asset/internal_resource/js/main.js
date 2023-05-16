var Theme=""
function Theme_Switch(){
    var a=document.getElementById("root").className.split(" ");
    if(Theme=="dark"){
        if(a[a.length-1]=="is-dark"){
            a[a.length-1]="is-light"
            Theme="light";
        }
        else{
            a.push("is-light");
            Theme="light";
        }
    }
    else{
        if(a[a.length-1]=="is-light"){
            a[a.length-1]="is-dark"
            Theme="dark";
        }
        else{
            a.push("is-dark");
            Theme="dark";
        }
    }
    document.getElementById("root").className=a.join(" ");
}

//設定初始主題

if (matchMedia("(prefers-color-scheme: dark)").matches==true){
    Theme="dark";
}
else{
    Theme="light";
}
var a=document.getElementById("root").className.split(" ");
if(Theme=="dark"){
    a.push("is-dark");
}
else{
    a.push("is-light");
}
document.getElementById("root").className=a.join(" ");