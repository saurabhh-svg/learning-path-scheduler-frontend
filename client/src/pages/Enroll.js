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

    const choice = new FormData();
    choice.append("course", course);
    choice.append("hours", hours);
    choice.append("date", date);

    axios
      .post("http://localhost:5001/api/enroll/enroll/", choice)
      .then((res) => {
        console.log(res.message);
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
    <div className="flex flex-col min-h-screen items-center justify-center ">
      <label
        for="courses"
        class="block mb-2 w-48 text-sm font-medium text-gray-900 dark:text-white"
      >
        Select an option
      </label>
      <select
        id="courses"
        class="bg-gray-50 cursor-pointer border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5 dark:bg-gray-700 dark:hover:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={(e) => setCourse(e.target.value)}
      >
        <option selected>Choose a Course</option>
        <option value="JAVA">JAVA</option>
      </select>
      <label
        for="hours you can devote"
        class="block mb-2 w-48 text-sm font-medium text-gray-900 dark:text-white"
      >
        Select an option
      </label>
      <select
        id="courses"
        class="bg-gray-50  cursor-pointer border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-900 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        onChange={(e) => setHours(e.target.value)}
      >
        <option selected>Hours you can devote per day</option>
        <option value="2">Two</option>
        <option value="4">Four</option>
        <option value="6">Six</option>
      </select>
      <button
        type="button"
        onClick={handleFormSubmit}
        disabled={isFormSubmitting}
        class="text-white mt-5 bg-gray-800 focus:outline-none focus:ring-4  focus:ring-gray-300 font-medium rounded-lg w-32 text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-700 dark:hover:bg-gray-900 dark:focus:ring-gray-700 dark:border-gray-600"
      >
        {isFormSubmitting ? "Submitting..." : "Submit"}
      </button>
    </div>
  );
};

export default Enroll;
