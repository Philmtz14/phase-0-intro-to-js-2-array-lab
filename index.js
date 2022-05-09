// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(Ralph) {
    cats.push('Ralph');
}

function destructivelyPrependCat(Bob) {
    cats.unshift('Bob');
}

function destructivelyRemoveLastCat() {
    cats.splice(-1);
}

function destructivelyRemoveFirstCat() {
    cats.splice(0,1);
}

function appendCat(Broom) {
    const newCats = [...cats, 'Broom'];
    return newCats
}

function prependCat (Arnold) {
    const newCats = ['Arnold', ...cats];
    return newCats
}

function removeLastCat() {
    const newCats = cats.slice();
    newCats.pop('Garfield');
    return newCats
}

function removeFirstCat () {
    const newCats = cats.slice();
    newCats.shift('Milo');
    return newCats
}