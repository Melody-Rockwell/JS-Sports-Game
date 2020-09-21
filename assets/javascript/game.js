let teamonebutton = document.querySelector("#teamone-shoot-button");
let teamoneshotstaken = document.querySelector("#teamone-numshots");
teamonebutton.addEventListener("click", function () {
  let newCounterValue = Number(teamoneshotstaken.innerHTML) + 1;
  teamoneshotstaken.innerHTML = newCounterValue;

  let teamonegoals = document.querySelector("#teamone-numgoals");
  // make team one goal show number when successful
  // make teamonegoal show message when successful/not successful
  // teamone goals increases on successful shots

  // if (Math.random() * 50 + 1 = 0.8) {
  //   sendMessage("not this time");}
  //  else if (Math.random() * 50 + 1 < 0.2) }
  //   sendMessage("GOAL!");
  // }
});

let teamtwobutton = document.querySelector("#teamtwo-shoot-button");
let teamtwoshotstaken = document.querySelector("#teamtwo-numshots");
teamtwobutton.addEventListener("click", function () {
  let newCounterValue = Number(teamtwoshotstaken.innerHTML) + 1;
  teamtwoshotstaken.innerHTML = newCounterValue;

  // maketwogoal show number when successful
  // make teamtwogoal show message when successful/not successful
  // teamtwogoals increases on successful shots
});

let resetbutton = document.querySelector("#reset-button");
let startover = document.querySelector("#num-resets");
resetbutton.addEventListener("click", function () {
  let newCounterValue = Number(startover.innerHTML) + 1;
  startover.innerHTML = newCounterValue;

  // make reset button clear all counters and add 1 to reset counter
});
