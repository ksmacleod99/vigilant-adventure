//declare the data so it is available globally
let insults;

//fetch the data
function loadData(){
    fetch("./quotes.json")
    .then((response) => response.json())
    .then((data) => {
        insults = data;
        getInsults();
    })
    .catch((error)=> {
        console.error("Error fetching JSON:", error)
    });
}

function getInsults(){ //select random item from the "quotes" array in the JSON
    if (!insults || !insults.quotes){
        console.error("json data is not an array and does not contain an array"); //it's an object, but still
        return null;
    }
    const quotes = insults.quotes;
    const random = Math.floor(Math.random() * quotes.length);
    return quotes[random];

    //TODO:
    //write same to the DOM on page load
    //V2: seperate "body" and "citation" in each object

}

loadData();

const randomQuote = getInsults();
console.log(randomQuote);


//TODOs:
//onClick of "another" button
//select new random item from array
//write same to the DOM