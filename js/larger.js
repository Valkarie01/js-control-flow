let num1 = 20
let num2 = 20.000001

if (num1 > num2) {
    console.log("The larger number of " + num1 + " and " + num2 + " is " + num1 + ".")
} else if (num1 < num2) {
    console.log("The larger number of " + num1 + " and " + num2 + " is " + num2 + ".")
} else {
    console.log(num1 + " and " + num2 + " are equally large numbers.")
}