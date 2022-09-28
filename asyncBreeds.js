const fs = require('fs');

const breedDetailsFromFile = function(breed) {
  console.log('breedDetailsFromFile: Calling readFile...');

  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    // ISSUE: Returning from "inner" callback function, not breedDetailsFrom File.
    if (!error) return data;
  });
  // ISSUE: Arrempting to return data out here will also not word.
  //        Currently not returning anything from here, so breedDetailsFromFile function returns undefined
};

// we try to get the return calue
const bombay = breedDetailsFromFile('Bombay');
console.log('Return Value: ', bombay); // => will NOT print out details, instead we will see undefined!