function solve() {
    let t=document.getElementById("temp").value;
    if(isNaN(t)){
    alert(":( Sorry ,Temperature should be a number");
    }
    else{
    let temp=parseInt(t);
    let ind=document.getElementById("ind").value;
    let out=document.getElementById("out").value;
    let x=0;
    if(ind == out)  x=temp;    
    else if(ind=='K'){
        if(out=='F')  x=((temp-273.15)*9)/5 +32;
        else x=temp-273.15;
    }
    else if(ind=='C'){
        if(out=='F') x=((temp)*9)/5 +32; 
        else x=temp+273.15;
    }
    else if(ind=='F'){
        if(out=='C')  x=((temp-32)*5)/9;
        else  x=((temp-32)*5)/9+273.15;
    }
    let y="RESULT:"
    document.getElementById("ans").innerHTML =y+" "+x;
    }
    
}