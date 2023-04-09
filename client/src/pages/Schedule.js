import React, { useState, useMemo } from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import axios from "axios";

const Schedule = () => {
  const handleDateClick = (arg) => {
    console.log(arg.dateStr);
    alert(arg.dateStr);
  };

  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { data } = axios.get("http://localhost:5001/api/schedule/schedule/");

  // const getEvents = async () => {
  //   setIsLoading(true);
  //   axios
  //     .get("http://localhost:5001/api/schedule/schedule/")
  //     .then((res) => {
  //       const data = res.json();
  //       console.log(data);
  //       setEvents(data);
  //       setIsLoading(false);
  //       alert("Enrolled Successfully!");
  //     })
  //     .catch((error) => {
  //       setIsLoading(false);
  //       alert(error.res.message);
  //     });
  // };

  const eventsData = useMemo(() => {
    return (
      data &&
      data[0].map(({ title, duration, type }) => {
        return {
          name: title.sdurationg(0, 3),
          duration: duration,
          type: type,
        };
      })
    );
  }, [data]);

  if (isLoading) return <div>Loading...</div>;
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
        dateClick={handleDateClick}
      />
      {console.log(eventsData)}
    </div>
  );
};

export default Schedule;
