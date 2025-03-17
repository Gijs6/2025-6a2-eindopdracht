const people = require('./people.json');

console.log('<Vraag>');
console.log('Print de voornaam en leeftijd van alle vrienden die minstens 103 oud zijn.');
console.log('Bijvoorbeeld:\n...\nKiley, leeftijd: 103\nYolanda, leeftijd: 103\n...');

// schrijf jouw code hier

let all_people = [];
people.forEach((p) => all_people.push(...p.friends));

let age_people = all_people.filter((p) => p.age >= 103);


// Print hier het antwoord op de vraag 
console.log('\n<Antwoord>');
console.log('bereken het antwoord!');
age_people.forEach((p) => console.log(p.name.first + ", leeftijd: " + p.age));
