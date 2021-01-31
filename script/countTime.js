'use strict';

let age = document.querySelector('.age');
age.innerHTML = countTimePeriod( new Date(1986, 11, 31), new Date(), 'year' );

let experience = document.querySelector('.experience');
experience.innerHTML = countTimePeriod( new Date(2009, 6, 1), new Date(), 'month' );


function howMany(number) {
  number = Math.floor(number);

  if ((number % 10) >= 5 || ((number % 10) === 0) || ((number % 100) >= 11 && (number % 100) <= 14)) {
    return 'many';
  } else if ((number % 10) <= 4 && (number % 10) >= 2) {
    return 'few';
  } else {
    return 'one';
  }
}

function daysCurrentMonth(year, month) {
  if (year % 4 == 0 && month == 1) {
    return 29;
  } else if (month == 1) {
    return 28;
  } else if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
    return 31;
  } else {
    return 30;
  }
}

function countTimePeriod(firstDate, secondDate = new Date(), accuracy = 'day') {
  let stringTimePeriod = '';
  let yearAge;
  let monthAge;
  let dayAge;
  let stringYear = '';
  let stringMonth = '';
  let stringDay = '';

  yearAge = secondDate.getFullYear() - firstDate.getFullYear();

  if (secondDate.getMonth() >= firstDate.getMonth()) {
    monthAge = secondDate.getMonth() - firstDate.getMonth();
  } else {
    yearAge--;
    monthAge = 11 - firstDate.getMonth() + secondDate.getMonth() + 1;
  }

  if (secondDate.getDate() >= firstDate.getDate()) {
    dayAge = secondDate.getDate() - firstDate.getDate();
  } else {
    monthAge--;
    dayAge = daysCurrentMonth(firstDate.getFullYear(), firstDate.getMonth()) - firstDate.getDate() + secondDate.getDate();

    if (monthAge < 0) {
      monthAge = 11;
      yearAge--;
    }
  }

  if (howMany(yearAge) == 'many') {
    stringYear += ' лет';
  } else if (howMany(yearAge) == 'few') {
    stringYear += ' года';
  } else { stringYear += ' год' }

  if (howMany(monthAge) == 'many') {
    stringMonth += ' месяцев';
  } else if (howMany(monthAge) == 'few') {
    stringMonth += ' месяца';
  } else { stringMonth += ' месяц' }

  if (howMany(dayAge) == 'many') {
    stringDay += ' дней';
  } else if (howMany(dayAge) == 'few') {
    stringDay += ' дня';
  } else { stringDay += ' день' }

  if (accuracy === 'year') return stringTimePeriod = yearAge + stringYear;
  if (accuracy === 'month' && yearAge > 0) return stringTimePeriod = yearAge + stringYear + ' ' + monthAge + stringMonth;
  if (accuracy === 'month' && yearAge === 0) return stringTimePeriod = monthAge + stringMonth;
  if (accuracy === 'day') return stringTimePeriod = yearAge + stringYear + ' ' + monthAge + stringMonth + ' ' + dayAge + stringDay;
}
