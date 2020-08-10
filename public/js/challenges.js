
// ######################## CHALLENGE 1 ########################

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

// ######################## CHALLENGE 2 ########################
 

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


// ######################## CHALLENGE 3 ########################


function Calculate(bill)
{
    var tip = 0; 

    if (bill < 50)
    {
        tip = 0.2;
    }
    else if (bill >=50 && bill <=200)
    {
        tip = 0.15;
    }
    else
    {
        tip = 0.1;
    }

    return bill * tip;
}

// console.log(Calculate(30));
// console.log(Calculate(100));

var bills = [30, 100,300]
var tips = [console.log(Calculate(bills[0])),
            console.log(Calculate(bills[1])),
            console.log(Calculate(bills[2]))];


var tips = [];
for(var i =0; i<bills.length; i++)
{
    tips = [Calculate(bills[i]),];
    for(var j=0; j<tips.length; j++) 
    {
        console.log(tips[j]);
    }
    
}
