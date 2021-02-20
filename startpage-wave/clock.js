function getHours12(date) {
  return date.getHours() % 12;
}

function getPeriod(date){
  let hours = date.getHours();
  let period = (hours >= 12) ? 'PM' : 'AM'
  return period
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

function getTime(date) {
  let hours = getHours12(date);

  let minutes = date.getMinutes();

  minutes = padNum(minutes);
  return `${hours}:${minutes}`;
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

function updateClock() {
  let date = new Date();
  document.getElementById('time').innerHTML = getTime(date);
  document.getElementById('am-pm').innerHTML = getPeriod(date);
}

function setDate(){
  document.getElementById('date').innerHTML = getDate();
}

updateClock();
setDate();
setInterval(updateClock, 1000);
