'use strict';


function createArray() {
    var array = ["snickers", "hundred grand", "kitkat", "skittles"];
    return array;
}

function addElementToArray(array) {
    var arr = array;
    arr.push('A Christmas Story');
    return arr;
}

function accessElementFromArray(array) {
    var array = array;
    return array[2];
}

function replaceElementInArray(array) {
    var array = array;
    array[1] = "Carter";
    return array[1];
}

function removeElementFromArray(array) {
    var array = array;
    array.splice(2, 2, 'Roast Chicken');
    return array;
}

function iterateArray(array) {
    var array = array, newArray = [];
    array.forEach(function(element) {
        newArray.push(element + 5);
    });
    return newArray;
}