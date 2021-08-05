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

//validate tip amt is selected
function getTip(amt){
    return amt;
    //TO DO: how to tell user that they need to pick a tip amount if not using custom amt? 
    //TO DO: move `custom` validation here
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
function calculate() {
    var bill = document.getElementById("bill").value;
    var perCent = getTip();
    var people = document.getElementById("people").value;

    //bill per person
    var perPerson = (bill / people);
        console.log("Bill per person is " + perPerson)
    // tip
    var tip = (perPerson * perCent);
        console.log("Tip per person is " + tip)
    //total
    var total = ("Total per person is " + perPerson + tip);
}

//print to screen