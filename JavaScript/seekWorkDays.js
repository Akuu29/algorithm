/**
 * input
 * On the first line, the number of days you plan to work.
 * On the second line, work plan.
 *  "1" is working day.
 *  "0" is holiday.
 * ex.
 * [
 *    "11",
 *    "1 1 1 0 1 1 1 0 1 1 0"
 * ]
 * 
 * output
 * The Number of days in the first line that can be worked 
 * while maintaining a two day workweek.
 * ex.
 * 10
 */

const input = ["11", "1 1 1 0 1 1 1 0 1 1 0"];
const input1 = ["9", "1 0 1 1 1 1 1 1 0"];
const input2 = ["14", "1 1 1 1 1 0 0 1 1 1 1 1 0 0"];

const seekWorkDays = (input) => {
  let [workingDays, scheduleArr] = [Number(input[0]), input[1].split(" ")];

  let twoHolidaysWeek = 0;
  let longestTwoHolidayWeek = 0;
  let isTwoHolidays = false;
  while(scheduleArr.length >= 7) {
    let holidayCount = 0;
    for(let i  = 0; i < 7; i++) {
      if(scheduleArr[i] == "0") {
        holidayCount++;
      }
    }
    if(holidayCount >= 2) {
      isTwoHolidays = true;
      twoHolidaysWeek++;
      if(twoHolidaysWeek > longestTwoHolidayWeek) {
        longestTwoHolidayWeek = twoHolidaysWeek;
      }
    }else {
      if(twoHolidaysWeek > longestTwoHolidayWeek) {
        longestTwoHolidayWeek = twoHolidaysWeek;
      }
      twoHolidaysWeek = 0;
    }

    scheduleArr.shift();
  }

  const result = isTwoHolidays ? (longestTwoHolidayWeek + 6) : 0;

  return result;
}

console.log(seekWorkDays(input));
console.log(seekWorkDays(input1));
console.log(seekWorkDays(input2));