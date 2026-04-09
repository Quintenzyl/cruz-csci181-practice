// ------------------------------------------------------------
// Variables
// ------------------------------------------------------------

// Driver info
const driver_name = "Leo";

const distance_miles = 100;
const mpg = 30;
const gas_price = 3.40;
const fuel_capacity = 16;

// Trip info
let total_distance;
let is_round_trip = false;

let stop_num = 0;
let miles_traveled = 0;
let total_gas_cost = 0;

let gallons;



// ------------------------------------------------------------
// Derived/Calculated Values
// ------------------------------------------------------------
const gallons_needed = calculateGallonsNeeded(total_distance, mpg);
const fuel_cost = calculateFuelCost(gallons, gas_price);

// ------------------------------------------------------------
// FunctionsS
// ------------------------------------------------------------

function calculateGallonsNeeded(total_distance, mpg) {
    return mpg / total_distance;
}
function calculateFuelCost(gallons, gas_price) {
    return gallons * gas_price;
}

// ------------------------------------------------------------
// Main Program Execution
// ------------------------------------------------------------
console.log("! Roadtrip Planner !")
console.log(`You need ${gallons_needed} gallons and $${fuel_cost}`)


if (is_round_trip = true);
    total_distance = distance_miles;


