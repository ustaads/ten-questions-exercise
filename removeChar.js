const {toLowerCase} = require('./toLowerCase');
//remove char from the String
let removeChar = (originalString,char) =>{
    let tempString = toLowerCase(originalString);
    let tempChar = toLowerCase(char);
    let newString = '';
    for(let index=0; index< tempString.length; index++){

        if(tempString[index] === tempChar){

        }
        else{
            newString = newString + tempString[index]
        }
    }

    return newString;
};

