const people = require('./people.json');

console.log('<Vraag>');
console.log('Print het aantal personen dat "Football" als hobby heeft en "Swimming" niet als hobby heeft.');
console.log('Tel vrienden niet mee als personen.');
console.log('Bijvoorbeeld: 63');

// schrijf jouw code hier

hobby_people = people.filter((p) => p.hobbies.includes("Football") && !p.hobbies.includes("Swimming"));

// Print hier het antwoord op de vraag 
console.log('\n<Antwoord>');
console.log('bereken het antwoord!');
console.log(hobby_people.length);
