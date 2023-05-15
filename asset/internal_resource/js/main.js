var Theme=""
function Theme_Switch(){
    var a=document.getElementsByClassName("is-large")[0].attributes.class.nodeValue.split(" ");
    if(Theme=="dark"){
        a[1]="is-light";
        Theme="light";
    }
    else{
        a[1]="is-dark";
        Theme="dark";
    }
    document.getElementsByClassName("is-large")[0].attributes.class.nodeValue=a[0]+" "+a[1];
}

if (matchMedia("(prefers-color-scheme: dark)")){
    Theme="light"
}
else{
    Theme="dark"
}
var a=document.getElementsByClassName("is-large")[0].attributes.class.nodeValue.split(" ");
if(Theme=="dark"){
    a[1]="is-dark";
}
else{
    a[1]="is-light";
}
document.getElementsByClassName("is-large")[0].attributes.class.nodeValue=a[0]+" "+a[1];