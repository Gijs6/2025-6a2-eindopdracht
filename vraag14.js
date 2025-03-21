const people = require('./people.json');

console.log('<Vraag>');
console.log('Print per land wanneer er minstens 7 personen wonen hoeveel personen er wonen.');
console.log('Tel vrienden ook mee als personen.');
console.log('Bijvoorbeeld:\n...\nUzbekistan, aantal personen: 10\nGreece, aantal personen: 7\n...');

// schrijf jouw code hier

inhabitants = {}

let all_people = [...people];
people.forEach((p) => all_people.push(...p.friends));

all_people.forEach((p) => {
    const country = p.location.country;
  
    if (inhabitants[country]) {
        inhabitants[country]++;
    } else {
        inhabitants[country] = 1;
    }
});


// Print hier het antwoord op de vraag 
console.log('\n<Antwoord>');
console.log('bereken het antwoord!');
for (let country in inhabitants) {
    if (inhabitants[country] >= 7) {
        console.log(`${country}, aantal personen: ${inhabitants[country]}`);
    }
}
