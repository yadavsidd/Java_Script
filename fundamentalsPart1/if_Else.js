const country = "India";
const indiaPopulation = 1;
const avgPopulation = 33;

if (indiaPopulation > avgPopulation){
   console.log(`${country}'s population is ${indiaPopulation - avgPopulation} million above the average country popuation`);
}else{
    console.log(`${country}s population is ${avgPopulation - indiaPopulation} million less than average country population`);
}