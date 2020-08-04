
var massJohn = 95; //kg
var heightJohn = 1.7; // meters

var massMark = 80;
var heightMark = 1.6

var bmiJohn = massJohn / (heightJohn * heightJohn);
var bmiMark = massMark / (heightMark * heightMark);

console.log(bmiJohn, bmiMark)

//boolean method 

var johnHigherBmi = bmiJohn > bmiMark;

console.log('Is John\'s bmi higher than Mark\'s bmi?' + johnHigherBmi)


// or  if else method 

if(bmiJohn > bmiMark){
    console.log('John has higher Bmi than Mark')
}else{
    console.log('Mark has higher bmi than John');
}