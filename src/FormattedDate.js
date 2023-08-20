import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday ",
    "Wednesday",
    "Thursday ",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let currentDay = props.date.getDate();
  let months = [
    "January",
    "February",
    "March ",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[props.date.getMonth()];
  return (
    <div>
      {day}, {month} {currentDay}
    </div>
  );
}
