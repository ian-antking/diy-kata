const joinNames = (namesObj) => {
    let sentence = []
    for(let i = 0; i< namesObj.length; i++){
        if(i == namesObj.length - 2){
            sentence.push(namesObj[i].name);
            sentence.push('&');
        }else if(i == namesObj.length -1){
            sentence.push(namesObj[i].name);
        }else{
            sentence.push(namesObj[i].name + ',')  
        };
    };
    return sentence.join(' ');
}

module.exports = joinNames;
