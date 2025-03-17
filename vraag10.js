const people = require('./people.json');

console.log('<Vraag>');
console.log('Print de gemiddelde leeftijd van alle vrienden.');
console.log('Bijvoorbeeld: 59.801292323');

// schrijf jouw code hier

let all_friends = [];
people.forEach((p) => all_friends.push(...p.friends));

let sum = 0;
let count = 0;

all_friends.forEach(p => {
    sum += p.age;
    count++;
});

// Print hier het antwoord op de vraag 
console.log('\n<Antwoord>');
console.log('bereken het antwoord!');
console.log(sum / count);