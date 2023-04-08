import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";

const Schedule = () => {
  const handleDateClick = (arg) => {
    console.log(arg.dateStr);
    alert(arg.dateStr);
  };
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
        events={[
          { title: "event 1", date: "2023-05-01" },
          { title: "event 2", date: "2023-05-02" },
        ]}
        dateClick={handleDateClick}
      />
    </div>
  );
};

export default Schedule;
