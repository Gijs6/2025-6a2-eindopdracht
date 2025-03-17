const people = require('./people.json');

console.log('<Vraag>');
console.log('Print het aantal personen dat niet in "Bulgaria" is en ook niet in "Ecuador" is.');
console.log('Tel vrienden niet mee als personen.');
console.log('Bijvoorbeeld: 290');

// schrijf jouw code hier


let place_people = people.filter((p) => p.location.country != "Bulgaria" && p.location.country != "Ecuador");

// Print hier het antwoord op de vraag 
console.log('\n<Antwoord>');
console.log('bereken het antwoord!');
console.log(place_people.length);
