let reverseString = (originalString) =>{

    let reverseString = '';
    for(let index=originalString.length; index>=0; index--){
        reverseString = reverseString + originalString.charAt(index);
    }

    return reverseString;
};

console.log('HEllo', reverseString('Amit Sharma'));

