//hex numbers
var hex=['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
var x,y;

var questionColor='#';//question color 
var checkColor//answer
var eachHex=[];//for selection
var incorrectHex=[[],[]];


for(let i=0;i<6;i++){             //random selection
    eachHex[i]=hex[Math.floor(Math.random()*16)];
    questionColor +=eachHex[i] ; 
    incorrectHex[0][i]=hex[Math.floor(Math.random()*16)];
    incorrectHex[1][i]=hex[Math.floor(Math.random()*16)];
}
//query selectors
var questionBox=document.querySelector(".q-colorbox"); 
var checkBox=document.querySelector(".colorbox");

var colorList=[[document.querySelector("#r1"),document.querySelector("#r2"),document.querySelector("#r3")],[document.querySelector("#g1"),document.querySelector("#g2"),document.querySelector("#g3")],[document.querySelector("#b1"),document.querySelector("#b2"),document.querySelector("#b3")]];
var answerbox=document.getElementById("answer").innerText;
var coverPage=document.querySelector(".page-cover");

for(let i=0;i<3;i++){
    x=Math.floor(Math.random()*3)
    colorList[i][x].innerHTML=eachHex[i*2]+eachHex[i*2+1];
    colorList[i][(x+1)%3].innerHTML=incorrectHex[0][i*2]+incorrectHex[0][i*2+1];
    colorList[i][(x+2)%3].innerHTML=incorrectHex[1][i*2]+incorrectHex[1][i*2+1];
    switch (i){
        case 0:
            colorList[i][x].style.backgroundColor="#"+eachHex[i*2]+eachHex[i*2+1]+"0000";
            colorList[i][(x+1)%3].style.backgroundColor="#"+incorrectHex[0][i*2]+incorrectHex[0][i*2+1] +"0000";
            colorList[i][(x+2)%3].style.backgroundColor="#"+incorrectHex[1][i*2]+incorrectHex[1][i*2+1] +"0000";
            break;

        case 1:
            colorList[i][x].style.backgroundColor="#00"+eachHex[i*2]+eachHex[i*2+1]+"00";
            colorList[i][(x+1)%3].style.backgroundColor="#00"+incorrectHex[0][i*2]+incorrectHex[0][i*2+1] +"00";
            colorList[i][(x+2)%3].style.backgroundColor="#00"+incorrectHex[1][i*2]+incorrectHex[1][i*2+1] +"00";
            break;

        case 2:
            colorList[i][x].style.backgroundColor="#0000"+eachHex[i*2]+eachHex[i*2+1];
            colorList[i][(x+1)%3].style.backgroundColor="#0000"+incorrectHex[0][i*2]+incorrectHex[0][i*2+1];
            colorList[i][(x+2)%3].style.backgroundColor="#0000"+incorrectHex[1][i*2]+incorrectHex[1][i*2+1];
            break;

    }
}

questionBox.style.backgroundColor=questionColor;//set question color
var clickCount=0;

colorList[0][0].onclick =()=>getSend(0,0);
colorList[0][1].onclick =()=>getSend(0,1);
colorList[0][2].onclick =()=>getSend(0,2);
colorList[1][0].onclick =()=>getSend(1,0);
colorList[1][1].onclick =()=>getSend(1,1);
colorList[1][2].onclick =()=>getSend(1,2);
colorList[2][0].onclick =()=>getSend(2,0);
colorList[2][1].onclick =()=>getSend(2,1);
colorList[2][2].onclick =()=>getSend(2,2);


function getSend(x,y){
    var temp1=answerbox.split(" ");
    var temp2=colorList[x][y].innerText.split("");
    clickCount++;
    switch (x){
        case 0:
            temp1[1]=temp2[0];
            temp1[2]=temp2[1];
            break;
        case 1:
            temp1[3]=temp2[0];
            temp1[4]=temp2[1];
            break;
        case 2:
            temp1[5]=temp2[0];
            temp1[6]=temp2[1];
            break;
    }
    var sendValue='#';
    for(let i=1;i<7;i++){
       sendValue += " "+ temp1[i];
    }
    var colorValue='#';//answer
    for(let i=1;i<7;i++){
        colorValue += (temp1[i]=='_'?'0':temp1[i]);
     }
     

    document.getElementById("answer").innerText=sendValue;
    answerbox=sendValue;
    document.getElementById("answer").style.backgroundColor=colorValue;
    checkColor=colorValue;
    if(checkColor==questionColor){
        coverPage.style.display="block";
        document.querySelector(".click-number").innerText=clickCount;
        document.querySelector(".winner").innerText=colorValue;
        document.querySelector(".page-cover").style.backgroundColor=questionColor;
    }
    
}
