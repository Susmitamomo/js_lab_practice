// Part 1: Math Problems


// Initial Numbers
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check if Sum is 50
const isSum50 = (n1 + n2 + n3 + n4) == 50;
console.log(`Check if sum equals 50: ${isSum50}`);

// Check for Two Odd Numbers
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
console.log(`Check for at least two odd numbers: ${isTwoOdd}`);

// Check for Numbers Under 25
const isUnder25 = n1 <= 25 && n2 <= 25 && n3 <= 25 && n4 <= 25;
console.log(`Check if all numbers are under 25: ${isUnder25}`);

// Check for Unique Numbers
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
console.log(`Check if all numbers are unique: ${isUnique}`);

// Check for Divisibility by 5
const allDivisibleBy5 = n1 % 5 === 0 && n2 % 5 === 0 && n3 % 5 === 0 && n4 % 5 === 0;
console.log(`Check if all numbers are divisible by 5: ${allDivisibleBy5}`);

// Check if First Number is Larger than the Last
const firstLargerThanLast = n1 > n4;
console.log(`Check if the first number is larger than the last: ${firstLargerThanLast}`);

// Arithmetic Chain
const arithmeticChainResult = ((n2 - n1) * n3) % n4;
console.log(`Arithmetic chain result: ${arithmeticChainResult}`);

// Rename Variable and Adjust Calculation
const isUnder25New = !isUnder25;
console.log(`Check if any number is larger than 25: ${isUnder25New}`);


// Part 2: Practical Math

// Constants
const totalDistance = 1500;
const fuelBudget = 175;
const costPerGallon = 3;

//Speeds and Efficiencies
const speeds = [55, 60, 75];
const efficiencies = [30, 28, 23];

// Define Calculation Functions
function calculateFuel(speed, efficiency) {
    return totalDistance / efficiency;
}

function calculateCost(fuelNeeded) {
    return fuelNeeded * costPerGallon;
}

function calculateTime(speed) {
    return totalDistance / speed;
}

// Loop Through Speeds
for (let i = 0; i < speeds.length; i++) {
    const speed = speeds[i];
    const efficiency = efficiencies[i];

    const fuelNeeded = calculateFuel(speed, efficiency);
    const cost = calculateCost(fuelNeeded);
    const time = calculateTime(speed);

    console.log(`At ${speed} mph:
    Fuel needed: ${fuelNeeded.toFixed(2)} gallons
    Cost: $${cost.toFixed(2)}
    Time: ${time.toFixed(2)} hours`);

    if (cost <= fuelBudget) {
        console.log(`Budget is enough to cover the fuel expense at ${speed} mph.`);
    } else {
        console.log(`Budget is not enough to cover the fuel expense at ${speed} mph.`);
    }
}

