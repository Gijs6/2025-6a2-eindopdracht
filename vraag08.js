const people = require('./people.json');

console.log('<Vraag>');
console.log('Print het totale aantal vrienden waarvan de bevriende persoon niet getrouwd is.');
console.log('En de vrienden jonger zijn dan 30.');
console.log('Bijvoorbeeld: 28');

// schrijf jouw code hier


let all_friends = [];
people.forEach((p) => all_friends.push(...p.friends));

let marriedandage_friends = all_friends.filter((p) => p.married && p.age < 30);

// Print hier het antwoord op de vraag 
console.log('\n<Antwoord>');
console.log('bereken het antwoord!');
console.log(marriedandage_friends.length);
