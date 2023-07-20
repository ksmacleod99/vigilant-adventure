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
        console.error("json data is not an array and does not contain an array"); //then throw an error; it's an object, but still
        return null; //and return null
    } 
    const quotes = insults.quotes; //declare insults.quotes as my data source
    const random = Math.floor(Math.random() * quotes.length); //get a random quote
    //return quotes[random]; //and return the random quote when the function is called
    var body = JSON.stringify(quotes[random].body);
    var citation = JSON.stringify(quotes[random].citation);

    const placeholder = document.getElementById("placeholder");
    const quoteText = document.createElement("p");
    quoteText.textContent = body;
    placeholder.appendChild(quoteText);

    const citeAddy = document.getElementById("citation");  //"citeAddy" for "citation address" since "citation" has already been declared
    const citeText = document.createElement("p");
    citeText.textContent = citation;
    citeAddy.appendChild(citeText);
}

loadData();
/*const randomQuote = getInsults(); //declare randomQuote and initialize it with the output of getInsults
console.log(randomQuote); */ //console log whatever the getInsults fucntion returns


//TODOs:
//onClick of "another" button
//select new random item from array
//write same to the DOM