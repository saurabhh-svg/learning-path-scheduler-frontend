const courseData = require("./course");

let sixHoursData = [],
  tempData = [],
  currentDuration = 0;

for (let i = 0; i < courseData.length; i++) {
  if (currentDuration + courseData[i].duration > 360) {
    sixHoursData.push(tempData);
    tempData = [];
    currentDuration = 0;
  }
  tempData.push(courseData[i]);
  currentDuration += courseData[i].duration;
}

module.exports = sixHoursData;
