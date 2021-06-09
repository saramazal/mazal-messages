const fullDate = document.querySelector(".full-date");
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const now = new Date();
const month = `${monthNames[now.getMonth()]}`;
const date = `${now.getDate()}`;
const year = `${now.getFullYear()}`;

fullDate.innerHTML = `${month} ${date}, ${year}`;
