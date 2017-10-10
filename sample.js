//functions



function testPrime(n) {

    if (n == 1) return false;
    var num = 1, count = 0;
    while (num <= n) {
        if (n % num === 0) {
            count++;
        }
        num++;
    }

    if (count === 2) {
        console.log(n + " is prime number");
    } else {
        console.log(n + " is not a prime number");
    }
}

// testPrime(2);
// testPrime(3);
// testPrime(4);
// testPrime(5);
// testPrime(6);
// testPrime(7);


// let's write fibinocci number 0,1,1,2,3,5,8,13,21,34,

function fibonacci(n1, n2, n) {
    // goal is to add two numbers
    // to make a third number, and add this number to the second number and so on..
    // while this process is happening, always store the number
    // exit once the total number reaches to n

    var total = [];
    total.push(n1, n2);

    while (total.length !== n) {
        var temp = n1 + n2;
        var n1 = n2;
        var n2 = temp;
        total.push(temp);
    }
    console.log(total.join(','));
}

//fibonacci(1,2,10);






function sai() {
    console.log("sai here!");
}

function meg(sai,num) {
    setTimeout(function(){
        sai();
    },num*1000);
    console.log(num);
}


meg(sai,3);

