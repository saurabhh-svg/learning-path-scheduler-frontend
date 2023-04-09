import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import moment from "moment";

const Schedule = ({ events }) => {
  console.log(events);
  const startDate = events.date;
  let offSet = 0,
    flag = false;
  const eventArray = events.schedule.schedule.map((event) => {
    const tempEvent = event.courses.map((e) => {
      let day = event.day;
      if (moment(startDate).add("days", day).format("dddd") === "Saturday") {
        offSet += 2;
        flag = true;
      }
      if (
        moment(startDate).add("days", day).format("dddd") === "Sunday" &&
        flag === false
      )
        offSet += 1;
      day = day - 1 + offSet;
      return {
        title: event.day + "" + e.title + " (" + e.duration + "minutes)",
        start: moment(startDate, "YYYY-MM-DD")
          .add("days", day)
          .format("YYYY-MM-DD"),
        end: moment(startDate, "YYYY-MM-DD")
          .add("days", day)
          .format("YYYY-MM-DD"),
      };
    });
    return tempEvent;
  });

  return (
    <div className="mt-10 pt-10">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        height={"80vh"}
        events={eventArray.flat()}
      />
    </div>
  );
};

export default Schedule;
