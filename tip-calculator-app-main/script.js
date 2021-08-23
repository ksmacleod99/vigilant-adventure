//disable reset button
let reset = document.getElementById("reset");
reset.disabled = true;
reset.classList.replace('reset', 'disabled');

//set tip amount to global variable percent for calculation
let percent = '';


reset.onclick = function reset() {
    var btn = document.querySelectorAll("active");
    let reset = document.getElementById("reset");
    percent = '';

    document.getElementById("tipAmt").innerHTML = "$0.00";
    document.getElementById("totalAmt").innerHTML = "$0.00";
    btn.classList.replace('active','tipBtn');
    reset.classList.replace('reset', 'disabled');
}

//validate that the bill input is a number
function validateBill() {
    var numbers = /^\d+(.\d{1,2})?$/g;
    var bill = document.getElementById("bill");
    if (!bill.value.match(numbers)) {
        document.getElementById("billError").classList.remove('hidden');
        document.getElementById("bill").style.borderColor = "red";
        return false;
    } else {
        calculate();
        document.getElementById("billError").classList.add('hidden');
        document.getElementById("bill").style.borderColor="hsl(183, 100%, 15%)"
        return true;
    }
}

function changeColor(amt) {
    var selection = document.getElementById(amt);
    selection.classList.replace('tipBtn','active'); 
}

//Get tip amount from buttons
function getTip(amt){
    changeColor(amt);
    percent = Number((amt/100).toFixed(2)); //turn entry into a percent
    calculate(); 

    document.getElementById("customError").classList.add('hidden'); //hides error if button is selected after custom is cleared
    document.getElementById("custom").value = ""; //removes custom value, if any
    
    return true;
}

//get custom tip amount
function getCustom(){
    var numbers = /\d{1,2}$/;
    var amt = document.getElementById("custom").value;
    if (!amt.match(numbers)) {
        document.getElementById("customError").classList.remove('hidden');
    } else {
        document.getElementById("customError").classList.add('hidden');
        percent = Number((amt/100).toFixed(2));
        calculate();
        return true;
        //console.log(percent);
    }
}

//validate people input is a number
function validatePeople() {
    var numbers = /^[1-9]+$/;
    var people = document.getElementById("people");
    if (!people.value.match(numbers)) {
        document.getElementById("peopleError").classList.remove('hidden');
        document.getElementById("people").style.borderColor= "red"
        return false;
      } else {
        document.getElementById("peopleError").classList.add('hidden');
        document.getElementById("people").style.borderColor="hsl(183, 100%, 15%)"
        calculate();
        return true;
    }
} 


//CALCULATE Anyone paying with a credit card should tip on their portion of the total bill; https://www.realsimple.com/work-life/money/money-etiquette/tipping-etiquette-guide
function calculate() {
    var bill = document.getElementById("bill").value;
    var people = document.getElementById("people").value;
    let reset = document.getElementById("reset");

    if ( bill.length !== 0 && people.length !== 0 && percent.length !==0) { //if everything is filled in
        //bill per person
        var perPerson = (bill / people);
        // tip per person
        var tip = Math.round((perPerson * percent) * 100) / 100 ;
        //total per person
        var total =  (perPerson + tip).toFixed(2);

        document.getElementById("tipAmt").innerHTML = "$" + tip;
        document.getElementById("totalAmt").innerHTML = "$" + total;
        reset.classList.replace('disabled', 'reset');
        reset.disabled = false;
    } else if (bill.length === 0 || people.length === 0 || percent.length ===0) { //if bill isn't filled in
        reset.classList.replace('disabled', 'reset');
        reset.disabled = false;
    } else {
        //disable reset button
        reset.classList.replace('reset', 'disabled');
        reset.disabled = true;
    }
}
