// Write your solution here!


const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(name) {
    cats.push(name);
}



function destructivelyPrependCat(name) {
    cats.unshift(name);
}



function destructivelyRemoveLastCat() {
    cats.pop(name);
}



function destructivelyRemoveFirstCat() {
    cats.shift(name);
}


function appendCat(name) {
    const newArray = [...cats, name];
    return newArray;
}

function prependCat(name) {
    const newArray2 = [name, ...cats];
    return newArray2;
}

function removeLastCat() {
    const removeArr = cats.slice(0, 2);
    return removeArr;
}

function removeFirstCat() {
    const removeFirst = cats.slice(1);
    return removeFirst;
}