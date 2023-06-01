var requestURL="https://api.github.com/users/rumamitw01/repos";
var request=new XMLHttpRequest();
request.open("get",requestURL);
request.responseType = 'json';
request.send();
request.onload=function(){
    data=request.response;
    for (var i=0;i<data.length;i++){
        var temp="<tr><td>"+String(i+1)+
        "</td>";
        if (screen.width<=767){
            temp+="<td><a href='"+data[i].svn_url+
            "' target='_blank' rel='noreferrer noopenner' class='mobile:ts-text mobile:is-external-link'>"+data[i].name+
            "</a>";
        }
        else{
            temp+="<td class='mobile:u-hidden'>"+data[i].name
        }
        temp+="</td><td class='mobile:u-hidden'><a href='"+data[i].svn_url+
        "' target='_blank' rel='noreferrer noopenner' class='ts-text is-external-link'>"+data[i].svn_url+
        "</a></td><td class='mobile:u-hidden'>"+data[i].description+
        "</td></tr>";
        document.getElementById("projects").innerHTML+=temp;
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