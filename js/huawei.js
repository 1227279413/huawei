let hear=document.getElementById("hear");
let li=hear.getElementsByTagName("li")[0]
let hearLi=document.getElementsByClassName("hear-li")[0];
    li.onmouseenter=function () {
        hearLi.style.height="180px";
        hearLi.style.paddingTop="40px";
    }
    li.onmouseleave=function () {
        hearLi.style.height=0;
        hearLi.style.padding=0;
    }





let bannert=document.querySelector(".banner")
let ol=bannert.querySelectorAll("ol")
let jian=bannert.querySelectorAll(".jian")
let btn=bannert.querySelectorAll(".banner-dianx")

let flag=true;
let se=setInterval(move,2000)
    let now=0;
    let next=0;
    bannert.onmouseenter=function () {
        clearInterval(se)
    }
    bannert.onmouseleave=function () {
        se=setInterval(move,2000)
    }
    jian[0].onclick=function () {
        if(flag==false){
            return
        }
        move1()
        flag=false;
    }
    jian[1].onclick=function () {
        if(flag==false){
            return
        }
        move()
        flag=false;
    }
    for(let i=0;i<btn.length;i++){
        btn[i].onclick=function () {
            if(i==now){
                return;
            }
            btn[now].classList.remove("banner-diany")
            btn[i].classList.add("banner-diany")

            if(i<now){
                ol[i].style.left="-1347px"
                animate(ol[now],{left:1347})
                animate(ol[i],{left:0})
            }
            if(i>now){
                ol[i].style.left="1347px"
                animate(ol[now],{left:-1347})
                animate(ol[i],{left:0})
            }
            next=now=i;
        }
    }

function move() {
    next++;
    if(next==2){
        next=0;
    }
    for(let i=0;i<ol.length;i++){
        btn[i].classList.remove("banner-diany")
    }
    btn[next].classList.add("banner-diany")
    ol[next].style.left="1347px"
    ol[now].style.left=0;
    animate(ol[now],{left:-1347})
    animate(ol[next],{left:0},function () {
        flag=true;})
    now=next;
}
function move1() {
    next--;
    if(next<0){
        next=1;
    }
    for(let i=0;i<ol.length;i++){
        btn[i].classList.remove("banner-diany")
    }
    btn[next].classList.add("banner-diany")
    ol[next].style.left="-1347px"
    animate(ol[now],{left:1347})
    animate(ol[next],{left:0},function () {
        flag=true;
    })
    now=next;
}




