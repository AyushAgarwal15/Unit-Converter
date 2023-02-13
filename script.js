const BTN = document.getElementById("btn");
const LENGTH = document.getElementById("length-paragraph");
const VOLUME = document.getElementById("volume-paragraph");
const MASS = document.getElementById("mass-paragraph");
const INPUT = document.getElementById("input");

BTN.addEventListener("click", convert);

function convert() {
  var val = INPUT.value;
  length(val);
  volume(val);
  mass(val);
}

function length(val) {
  let feet = val * 3.281;
  let meter = val / 3.281;
  LENGTH.innerHTML = `${val} meters = ${feet.toFixed(
    3
  )} feet | ${val} feet = ${meter.toFixed(3)} meters`;
}

function volume(val) {
  let gallons = val * 0.264172;
  let liters = val / 0.264172;
  VOLUME.innerHTML = `${val} liters = ${gallons.toFixed(
    3
  )} gallons | ${val} gallons = ${liters.toFixed(3)} liters`;
}

function mass(val) {
  let kilograms = val / 2.20462;
  let pounds = val * 2.20462;
  MASS.innerHTML = `${val} kilos = ${pounds.toFixed(
    3
  )} pounds | ${val} pounds = ${kilograms.toFixed(3)} kilos`;
}
