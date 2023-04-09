import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import moment from "moment";

const Schedule = ({ events }) => {
  const [eventsData, setEventsData] = useState([]);
  const startDate = events.date;
  const handleDateClick = (arg) => {
    console.log(arg.dateStr);
    alert(arg.dateStr);
  };
  const eventArray = events.schedule.schedule.map((event) => {
    const tempEvent = event.courses.map((e) => {
      let day = event.day;
      day = day - 1;
      return {
        title: e.title,
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
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        weekends={true}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        events={() => {
          eventArray.map((event) => {
            console.log(event);
            return event;
          });
        }}
        dateClick={handleDateClick}
      />
    </div>
  );
};

export default Schedule;
