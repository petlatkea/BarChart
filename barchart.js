"use strict";

window.addEventListener("load", init);

const model = [8,12,32,4,13,24,23,22,1,0,30,7,3,6,3,19,24,29,14,16,3,1,9,8,30,12,0,30,7,3,6,3,19,24,29,14,4,1,18,1];

function init() {
  console.log("init");
  loop();
}

function loop() {
  modifyModel();
  displayData();
  setTimeout(loop, 1000);
}

function getNumberOfCustomers() {
  // FAKE: gives a completely random number
  return Math.floor(Math.random() * 32);
}

function displayData() {
  for (let i = 0; i < model.length; i++) {
    const size = model[i];
    const bar = document.querySelectorAll(".bar")[i];

    // set height of bar from size
    bar.style.height = size + "px";
  }
}

function modifyModel() {
  // add new value to array
  model.push(getNumberOfCustomers());
  // remove first value of array
  model.shift();
}