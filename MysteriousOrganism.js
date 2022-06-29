// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (specimenNum, dna) => {
  return  {
    specimenNum: specimenNum,
    dna: dna,
    mutate() {
      console.log('Original DNA strand was ' + dna);
  let newBase = returnRandBase(); // Generate random base
  let oldBase = dna[Math.floor(Math.random() * this.dna.length)] //Pick a random base in sequence
  let i = this.dna.indexOf(oldBase) // Find index of random base 
  while (oldBase === newBase) { // Whilst generated base is same as old base, repeat till bases are different 
  newBase = returnRandBase() } 
  dna[i] = newBase //Replace old base at site index with generated base 
  return console.log('The mutated DNA strand is ' + dna); //Return changed Dna seq (array)
},
compareDNA(pA2) {
 let array = [] //Create empty array to store bases at same location
 for (let i = 0; i < this.dna.length; i++){ //Nested loop to iterate through both DNA arrays at once
   for (let j = 0; j < pA2.dna.length; j++) {
     if (this.dna[i] === pA2.dna[i]) { //If base is the same at the same then store base in 'array'
       array.push(pA2.dna[i])
       break;
     } 
   } 
 } let similarity = ((array.length / this.dna.length) * 100).toFixed() + '%';
 return console.log(`${this.specimenNum} has ${similarity} similarity to ${pA2.specimenNum} `); //Find array length to find how many bases were same, divide by DNA array length and * 100 to get % 
},
willLikelySurvive() {
  let survivalBases = 0; //Set amount of survival bases ('C'/'G') to 0
  this.dna.forEach(base => {
    if ((base === 'C' || base === 'G')) { //Search through each base in DNA array and see if they're 'C' or 'G' - if so increment survivalBases variable
      survivalBases++;
    } else {
      survivalBases;
    } 
  }); let survival = ((survivalBases / this.dna.length) * 100).toFixed(); 
  if (survival >= 60) { //Find % of survival bases in array - if aove 60% then return true
    return true;
  } else {
    return false;
  }
    } 
  } 
};

let pAequors = [];

const create = num => {
let counter = 0; //Set counter to 0 
while (pAequors.length <= num) { //While length of array is less or equal to amount of we want to create
  let specimen = pAequorFactory(counter, mockUpStrand()); //Create a speciment using factory func
  if (specimen.willLikelySurvive()) {
    pAequors.push(specimen); // If speciemen is likely to surive add to pAequors array and return 
    counter +=1;
  }
} return pAequors;
};

console.log(create(30));

pAequors[30].mutate();
pAequors[30].compareDNA(pAequors[5]);

