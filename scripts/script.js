const url = "https://labs.bible.org/api/?passage=random&type=json&formatting=full";


document.addEventListener("DOMContentLoaded", function() {
    getVerse();
  });

const mybutton = document.getElementById('submit');

mybutton.addEventListener("click", () => {
    verseBodyElement.innerHTML ='';
    getVerse();
    console.log("Button Clicked");
});
    
const loadingElement = document.querySelector('#loading');
const verseBodyElement = document.querySelector('#verse-text');

var getVerse = function(){
    loadingElement.style.display="block";

    fetch(url)
    .then(data => data.json())
    .then(apiData => {
        loadingElement.style.display="none";
        verseBodyElement.innerHTML ='';

        const Verse = apiData[0].text;
        verseBodyElement.innerHTML = '<strong>'+
        apiData[0].bookname+
        ' ' + apiData[0].chapter +
        ':' + apiData[0].verse +
        '</strong> ' +
        apiData[0].text;
        console.log(apiData);
    })
    .catch(error => console.error(error));

};