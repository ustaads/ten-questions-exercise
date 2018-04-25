let concatString = (originalString1,originalString2) =>{

    let totalLength = 0; 
    let newString='';
    if(originalString1.length > originalString2.length)
        totalLength = originalString1.length;
    else if (originalString2.length > originalString1.length)
        totalLength = originalString2.length;
    else 
        totalLength = originalString2.length;

    for(let index= 0; index < totalLength; index++){

        if(originalString1[index] != undefined )        
            newString = newString + originalString1[index];
        if(originalString2[index] != undefined )          
            newString = newString + originalString2[index];
       
        
    }
    return newString;
};

console.log(concatString('ai','mt'));
//asmh