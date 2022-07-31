const calenderTag = document.querySelector(".calender");
const theme = document.getElementById("theme");
const calendarData = new Date();
let year = calendarData.getFullYear();
let month = calendarData.getMonth();
let day = calendarData.getDay();
let today = calendarData.getDate();

const weekDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const yearMonth = [
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
  "December",
];

function calender() {
  let calenderHtml = "";

  calendarData.setDate(1);
  calendarData.setMonth(month);
  calendarData.setFullYear(year);

  calenderHtml = `
    <table>
        <thead>
            <tr>
                <th onclick="prevMonth()"><<//th>
                <th class='monthYear'>
                  <span onclick='chooseMonths()'>${yearMonth[month]}</span>
                  <span onclick='chooseYears()'>${year}</span>
                </th>
                <th onclick="nextMonth()">><//th>
            </tr>
            <tr>
                ${weekDay
                  .map((day) => `<td>${day}</td>`)
                  .toString()
                  .replaceAll(",", "")}
            </tr>
        </thead>
        <tbody>
            ${tableBody()}
        </tbody>
    </table>
    `;
  calenderTag.innerHTML = calenderHtml;
}

function prevMonth() {
  if (month === 0) {
    month = 11;
    year--;
  } else {
    month = month - 1;
  }
  calender();
}

function nextMonth() {
  if (month === 11) {
    month = 0;
    year++;
  } else {
    month = month + 1;
  }
  calender();
}

function chooseMonths() {
  calenderTag.innerHTML = selectMonth();
}

function chooseYears() {
  calenderTag.innerHTML = selectYear();
}

function isToday(i, start) {
  const curDate = new Date();
  if (
    i === today + start - 1 &&
    month === curDate.getMonth() &&
    year === curDate.getFullYear()
  ) {
    return true;
  }
  return false;
}

calender();
theme.addEventListener("change", (e) => {
  if (e.target.checked) {
    document.body.style.background = "#292929";
  } else {
    document.body.style.background = "#d4ece4";
  }
});
