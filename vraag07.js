const people = require('./people.json');

console.log('<Vraag>');
console.log('Print het totale aantal vrienden waarvan de bevriende persoon getrouwd is.');
console.log('Bijvoorbeeld: 240');

// schrijf jouw code hier


let all_friends = [];
people.forEach((p) => all_friends.push(...p.friends));

let married_friends = all_friends.filter((p) => p.married);

// Print hier het antwoord op de vraag 
console.log('\n<Antwoord>');
console.log('bereken het antwoord!');
console.log(married_friends.length);
