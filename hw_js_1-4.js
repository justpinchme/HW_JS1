const checkAge = function (age) {
    if (age = Number (age)) {
    if (age < 18) {
        console.log("You don't have access cause your age is " + age + ". It's less than 18")
    } else if (age >= 18 && age < 60) {
        console.log("Welcome")
    } else if (age > 60) {
        console.log("Keep calm and watch Culture channel")
    } else {
        console.log('Technical work')
    }
}   
    else {
        console.log ('Error')
    }
}

let agePrompt = prompt('Enter your age');
checkAge(agePrompt);