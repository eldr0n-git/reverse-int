module.exports = function reverse (n) {
    let stringValue = Math.abs(n).toString();
    let newNumber = '';
    let j = 0;
  
    for (let i = stringValue.length-1; i >= 0; i--){
      newNumber = newNumber + stringValue[i].toString();
      j++;
    }
  
    return newNumber;
  }
  