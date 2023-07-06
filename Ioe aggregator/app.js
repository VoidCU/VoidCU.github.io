Marks=[[0,0,0,0,0,0,0,0],
[675,700,700,750,875,750,750,650],
[725,650,875,900,875,825,825,750],
[775,750,700,775,775,825,775,675],
[725,650,875,750,800,725,825,850],
[675,700,775,750,750,725,625,575],
[675,700,675,750,750,675,825,625],
[0,0,0,0,0,0,0,0],
[725,650,800,800,900,775,750,800],
[625,750,700,700,775,800,800,675],
[0,0,0,0,0,0,0,0],
[750,650,700,700,700,675,700,650]];


function facultyChange(){
    faculty=document.getElementById("faculty").value;
    for(i=1;i<=8;i++){
        document.getElementById("fm"+i).innerHTML=Marks[faculty][i-1];
    }
    for(i=1;i<=8;i++){
        document.getElementById("sem"+i).value="";
    }
    for(i=1;i<=8;i++){
        document.getElementById("per"+i).innerHTML="0%";
    }
    for(i=1;i<=8;i++){
        document.getElementById("ag"+i).innerHTML="0%";
    }
    document.getElementById("totalPercentage").innerHTML="0.00%";
}

function calculate(sem){
    totalmarks=document.getElementById("fm"+sem).innerHTML;
    percentage=document.getElementById("per"+sem);
    obtainedmarks=document.getElementById("sem"+sem).value;
    aggregate=document.getElementById("ag"+sem);
    percentage.innerHTML=(obtainedmarks/totalmarks * 100).toFixed(2) +"%";
    if(sem<=4){
        aggregate.innerHTML=(obtainedmarks/totalmarks * 10).toFixed(2) +"%";
    }else{
        aggregate.innerHTML=(obtainedmarks/totalmarks * 15).toFixed(2) +"%";
    }

    totalPercentage=0;
    for(i=1;i<=8;i++){
        totalPercentage+=parseFloat(document.getElementById("ag"+i).innerHTML);
    }
    document.getElementById("totalPercentage").innerHTML=totalPercentage.toFixed(2)+"%";
}