const courseData = require("./course");

let fourHoursData = [],
  tempData = [],
  currentDuration = 0;

for (let i = 0; i < courseData.length; i++) {
  if (currentDuration + courseData[i].duration > 240) {
    fourHoursData.push(tempData);
    tempData = [];
    currentDuration = 0;
  }
  tempData.push(courseData[i]);
  currentDuration += courseData[i].duration;
}

module.exports = fourHoursData;
