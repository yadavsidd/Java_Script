const numNeighbour = Number(prompt('How many neighbour countries does your contry have?'));

if (numNeighbour === 1){
    console.log(`Only one border!`);
} else if (numNeighbour === 2){
    console.log(`Only two border!`);
} else{
    console.log(`NO BORDER!`);
}
