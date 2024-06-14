const myCountry = 'India';
const indiaPopulation = 150;
const indiaLanguage = 'hindi';
const hasIsland = true;
 
const prefPopulation = 50;
const prefLanguage = 'english';
const prefIsland = false;

if (indiaPopulation<prefPopulation && prefIsland==hasIsland && prefLanguage==indiaLanguage ){
    console.log(`You should live in ${myCountry}`);
}else{
    console.log(`${myCountry} does not meet your criteria :(`);
}