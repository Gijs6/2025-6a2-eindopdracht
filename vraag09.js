const people = require('./people.json');

console.log('<Vraag>');
console.log('Print de gemiddelde leeftijd van alle personen.');
console.log('Tel vrienden niet mee als personen.');
console.log('Bijvoorbeeld: 62.12');

// schrijf jouw code hier

let sum = 0;
people.forEach(p => sum += p.age);

// Print hier het antwoord op de vraag 
console.log('\n<Antwoord>');
console.log('bereken het antwoord!');
console.log(sum / people.length);
