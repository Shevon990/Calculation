//God Bless You!
const addition = document.getElementById("addition");
const subtraction = document.getElementById("subtraction");
const multiplication = document.getElementById("multiplication");
const division = document.getElementById("division");
const getAnswer =  document.getElementById("button");
const complement1 = document.getElementById("answer1");
const complement2 = document.getElementById("answer2");


let calculatedAnswer = 0;

getAnswer.onclick = function(){

    let firstNumber = document.getElementById("firstNum").value;
    let secondNumber = document.getElementById("secondNum").value;
    let inputAnswer = document.getElementById("answer").value;

    if(firstNumber===""){

        complement2.textContent = `👎 You haven't input the first number (ඔබ පළමු සංඛ්‍යාව ඇතුළත් කර නැත)`;
        return;
    }

    else if(secondNumber===""){

        complement2.textContent = `👎 You haven't input the second number (ඔබ දෙවන සංඛ්‍යාව ඇතුළත් කර නැත)`;
        return;

    }
    else if (isNaN(firstNumber) || isNaN(secondNumber)) {
        complement2.textContent = `👎 Please enter a valid number (කරුණාකර වලංගු සංඛ්‍යාවක්  ඇතුළත් කරන්න)`;
        return;
    }

    else{

        firstNumber = Number(firstNumber);
        secondNumber = Number(secondNumber);

    } 

    if(addition.checked){

        calculatedAnswer =  firstNumber + secondNumber;

    }

    else if(subtraction.checked){

        calculatedAnswer =  firstNumber - secondNumber;

    }

    else if(multiplication.checked){

        calculatedAnswer = firstNumber * secondNumber;

    }

    else if(division.checked){

        if(secondNumber==0){

            complement2.textContent = `👎 Second number can't be Zero. We can't divide a number by Zero (දෙවන සංඛ්‍යාව ශුන්‍ය විය නොහැක. අපට සංඛ්‍යාවක් ශුන්‍යයෙන් බෙදිය නොහැක)`;
            return;

        }
        else{

            calculatedAnswer = Number((firstNumber / secondNumber).toFixed(2));

        }


    }
    else{

         complement2.textContent = `👨🏻‍💻 Please select an operator (කරුණාකර ලකුණ තෝරන්න)`;
         return;
    
    }

    if(inputAnswer === ""){

        complement2.textContent = `🛑 You haven't enter the answer (ඔබ පිළිතුර ඇතුළත් කර නැත)`;
        return;

    }


    else if(isNaN(inputAnswer)){
        complement2.textContent = `🛑 Please enter a valid number (කරුණාකර වලංගු සංඛ්‍යාවක් ඇතුළත් කරන්න)`;
        return;
    }


    else{

         inputAnswer = Number(inputAnswer);

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