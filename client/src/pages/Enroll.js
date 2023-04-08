import React from "react";

const enroll = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <label
        for="courses"
        class="block mb-2 w-48 text-sm font-medium text-gray-900 dark:text-white"
      >
        Select an option
      </label>
      <select
        id="courses"
        class="bg-gray-50 cursor-pointer border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5 dark:bg-gray-700 dark:hover:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option selected>Choose a Course</option>
        <option value="JAVA">JAVA</option>
        <option value="CA">Canada</option>
        <option value="FR">France</option>
        <option value="DE">Germany</option>
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
      >
        <option selected>Hours you can devote per day</option>
        <option value="two">Two</option>
        <option value="four">Four</option>
        <option value="six">Six</option>
        <option value="eight">Eight</option>
      </select>
      <button
        type="button"
        class="text-white mt-5 bg-gray-800 focus:outline-none focus:ring-4  focus:ring-gray-300 font-medium rounded-lg w-32 text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-700 dark:hover:bg-gray-900 dark:focus:ring-gray-700 dark:border-gray-600"
      >
        Submit
      </button>
    </div>
  );
};

export default enroll;
