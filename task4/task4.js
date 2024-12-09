// task4

//calculate Area circle
let redius = prompt ("what is value of circle reduis?");
 
if(redius !==null && redius.trim() !== "" && !isNaN(redius)){
    redius = parseFloat(redius);
    let circleArea = Math.PI * Math.pow(redius, 2);
    alert(`Total area of cicle ${circleArea}`)
}else{
alert("invalid value")
}
 
// calculate squreRoot

let value = prompt ("what is value of calculate squreRoot?");
 
if(value !== null && value.trim() !== "" && !isNaN(value)){
    value = parseFloat(value);
    let squreRoot = Math.sqrt(value);
    alert(`Square root of ${value} is ${squreRoot}`)
}else{
    alert("invalid value")
}

// calculate cos angle

let angle = prompt ("what is value of calculate COS Value?");
 
if(angle !== null && angle.trim() !== "" && !isNaN(angle)){
    angle = parseFloat(angle);
    let cosValue = Math.cos((angle * Math.PI) / 180);
    document.write(`<h3> Cos ${angle} is ${cosValue.toFixed(4)}</h3>`)
}else{
    document.write("invalid angle value")
}

