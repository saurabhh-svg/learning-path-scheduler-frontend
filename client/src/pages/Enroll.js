import React from "react";
import moment from "moment";
import axios from "axios";
import { useState } from "react";
import Schedule from "./Schedule";

const Enroll = () => {
  const [redirect, setRedirect] = useState(false);
  const [course, setCourse] = useState("java");
  const [hours, setHours] = useState(2);
  const [events, setEvents] = useState([]);
  const [date] = useState(moment().format("YYYY-MM-DD"));
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setIsFormSubmitting(true);

    axios
      .post(
        "https://learning-path-scheduler-backend-production.up.railway.app/api/enroll/enroll/",
        {
          course: course,
          hours: hours,
          date: date,
        }
      )
      .then((res) => {
        setEvents(res.data);
        setIsFormSubmitting(false);
        alert("Enrolled Successfully!");
        setRedirect(true);
      })
      .catch((error) => {
        setIsFormSubmitting(false);
        alert(error.res.message);
      });
  };
  if (redirect) return <Schedule events={events} />;
  return (
    <div className="flex bg-gray-400 flex-col h-screen items-center justify-center ">
      <h1 className="text-3xl font-bold text-gray-900 text-dark">
        Enroll in a Course !!
      </h1>
      <select
        id="courses"
        className="mt-2 cursor-pointer border  text-sm rounded-lg   block w-64 p-2.5 bg-gray-700 hover:bg-gray-900 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
        onChange={(e) => setCourse(e.target.value)}
        required={true}
      >
        <option selected>Choose a Course</option>
        <option value="JAVA">JAVA</option>
      </select>
      <select
        id="courses"
        className="mt-2 cursor-pointer border  text-sm rounded-lg   block w-64 p-2.5 bg-gray-700 border-gray-600 hover:bg-gray-900 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
        onChange={(e) => setHours(e.target.value)}
        required={true}
      >
        <option selected>Hours you can devote per day</option>
        <option value="2">2 Hours</option>
        <option value="4">4 Hours</option>
        <option value="6">6 Hours</option>
      </select>
      <button
        type="button"
        onClick={handleFormSubmit}
        disabled={isFormSubmitting}
        className="text-white mt-5 bg-gray-800 focus:outline-none focus:ring-4  focus:ring-gray-300 font-medium rounded-lg w-32 text-sm px-5 py-2.5 mr-2 mb-2 bg-gray-700 hover:bg-gray-900 focus:ring-gray-700 border-gray-600"
      >
        {isFormSubmitting ? "Submitting..." : "Submit"}
      </button>
    </div>
  );
};

export default Enroll;
