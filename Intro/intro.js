
//imports
var math = require ("./myMathLib");

console.log("Hello from NodeJS");

function helloMe(name){
    console.log("Hello & Welcome " + name);
}

function printSomeEvens(howMany){
    var shouldForContinue = true;
    var printed = 0;
    for (var i=0; printed < howMany; i++){

        if(printed < howMany){
            if(math.isItEven(i)){
                console.log(i);
                printed += 1;
            }
        }

        
    }
}




function init(){

    helloMe("Mykul"); // Hello & Welcom Sergio

   
    var res = math.lowerNumber(9,10);
    console.log(res); //9

    var res2 = math.sum(21,21);
    console.log(res2);

    var res3 = math.divide(10, 2); //5
    var res4 = math.divide(10, 0); //0
    var res5 = math.divide(0, 40); //0

    console.log(res3);
    console.log(res4);
    console.log(res5);

    // usage of lib
    console.log(math.version());

    var nums = [1912, 289, 12398,2340970,123409,0987123];
    var low = math.lowerInArray(nums);
    console.log(low);

    console.log(math.isItEven(42));
    console.log(math.isItEven(3));
    console.log(math.isItEven(93328));

    printSomeEvens(4800000);

}







init();