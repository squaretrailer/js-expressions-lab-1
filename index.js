//! Step 1: Define Temperature Data
const day1OfTempF = 32;
const day2OfTempC = 25;
const day3fTempF = 70;
const day4fTempC = 18;
const day5fTempF = 80;
const day6fTempC = 15;
const day7OfTempF = 72;
const day8OfTempC = 28;
const day9OfTempF = 68;
const day10OfTempC = 20;
const day11fTempF = 75;
const day12fTempC = 23;
const day13OfTempF = 82;
const day14OfTempC = 30;
const day15OfTempF = 65;
const day16OfTempC = 22;
const day17OfTempF = 77;
const day18OfTempC = 26;
const day19OfTempF = 78;
const day20OfTempC = 24;
const day21OfTempF = 73;
const day22OfTempC = 21;
const day23OfTempF = 79;
const day24OfTempC = 27;
const day25OfTempF = 71;
const day26OfTempC = 19;
const day27OfTempF = 74;
const day28OfTempC = 17;
const day29OfTempF = 76;
const day30OfTempC = 29;

//! Step 2: Calculate Totals
// Convert Celsius readings into Fahrenheit and add them
let tot_temperature_in_fahrenheit =
  day1OfTempF + day3fTempF + day5fTempF + day7OfTempF + day9OfTempF +
  day11fTempF + day13OfTempF + day15OfTempF + day17OfTempF + day19OfTempF +
  day21OfTempF + day23OfTempF + day25OfTempF + day27OfTempF + day29OfTempF +
  // converted Celsius → Fahrenheit
  ((day2OfTempC * 9/5) + 32) + ((day4fTempC * 9/5) + 32) + ((day6fTempC * 9/5) + 32) +
  ((day8OfTempC * 9/5) + 32) + ((day10OfTempC * 9/5) + 32) + ((day12fTempC * 9/5) + 32) +
  ((day14OfTempC * 9/5) + 32) + ((day16OfTempC * 9/5) + 32) + ((day18OfTempC * 9/5) + 32) +
  ((day20OfTempC * 9/5) + 32) + ((day22OfTempC * 9/5) + 32) + ((day24OfTempC * 9/5) + 32) +
  ((day26OfTempC * 9/5) + 32) + ((day28OfTempC * 9/5) + 32) + ((day30OfTempC * 9/5) + 32);

let tot_temperature_in_celsius =
  day2OfTempC + day4fTempC + day6fTempC + day8OfTempC + day10OfTempC +
  day12fTempC + day14OfTempC + day16OfTempC + day18OfTempC + day20OfTempC +
  day22OfTempC + day24OfTempC + day26OfTempC + day28OfTempC + day30OfTempC +
  // converted Fahrenheit → Celsius
  ((day1OfTempF - 32) * 5/9) + ((day3fTempF - 32) * 5/9) + ((day5fTempF - 32) * 5/9) +
  ((day7OfTempF - 32) * 5/9) + ((day9OfTempF - 32) * 5/9) + ((day11fTempF - 32) * 5/9) +
  ((day13OfTempF - 32) * 5/9) + ((day15OfTempF - 32) * 5/9) + ((day17OfTempF - 32) * 5/9) +
  ((day19OfTempF - 32) * 5/9) + ((day21OfTempF - 32) * 5/9) + ((day23OfTempF - 32) * 5/9) +
  ((day25OfTempF - 32) * 5/9) + ((day27OfTempF - 32) * 5/9) + ((day29OfTempF - 32) * 5/9);
//! Step 3: Convert Totals BEFORE Averages
let convertedTotFtoC = (tot_temperature_in_fahrenheit - (32 * 15)) * 5 / 9;
let convertedTotCtoF = (tot_temperature_in_celsius * 9 / 5) + (32 * 15);

console.log("Total Fahrenheit converted to Celsius:", convertedTotFtoC);
console.log("Total Celsius converted to Fahrenheit:", convertedTotCtoF);

//! Step 4: Calculate Averages (after conversion)
let avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / 30;
let avg_temperature_in_celsius = tot_temperature_in_celsius / 30;
console.log("Average Fahrenheit:", avg_temperature_in_fahrenheit);
console.log("Average Celsius:", avg_temperature_in_celsius);

//! Step 5: Export variables for tests
module.exports = {
  tot_temperature_in_fahrenheit,
  tot_temperature_in_celsius,
  avg_temperature_in_fahrenheit,
  avg_temperature_in_celsius
};