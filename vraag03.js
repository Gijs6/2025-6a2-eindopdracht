const people = require('./people.json');

console.log('<Vraag>');
console.log('Print het aantal personen waarvan "Mango" hun favoriete eten is.');
console.log('Tel vrienden niet mee als personen.');
console.log('Bijvoorbeeld: 100');

// schrijf jouw code hier

let mango_people = people.filter((p) => p.favoriteFood == "Mango");

// Print hier het antwoord op de vraag 
console.log('\n<Antwoord>');
console.log('bereken het antwoord!');
console.log(mango_people.length);
