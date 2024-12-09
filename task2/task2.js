//task2


function FindlargestWord(inputString){
    let words = inputString.split(" ");
    let largestWord = " ";

    //search for longestword
    for(let i=0; i<words.length;i++){
if(words[i].length > largestWord.length){
    largestWord = words[i];
}
    }
return largestWord;
}

function displayLargestWord(){
    let input = document.getElementById("inputString").value;
    if (input.trim()===""){
      document.getElementById("largestWord").innerText = "please enter correct sentance";
    }else{
        let largestWord = FindlargestWord(input);
        document.getElementById("largestWord").innerText = largestWord;
    }
}