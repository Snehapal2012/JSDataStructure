/**Write a Program to generate a birth month of 50 individuals
between the year 92 & 93. Find all the individuals having birthdays
in the same month. Store it to finally print. */
let personCount = 1;
var map = new Map();

while (personCount != 51) {
    let month = Math.floor(Math.random() * 12) + 1;
    let array = new Array();
    if (map.has(month))
        array = map.get(month);

    array.push(personCount);
    map.set(month, array);
    personCount++;
}

console.log("\nPeople with same birthday month");
for (let [key, value] of map.entries()) {
    console.log("Month : " + key + "\tPeople : [" + value + "]");
} 