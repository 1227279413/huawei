let nav1=document.querySelector(".nav-hear")
let div1=nav1.querySelectorAll("div")
let ol=document.querySelectorAll(".nav ol")

for(let i=0;i<div1.length;i++){
    div1[i].onclick=function () {
        for(let j=0;j<div1.length;j++){
            div1[j].id="";
            div1[j].style.boxShadow="0 0 0 0 rgba(0,0,0,0)";
            ol[j].style.display="none"
        }
        div1[i].id="nav-h1";
        ol[i].style.display="block"
        if(i==0){
            div1[i].style.boxShadow="2px -2px 2px 2px rgba(0,0,0,.3)";
        }
        if(i==1){
            div1[i].style.boxShadow="0 -3px 1px 1px rgba(0,0,0,.3)";
        }
        if(i==2){
            div1[i].style.boxShadow="-2px -2px 2px 2px rgba(0,0,0,.3)";
        }
    }
}
