const people = require('./people.json');

console.log('<Vraag>');
console.log('Print de voornaam, leeftijd en hobbies van alle vrienden die exact dezelfde hobbies hebben als de bevriende persoon.');
console.log('Print deze informatie alleen als zowel de vriend als de bevriende persoon ouder zijn dan 70.');
console.log('Hobbies zijn ook hetzelfde als alleen de volgorde van de hobbies anders is.');
console.log('Als beide geen hobbies hebben dan hebben zij ook dezelfde hobbies.');
console.log('Bijvoorbeeld:\n...\nMabelle(86), hobbies: ["Basketball","Football","Running","Swimming"]\n...');

// schrijf jouw code hier

for (const p of people) {
    for (const f of p.friends) {
        if (f.age > 70 && p.age > 70) {
            let setp = new Set(p.hobbies);
            let setf = new Set(f.hobbies);
            if (setp.size === setf.size && [...setp].every(value => setf.has(value))) {
                console.log(`${f.name.first}(${f.age}), hobbies: ${JSON.stringify(f.hobbies)}`)
            }
        }
    }
}

// Print hier het antwoord op de vraag 
console.log('\n<Antwoord>');
console.log('bereken het antwoord!');