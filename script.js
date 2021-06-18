let binaryEntry = document.getElementById('binary');
let convertButton = document.getElementById('convert');
let decimalOut = document.getElementById('decimal');

// Events handler

convertButton.addEventListener('click', function () {
    let binNum = binaryEntry.value;
    if(checkBinary(binNum)) {
        decimalOut.value = convert(binNum);
    } else {
        alert ('Enter a valid binary number');
    };    
});


function convert(zeroOrOne){
   var numLength = zeroOrOne.length;

   var reversed = reverseString(zeroOrOne);

   var reversedNums = reversed.split('');

   let pow = [];
   let digits = [];
   let multip = [];
   let decimalNum = 0;

   for (var i = numLength-1; i >= 0; i--){
        parseInt(reversedNums[i]);
         pow.push(Math.pow(2,[i]));
         digits.push (parseInt(reversedNums[i]));
         
       }

       for (var i = 0; i < pow.length; i++){
           multip.push(parseInt(pow[i] * digits[i]))
           decimalNum +=multip[i];
       }
       console.log(multip)
       console.log(pow);
       console.log (digits);
       console.log(decimalNum);
       return decimalNum;   
       // fazer a formula de conversão de binário para decimal
}

function checkBinary(zeroOrOne){
    var arr = [];

    for (var i = 0; i < zeroOrOne.length; i++){
        arr.push(parseInt(zeroOrOne[i]));

        if (zeroOrOne[i] == 0 || zeroOrOne[i] == 1) {
            return true;
        } else {
            return false;
        }
    }
    
        if (!isNaN(zeroOrOne)){
            return false;
        }
    }

function reverseString(string){
    var o = '';
    for (var i = string.length - 1; i >=0; i--) {
        o += string[i];
    }    
    return o
}
