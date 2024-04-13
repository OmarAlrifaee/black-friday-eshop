const daysH3 = document.querySelector("[data-time='days'] h3");
const hoursH3 = document.querySelector("[data-time='hours'] h3");
const minutesH3 = document.querySelector("[data-time='minutes'] h3 ");
const secondsH3 = document.querySelector("[data-time='seconds'] h3");

let countDownDate = new Date("1/1/2025");

let counter = setInterval(() => {
  // get time now
  let dateNow = new Date().getTime();
  // find the defrence between now and the wanted date
  let dateDiff = countDownDate - dateNow;
  // get time units
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  // set those in the html elements
  daysH3.innerHTML = days < 10 ? `0${days}` : days;
  hoursH3.innerHTML = hours < 10 ? `0${hours}` : hours;
  minutesH3.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  secondsH3.innerHTML = seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff <= 0) {
    clearInterval(counter);
    document.querySelector(".landing .alert").classList.remove("d-none");
  }
}, 1000);

// close the alert when the offers are gone
function closeAlert() {
  document.querySelector(".landing .alert").remove();
}
