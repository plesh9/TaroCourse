function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector(".days");
  var hoursSpan = clock.querySelector(".hours");
  var minutesSpan = clock.querySelector(".minutes");
  var secondsSpan = clock.querySelector(".seconds");

  function updateClock() {
    var t = getTimeRemaining(endtime);
    localStorage.setItem("deadline", endtime);

    if (t.total <= 0) {
      clearInterval(timeinterval);
      var deadline = new Date(Date.parse(new Date()) + 24 * 60 * 60 * 1000);
      localStorage.setItem("deadline", deadline);
      initializeClock(id, deadline);
    }

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
    minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
    secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);

  // // Сохраняем дату и время до которого отсчитывается таймер в локальном хранилище
  // localStorage.setItem("deadline", deadline);
}
var deadline = new Date(Date.parse(new Date()) + 24 * 60 * 60 * 1000);
// Получаем дату и время до которого отсчитывается таймер из локального хранилища
var savedDeadline = localStorage.getItem("deadline");
if (savedDeadline) {
  deadline = new Date(savedDeadline);
}
initializeClock("countdown", deadline);