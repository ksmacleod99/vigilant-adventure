//declare the data so it is available globally
let insults;

//fetch the data
function loadData(){
    fetch("./quotes.json")
    .then((response) => response.json())
    .then((data) => {
        insults = data; //populate the insults variable with the json data
        getInsult();
    })
    .catch((error)=> {
        console.error("Error fetching JSON:", error)
    });
}

function getInsult(){ //function that selects random item from the "quotes" array in the JSON
   if (!insults || !insults.quotes){ //if we cannot find "insults" or "insults.quotes", 
        console.error("JSON data is not an array and does not contain an array"); //then throw an error; it's an object, but still
        return null; //and return null
    } 
    const quotes = insults.quotes; //declare insults.quotes as my data source
    const random = Math.floor(Math.random() * quotes.length); //get a random quote
    var body = JSON.stringify(quotes[random].body).replace(/['"]+/g, ''); //make the body a string and repace the double quotes with nothing
    var citation = JSON.stringify(quotes[random].citation).replace(/['"]+/g, ''); //make the  citation a string and repace the double quotes with nothing

    const placeholder = document.getElementById("placeholder"); //slide it into the element with id "placeholder"
    placeholder.innerHTML = body;

    const citeAddy = document.getElementById("citation");  //"citeAddy" for "citation address" since "citation" has already been declared
    citeAddy.innerHTML = citation;
}

loadData();

// Begin Functions for date
let today = new Date(); //new date object
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }; //format options

const now = today.toLocaleDateString('en-US', options); //I just want the date, please.

const date = document.getElementById("today");
date.innerHTML = now;