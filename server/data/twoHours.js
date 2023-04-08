const courseData = require("./course");

let twoHoursData = [],
  tempData = [],
  currentDuration = 0;

for (let i = 0; i < courseData.length; i++) {
  if (currentDuration + courseData[i].duration > 120) {
    twoHoursData.push(tempData);
    tempData = [];
    currentDuration = 0;
  }
  tempData.push(courseData[i]);
  currentDuration += courseData[i].duration;
}

module.exports = twoHoursData;
