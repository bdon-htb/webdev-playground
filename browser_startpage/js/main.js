USER = 'Brandon';

function updateClock() {
  document.getElementById('clock').innerHTML = `<h2>${getTime()}</h2>`;
}

function getTimeOfDay() {
  let timeOfDay = ['morning', 'afternoon', 'evening', 'night'];
  let time;
  let date = new Date();
  let hours = date.getHours();

  if (hours >= 0 && hours < 12) {
    time = timeOfDay[0];
  } else if (hours >= 12 && hours < 17) {
    time = timeOfDay[1]
  } else if (hours >= 17 && hours < 20) {
    time = timeOfDay[2]
  } else {
    time = timeOfDay[3]
  }

  return time;
}

function generateGreeting(user) {
  let name = user;
  let timeOfDay = getTimeOfDay();
  return `Good ${timeOfDay}, ${name}!`;
}

function getHours12() {
  let date = new Date();
  let hours = date.getHours();
  let period;

  if (hours >= 12) {
    if (hours > 12) {
        hours = hours - 12;
    }
    period = 'PM';
  } else {
    period = 'AM';
  }
  return [hours, period]
}

function padNum(num) {
  // Returns a string of num but with a 0 added to the left of a single digit number.
  num = num.toString()
  if (num < 10) {
    return '0' + num
  } else {
    return num
  }
}

function getTime() {
  date = new Date();
  let hours12 = getHours12();

  let hours = hours12[0];
  let period = hours12[1];

  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  minutes = padNum(minutes);
  seconds = padNum(seconds);
  return `${hours}:${minutes}:${seconds} ${period}`;
}

function getMonthWord() {
  // Convert numeric date to English equivalent.
  months = ['January', 'February', 'March',
    'April', 'May', 'June',
    'July', 'August', 'September',
    'October', 'November', 'December'];
  date = new Date();
  return months[date.getMonth()];
}

function getDayOfTheWeek() {
  // Convert numeric day of the week to English equivalent.
  daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
  'Thursday', 'Friday', 'Saturday'];
  date = new Date();
  return daysOfWeek[date.getDay()];
}

function getDate() {
  date = new Date();
  year = date.getFullYear();
  month = getMonthWord();
  dayOfWeek = getDayOfTheWeek();
  dayOfMonth = date.getDate();
  return `${dayOfWeek} ${dayOfMonth}, ${month} ${year}`;
}

function main() {
  document.getElementById('greeting').innerHTML = `<h1>${generateGreeting(USER)}</h1>`;
  document.getElementById('date').innerHTML = `<h3>${getDate()}</h3>`;
  updateClock();
  setInterval(updateClock, 1000);
}

main();
