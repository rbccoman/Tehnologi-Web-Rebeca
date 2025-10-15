function frecventeRelative(text) {
    const frecvente = {};
    let totalLitere = 0;
    for (let char of text) {
        if (char === ' ') continue;
        const litera = char.toLowerCase();
        if (litera.match(/[a-z]/i)) {
            frecvente[litera] = (frecvente[litera] || 0) + 1;
            totalLitere++;
        }
    }
    const frecventeRelative = {};
    for (let litera in frecvente) {
        frecventeRelative[litera] = frecvente[litera] / totalLitere;
    }
    return frecventeRelative;
}

const text = process.argv[2] || '';
const rezultat = frecventeRelative(text);
console.log('Frec. relative ale literelor:');
console.log(rezultat);
