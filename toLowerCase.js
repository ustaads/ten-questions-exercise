// Converting toLowerCase without using toLowerCase Method.

let toLowerCase = (string) =>{

    let lowerCaseString = '' ;
    for(let index=0; index< string.length; index++ )
    { 
        
        if(string[index].charCodeAt() >= 65 && string[index].charCodeAt() <=90 ){
            let char = String.fromCharCode(string[index].charCodeAt()+32);
            lowerCaseString = lowerCaseString + char;
        }
        else{
            lowerCaseString = lowerCaseString + string[index];
        }
    }
    return lowerCaseString;

};




module.exports= {toLowerCase};