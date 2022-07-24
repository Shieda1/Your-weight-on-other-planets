// https://www.omnicalculator.com/physics/weight-other-planets

const weight = document.getElementById('weight');
const btn = document.getElementById('btn');
const result1 = document.getElementById('result1');
const result2 = document.getElementById('result2');
const result3 = document.getElementById('result3');
const result4 = document.getElementById('result4');
const result5 = document.getElementById('result5');
const result6 = document.getElementById('result6');
const result7 = document.getElementById('result7');
const result8 = document.getElementById('result8');
const result9 = document.getElementById('result9');

const G = 6.6743e-11;

btn.addEventListener('click', function() {
  
  result1.textContent = `${computeOnMercury().toFixed(2)}kg`;
  result2.textContent = `${computeOnVenus().toFixed(2)}kg`;
  result3.textContent = `${computeOnMars().toFixed(2)}kg`;
  result4.textContent = `${computeOnJupiter().toFixed(2)}kg`;
  result5.textContent = `${computeOnSaturn().toFixed(2)}kg`;
  result6.textContent = `${computeOnNeptun().toFixed(2)}kg`;
  result7.textContent = `${computeOnUranus().toFixed(2)}kg`;
  result8.textContent = `${computeOnPluto().toFixed(2)}kg`;
  result9.textContent = `${computeOnTheMoon().toFixed(2)}kg`;
})

// calculation

// i divided the res on omni calculator by the weight and multiplied by those numbers

function computeOnMercury() {
  return Number(weight.value) * 0.3797;
}

function computeOnVenus() {
  return Number(weight.value) * 0.9101;
}

function computeOnMars() {
  return Number(weight.value) * 0.3797;
}

function computeOnJupiter() {
  return Number(weight.value) * 2.3405;
}

function computeOnSaturn() {
  return Number(weight.value) * 1.0594;
}

function computeOnNeptun() {
  return Number(weight.value) * 1.1898;
}

function computeOnUranus() {
  return Number(weight.value) * 0.9202;
}

function computeOnPluto() {
  return Number(weight.value) * 0.0594;
}

function computeOnTheMoon() {
  return Number(weight.value) * 0.167;
}

