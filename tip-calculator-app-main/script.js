
//validate that the bill input is a number
function validateBill() {
    var numbers = /^\d+(.\d{1,2})?$/g;
    var bill = document.getElementById("bill");
    if (!bill.value.match(numbers)) {
        document.getElementById("billError").classList.remove('hidden');
        return false;
    } else {
        document.getElementById("billError").classList.add('hidden');
        return true;
    }
}

//change selected tip button color
function changeColor(amt){
    document.getElementById(amt).classList.replace('tipAmt', 'active');
}

let percent = '';

//validate tip amt is selected
function getTip(amt){
    changeColor(amt);
    //console.log(amt);
    percent = Number((amt/100).toFixed(2));

}

function getCustom(){
    var numbers = /\d{1,2}$/;
    var amt = document.getElementById("custom").value;
    if (!amt.match(numbers)) {
        document.getElementById("customError").classList.remove('hidden');
    } else {
        document.getElementById("customError").classList.add('hidden');
        percent = Number((amt/100).toFixed(2));
        console.log(percent);
    }

}

//validate people input is a number
function validatePeeps() {
    var numbers = /^[1-9]+$/;
    var peeps = document.getElementById("people");
    if (!peeps.value.match(numbers)) {
        document.getElementById("peopleError").classList.remove('hidden');
        return false;
      } else {
        document.getElementById("peopleError").classList.add('hidden');
        return true;
    }
} 



//CALCULATE Anyone paying with a credit card should tip on their portion of the total bill; https://www.realsimple.com/work-life/money/money-etiquette/tipping-etiquette-guide
function calculate(amt) {
   // var validateBll = /^\d+(.\d{1,2})?$/g;
   // var validateCustom = /\d{1,2}$/;
    //var validatePeople = /^[1-9]+$/;
    var bill = document.getElementById("bill").value;
   // var custom = document.getElementById("custom").value;
    var people = document.getElementById("people").value;

    //bill per person
    var perPerson = (bill / people);
    // tip per person
    var tip = Math.round((perPerson * percent) * 100) / 100 ;
    //total per person
    var total =  (perPerson + tip).toFixed(2);

    document.getElementById("tipAmt").innerHTML = "$" + tip;
    document.getElementById("totalAmt").innerHTML = "$" + total;
}


function check() {
    if (validateBill() && validatePeeps() && getTip() ) {
        document.getElementById("reset").disabled = false;
        calculate();
        console.log ("True" + validateBill().value);
    } else {
        console.log("False" + validateBill().value);
    }
}
//print to screen


/*
if validateBill == true
and if 
validatePeeps == true
and if 
Tip is selected OR custom == true
then calculate





*/ 