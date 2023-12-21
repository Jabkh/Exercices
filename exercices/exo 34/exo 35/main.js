
// const departMinutes = 50
let departMinutes = 0;
let temps = 0;
let intervalle;


document.addEventListener("DOMContentLoaded", () => {
  let myInput = document.getElementById("mon-input");
  document.getElementById("valid-count").addEventListener("click", () => {
    departMinutes = +myInput.value;
    console.log(departMinutes);
  
  temps = departMinutes * 60;

  const timerElement = document.getElementById("timer");

  document.querySelector("#play-count").addEventListener("click", () => {
   
    time = setInterval(() => {

      let heures = Math.floor(temps / 3600);
      // console.log(heures);

      let minutes = parseInt(temps / 60 - heures * 60, 10);
      // console.log(minutes);
      let secondes = parseInt(temps % 60, 10);

      heures = heures < 10 ? `0${heures}` : `${heures}`;
      minutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
      secondes = secondes < 10 ? `0${secondes}` : `${secondes}`;

      timerElement.innerText = `${heures}:${minutes}:${secondes}`;
      temps = temps <= 0 ? 0 : temps - 1;
    }, 1000);
  });

  document.querySelector("#stop-count").addEventListener("click", () => {
    clearInterval(time);
    time = undefined;
    document.querySelector("#timer").textContent = `00:00:00`;
    temps = 0;
  });

});
});
