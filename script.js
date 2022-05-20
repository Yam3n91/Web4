// we save the original content of the block in a variable outside 
// any functions
let myWordUp = document.getElementById("textUpMain").innerHTML
console.log(myWordUp)

function writeTextUp() {
    // this function is gonna replace the text in the
    // Upper section of the right side of the page
    // with another text.

    const words = document.getElementById("textUpMain").innerHTML;
    if (words == myWordUp) {
        // this if statement means : if the string is the original text that we inserted
        // in HTML page, insert the new text.
        console.log(words)
        document.getElementById("textUpMain").innerHTML = "This text has been changed for the sake of learning Javascript"
    } else {
        // in else her we mean: if the String is a different text, then 
        // the text has been already changed... in this case reset the changes
        // that have been done and insert back the old text... (Wich we have 
        // saved in the variable myWordDown earlier)
        document.getElementById("textUpMain").innerHTML = myWordUp
    }
}

// we save the original content of the block in a variable outside 
// any functions
let myWordDown = document.getElementById("textDownMain").innerHTML
console.log(myWordDown)

function writeTextDown() {
    // this function is gonna replace the text in the
    // Lower section of the right side of the page
    // with another text.

    let words = document.getElementById("textDownMain").innerHTML;
    if (words == myWordDown) {
        // this if statement means : if the string is the original text that we inserted
        // in HTML page, insert the new text.
        console.log(words)
        document.getElementById("textDownMain").innerHTML = "This text has been changed for the sake of learning Javascript"
    } else {
        // in else her we mean: if the String is a different text, then 
        // the text has been already changed... in this case reset the changes
        // that have been done and insert back the old text... (Wich we have 
        // saved in the variable myWordDown earlier)
        console.log(words)
        document.getElementById("textDownMain").innerHTML = myWordDown
    }


}