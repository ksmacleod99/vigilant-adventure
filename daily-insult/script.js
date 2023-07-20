//fetch the data
async function populate(){
    //TODO: initialize repo in Github and use file path for json for request. Local load causes CORS error. 
    const request = new Request('./quotes.json');
    const response = await fetch(request);
    const insults = await response.json();

    populateInsult(insults);
    populateCitation(insults);

    
}

//declare where the data should go on page load

function populateInsult(obj){
    const quotes = obj.quotes;
    const random = Math.floor(Math.random() * quotes.length);
    const insult = document.createElement('p');
    const citation = document.createElement('p');

    insult.textContent = random.body;
    citation.textContent = random.citation;

    HTMLFormControlsCollection.log(insult)
} 

populate();
//select random item from array
//write same to the DOM on page load

//onClick of button
//select random item from array
//write same to the DOM