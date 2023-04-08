import React from "react";
import moment from "moment";
import axios from "axios";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const Enroll = () => {
  const [course, setCourse] = useState("java");
  const [hours, setHours] = useState(2);
  const [date] = useState(moment().format("YYYY-MM-DD"));
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setIsFormSubmitting(true);
    console.log(course, hours, date);

    const choice = new FormData();
    choice.append("course", course);
    choice.append("hours", hours);
    choice.append("date", date);

    axios
      .post("http://localhost:5001/api/enroll/enroll/", choice)
      .then((res) => {
        setIsFormSubmitting(false);
        alert("Enrolled Successfully!");
        Navigate("/schedule");
      })
      .catch((error) => {
        setIsFormSubmitting(false);
        alert(error.res.message);
      });
  };

  return (
    <div className="flex bg-gray-400 flex-col min-h-screen items-center justify-center ">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-dark">
        Enroll in a Course !!
      </h1>
      <select
        id="courses"
        className="bg-gray-50 mt-2 cursor-pointer border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5 dark:bg-gray-700 dark:hover:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={(e) => setCourse(e.target.value)}
        required={true}
      >
        <option selected>Choose a Course</option>
        <option value="JAVA">JAVA</option>
      </select>
      <select
        id="courses"
        className="bg-gray-50 mt-2 cursor-pointer border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-900 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
        className="text-white mt-5 bg-gray-800 focus:outline-none focus:ring-4  focus:ring-gray-300 font-medium rounded-lg w-32 text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-700 dark:hover:bg-gray-900 dark:focus:ring-gray-700 dark:border-gray-600"
      >
        {isFormSubmitting ? "Submitting..." : "Submit"}
      </button>
    </div>
  );
};

export default Enroll;
