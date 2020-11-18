function calculate(){
    var billamount=document.getElementById("billamount").value;
    var tippercent=document.getElementById("tip_percentage").value;
    var count=document.getElementById("count").value;

    if(count===""||count<=1){
        count=1;
    }

    if(billamount===""||tippercent<=0||billamount<1){
        alert("Please check the values");
        return;
    }
    
    else{
        var tip= (tippercent/100) * billamount;
        var tipeach = tip/count;
        var toteach = (billamount/count)+tipeach;
        document.getElementById("tipeach").innerHTML=tipeach;
        document.getElementById("toteach").innerHTML=toteach;
    }
}

document.getElementById('calculate').addEventListener('click', calculate);
