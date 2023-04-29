function FirstReverse(str) { 
    let arr = str.split("");
  
    arr.reverse();
  
    str = arr.join("");
    // code goes here  
    return str; 
  
  }
     
  // keep this function call here 
  console.log(FirstReverse(readline()));