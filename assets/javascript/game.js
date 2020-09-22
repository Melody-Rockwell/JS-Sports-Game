let teamonebutton = document.querySelector("#teamone-shoot-button");
let teamoneshotstaken = document.querySelector("#teamone-numshots");
let teamonegoals = document.querySelector("#teamone-numgoals");
teamonebutton.addEventListener("click", function () {
  let newCounterValue = Number(teamoneshotstaken.innerHTML) + 1;
  teamoneshotstaken.innerHTML = newCounterValue;
  // let shots = setInterval(shotstaken);
  // let numbshots = 0;

  // function shotstaken() {
  //   console.log(numbshots);
  //   numbshots++;
  //   if (numbshots == 10) {
  //   }
  //   clearInterval(numbshots);
  // }

  if (Math.random() < 0.4) {
    console.log("GOAL!");
    let newCounterValue = Number(teamonegoals.innerHTML) + 1;
    teamonegoals.innerHTML = newCounterValue;
  } else {
    console.log("not this time");
  }
});

let teamtwobutton = document.querySelector("#teamtwo-shoot-button");
let teamtwoshotstaken = document.querySelector("#teamtwo-numshots");

let teamtwogoals = document.querySelector("#teamtwo-numgoals");
teamtwobutton.addEventListener("click", function () {
  let newCounterValue = Number(teamtwoshotstaken.innerHTML) + 1;
  teamtwoshotstaken.innerHTML = newCounterValue;
  // let teamtwoshots = setInterval(shotstaken);
  // let numbshots = 0;

  // function shotstaken() {
  //   console.log(numbshots);
  //   numbshots++;
  //   if (numbshots == 10) {
  //   }
  //   clearInterval(numbshots);
  // }

  if (Math.random() < 0.4) {
    console.log("GOAL!");
    let newCounterValue = Number(teamtwogoals.innerHTML) + 1;
    teamtwogoals.innerHTML = newCounterValue;
  } else {
    console.log("not this time");
  }
});

let resetbutton = document.querySelector("#reset-button");
let startover = document.querySelector("#num-resets");
resetbutton.addEventListener("click", function () {
  let newCounterValue = Number(startover.innerHTML) + 1;
  startover.innerHTML = newCounterValue;

  // make reset button clear all counters and add 1 to reset counter when game over
});
