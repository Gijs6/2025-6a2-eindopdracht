const people = require('./people.json');

console.log('<Vraag>');
console.log('Print het aantal personen dat is getrouwd.');
console.log('Tel vrienden niet mee als personen.');
console.log('Bijvoorbeeld: 150');

// schrijf jouw code hier

let married_people = people.filter((p) => p.married);

// Print hier het antwoord op de vraag 
console.log('\n<Antwoord>');
console.log('bereken het antwoord!');
console.log(married_people.length)
