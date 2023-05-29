var requestURL="https://api.github.com/users/rumamitw01/repos";
var request=new XMLHttpRequest();
request.open("get",requestURL);
request.responseType = 'json';
request.send();
request.onload=function(){
    data=request.response;
    for (var i=0;i<data.length;i++){
        document.getElementById("projects").innerHTML+=
        "<tr><td>"+String(i+1)+
        "</td><td>"+data[i].name+
        "</td><td><a href='"+data[i].svn_url+"' target='_blank' rel='noreferrer noopenner' class='ts-text is-external-link'>"+data[i].svn_url+
        "</a></td><td>"+data[i].description+
        "</td></tr>";
    }
    document.getElementById("repo-count").innerText="統計筆數："+data.length;
}
var requestURL="https://api.github.com/users/rumamitw01/events";
var request2=new XMLHttpRequest();
request2.open("get",requestURL);
request2.responseType = 'json';
request2.send();
request2.onload=function(){
    data=request2.response;
    document.getElementById("recent").innerText=data[0].payload.commits[0].message+" @ "+data[0].repo.name;
}