// Author:        Yalim Erdem
/* Problem:       How many Sundays fell on 1st day of the month during the XX century
                  (from January 1st, 1901 until December 31st, 2000)?
*/
// Solution:      Created a script in JavaScript(helping with Zeller's Congruence Algorithm)
// URL:           https://github.com/Opportumeety.git/SundayExercise
// Algorithm URL: https://en.wikipedia.org/wiki/Zeller's_congruence

function Sundays() {

  var n = 0, dow = 2;
  var months = [31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  for (var y = 1901; y <= 2000; y++) {

    months[1] = 28 + (y % 4 === 0 && y % 100 !== 0 || y % 400 === 0);

    for (var month of months) {
      dow+= month % 7;
      if (dow % 7 === 0) {
        n++;
      }
    }
  }
  return n;
}
console.log(Sundays());
