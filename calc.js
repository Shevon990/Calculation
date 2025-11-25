

const addition = document.getElementById("addition");
const subtraction = document.getElementById("subtraction");
const multiplication = document.getElementById("multiplication");
const division = document.getElementById("division");
const getAnswer =  document.getElementById("button");
const complement1 = document.getElementById("answer1");
const complement2 = document.getElementById("answer2");


let calculatedAnswer = 0;

getAnswer.onclick = function(){

    const firstNumber = Number(document.getElementById("firstNum").value);
    const secondNumber = Number(document.getElementById("secondNum").value);
    const inputAnswer = Number(document.getElementById("answer").value);

    if(addition.checked){

        calculatedAnswer =  firstNumber + secondNumber;
        console.log(calculatedAnswer);

    }

    if(subtraction.checked){

        calculatedAnswer =  firstNumber - secondNumber;

    }

    if(multiplication.checked){

        calculatedAnswer = firstNumber * secondNumber;

    }

    if(division.checked){

        calculatedAnswer = Number((firstNumber / secondNumber).toFixed(2));


    }
    if(calculatedAnswer===inputAnswer){
        complement1.textContent = `✅ Excellent! Correct Answer is ${calculatedAnswer} (විශිෂ්ටයි! නිවැරදි පිළිතුර ${calculatedAnswer} යි )`
        complement2.textContent = "";


    }

    else{
        complement2.textContent = `❌ Nice Try! Correct Answer is ${calculatedAnswer} (හොඳ උත්සාහයක්! නිවැරදි පිළිතුර ${calculatedAnswer} යි )`
        complement1.textContent = "";


    }
}