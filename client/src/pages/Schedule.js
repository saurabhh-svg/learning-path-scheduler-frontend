import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import moment from "moment";

const Schedule = ({ events }) => {
  const handleDateClick = (arg) => {
    alert("Clicked on: " + arg.dateStr);
    arg.dayEl.style.backgroundColor = "#800080";
  };

  const eventArray = events.schedule.schedule.map((event) => {
    const tempEvent = event.courses.map((e) => {
      return {
        title: event.day + " " + e.title + " (" + e.duration + "minutes)",
        start: moment(event.date).format("YYYY-MM-DD"),
        end: moment(event.date).format("YYYY-MM-DD"),
        duration: e.duration,
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
        dateClick={handleDateClick}
      />
    </div>
  );
};

export default Schedule;
