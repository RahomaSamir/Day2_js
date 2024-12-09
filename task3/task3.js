// task3
let arr = [];

function addvalue(){
    const input = document.getElementById("arrayvalue");
    const value = parseFloat(input.value);

if (!isNaN(value) && arr.length<5){
    arr.push(value);
    input.value = "";
    document.getElementById("entervalues").innerText=arr.join(", ");
    
    if(arr.length === 5){
        sortAndDisplay();
    }
}else if(arr.length>=5){
    alert("already add 5 number");
}else{
    alert("please enter a number");
}
}

function sortAndDisplay(){
    const ascending = [...arr].sort((a,b)=>a-b);
    const descending = [...arr].sort((a,b)=>b-a);


document.getElementById("ascending").innerText=ascending.join(", ");
document.getElementById("descending").innerText=descending.join(", ");


}
