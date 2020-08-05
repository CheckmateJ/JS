
// CHALLENGE 1

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


// CHALLENGE 2

var johnScores = [819,120,103];
var ScoresForJohn = 0;


for (i = 0; i < johnScores.length; i++){
    ScoresForJohn += johnScores[i]
}

var averageScoresForJohn = ScoresForJohn / 3
console.log('John average scores = ' + averageScoresForJohn);

var markScores = [116,94,123];
var ScoresForMark = 0;


for (i = 0; i < markScores.length; i++){
    ScoresForMark += markScores[i]
}

var averageScoresForMark = ScoresForMark / 3
console.log('Mark average scores = ' + averageScoresForMark)

if(averageScoresForMark > averageScoresForJohn){
    console.log('Mark\'s team win ')
}else{
    console.log('John\'s teams win')
}