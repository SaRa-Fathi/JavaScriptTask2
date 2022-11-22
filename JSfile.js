//*********************** EX 1 *************************//
var age = prompt("Please Enter Your Age : ");
console.log(age);

if (age < 0) {
    alert("You Must Enter Positive Numbers");
    console.log("You Must Enter Positive Numbers");
}

while (age > 0) {

    if (age >= 1 && age <= 10) {
        console.log("You are a Child");
    }
    if (age >= 11 && age <= 18) {
        console.log("You are a Teenager");
    }
    if (age >= 19 && age <= 50) {
        console.log("You are a Grown up");
    }
    if (age > 50) {
        console.log("You are Old");
    }

    age = prompt("Do You want to Enter another Age");

}

//**************************** EX 2 *************************//

var string = prompt("Please Enter a string : ");
console.log(string);

var arr = ['a', 'u', 'i', 'e', 'o'];
var count = 0;

for (var j = 0; j < arr.length; j++) {
    for (var i = 0; i < string.length; i++) {
        if (string[i] == arr[j]) {
            count++;
        }
    }
}
console.log("the number of vowels in " + string + " are : " + count);
alert("the number of vowels in " + string + " are : " + count);


//*****************************EX 3 ********************************//

var tim = prompt("Please Enter Your Time Now :");
console.log(tim);
var res;

if (tim > 12 && tim < 24) {
    res = tim - 12;
    console.log("Time is " + res + " PM");
}

if (tim > 0 && tim < 12) {
    console.log("Time is " + tim + " AM");
}

if (tim == 0) {
    console.log("Time is 12 AM");
}

if (tim == 12) {
    console.log("Time is 12 PM");
}

