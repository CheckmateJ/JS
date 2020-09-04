// // // var Person = function(name, year, job) {
// // //     this.name = name; // tworzy nowe pole name i przypisuje wartosc z parametru name 
// // //     this.year = year;
// // //     this.job = job;
// // // }

// const { random } = require("core-js/fn/number");

// const { random } = require("core-js/fn/number");


// // // Person.prototype.calculateAge = function() {
// // //     console.log(2020 - this.year);
// // // };


// // // Person.prototype.lastName = 'Smith';
// // // var john = new Person('John', 1993, 'teacher');
// // // john.calculateAge();


// // // console.log(john.lastName);

// // var personProto = {
// //     calculateAge: function() {
// //         console.log(2020 - this.yearOfBirth);
// //     }
// // };

// // var john = Object.create(personProto);
// // john.name = 'John';
// // john.yearOfBirth = 1993;
// // john.calculateAge();


// // var mark = Object.create(personProto, {
// //     name: { value: 'Mark' },
// //     yearOfBirth: { value: 1990 }
// // });


// var years = [1993, 1992, 1989, 1990];

// function arrayCalc(arr, fn) {
//     var arrResult = [];
//     for (var i = 0; i < arr.length; i++) {
//         arrResult.push(fn(arr[i]));
//     }
//     return arrResult;
// }

// function calculate(en) {
//     return 2020 - en
// };

// console.log(arrayCalc(years, calculate));


// function interviewQuestion(job) {
//     if (job === 'designer') {
//         return function(name) {
//             console.log(name + 'can you please');
//         }
//     } else {
//         return function(name) {
//             console.log('Hello' + name) 
//         }
//     }
// }


// // var johnInterview = interviewQuestion('designer')
// // johnInterview('John');
// interviewQuestion('designer')('Mark')


// challenge 7 

var Question = function(question) {
    this.question = question;
}

var Questions = new Question(['Who are you', 'What are you doing', 'Where do you live']);



var randomNumberOfQuestion = Math.floor(Math.random() * 3);
console.log(Questions.question[randomNumberOfQuestion]);

function answer() {
    if (Questions.question[randomNumberOfQuestion] === 'Who are you') {
        console.log('1: Michal');
        console.log('2: John');
        var promptWindow = prompt(Questions.question[randomNumberOfQuestion], 'enter 0 or 1');
        if (promptWindow === '0') {
            console.log('correct answer')
        } else {
            console.log('wrong answer')
        }

    } else if (Questions.question[randomNumberOfQuestion] === 'What are you doing') {
        console.log('1: Programmer');
        console.log('2: Designer');
        var promptWindow = prompt(Questions.question[randomNumberOfQuestion], 'enter 0 or 1');
        if (promptWindow === '0') {
            console.log('correct answer')
        } else {
            console.log('wrong answer')
        }
    } else if (Questions.question[randomNumberOfQuestion] === 'Where do you live') {
        console.log('1: Katowice');
        console.log('2: Tychy');
        var promptWindow = prompt(Questions.question[randomNumberOfQuestion], 'enter 0 or 1');
        if (promptWindow === '0') {
            console.log('correct answer')
        } else {
            console.log('wrong answer')
        }

    }

}
answer();