const people = require('./people.json');

console.log('<Vraag>');
console.log('Print per land wanneer er meer dan 7 personen wonen hoeveel personen welke hobby beoefenen.');
console.log('Tel vrienden ook mee als personen.');
console.log('Bijvoorbeeld:\n...\nUzbekistan, hobbies: {"Basketball":6,"Swimming":6,"Running":8,"Football":9}\n...');

// schrijf jouw code hier

inhabitants = {}
hobbies = {}

let all_people = [...people];
people.forEach((p) => all_people.push(...p.friends));

all_people.forEach((p) => {
    const country = p.location.country;
  
    if (inhabitants[country]) {
        inhabitants[country]++;
    } else {
        inhabitants[country] = 1;
    }

    let person_hobbies = p.hobbies;
    person_hobbies.forEach((h) => {
        if (!hobbies[country]) {
            hobbies[country] = {}
        }
        if (hobbies[country][h]) {
            hobbies[country][h]++;
        } else {
            hobbies[country][h] = 1;
        }
    });
});


// Print hier het antwoord op de vraag 
console.log('\n<Antwoord>');
console.log('bereken het antwoord!');
for (let country in inhabitants) {
    if (inhabitants[country] >= 7) {
        console.log(`${country}, hobbies: ${JSON.stringify(hobbies[country])}`);
    }
}
