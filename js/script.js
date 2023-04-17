const url = "https://labs.bible.org/api/?passage=random&type=json&formatting=full";


document.addEventListener("DOMContentLoaded", function() {
    getVerse();
  });

const mybutton = document.getElementById('submit');

mybutton.addEventListener("click", () => {
    getVerse();
    console.log("Button Clicked");
});
    
var getVerse = function(){
    
    fetch(url)
    .then(data => data.json())
    .then(apiData => {
        const Verse = apiData[0].text;
        document.getElementById('verse-text').innerHTML = '<strong>'+
        apiData[0].bookname+
        ' ' + apiData[0].chapter +
        ':' + apiData[0].verse +
        '</strong> ' +
        apiData[0].text;
        console.log(apiData);
    })
    .catch(error => console.error(error));

};