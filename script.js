const calenderTag = document.querySelector(".calender");
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

function tableBody() {
  let start = new Date(year, month, 1).getDay();
  let days = new Date(year, month + 1, 0).getDate();
  let body = "";
  let i;
  for (i = 0; i < start; i++) {
    if (i === 0) {
      body += "<tr>";
    }
    body += "<td class='blank'> </td>";
  }
  for (; i < days + start; i++) {
    if (i % 7 === 0) {
      body += "<tr>";
    }
    if (isToday(i, start)) {
      body += `<td class='today date'>${i - start + 1}</td>`;
      if (i % 7 === 6) {
        body += "</tr>";
      }
    } else if (i % 7 === 6) {
      body += `<td class='date'>${i - start + 1}</td>`;
      body += "</tr>";
    } else {
      body += `<td class='date'>${i - start + 1}</td>`;
    }
  }
  for (; i < days + start + (7 - ((days + start) % 7)); i++) {
    if (i === 0) {
      body += "<tr>";
    }
    body += "<td class='blank'> </td>";
  }

  return body.toString();
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
  let months = `
    <table>
      <tbody>
        <tr class='trMonth'>
          <td class='month' onclick='setChosenMonth(0)'>Jan</td>
          <td class='month' onclick='setChosenMonth(1)'>Feb</td>
          <td class='month' onclick='setChosenMonth(2)'>Mar</td>
        </tr>
        <tr class='trMonth'>
          <td class='month' onclick='setChosenMonth(3)'>Apr</td>
          <td class='month' onclick='setChosenMonth(4)'>May</td>
          <td class='month' onclick='setChosenMonth(5)'>Jun</td>
        </tr>
        <tr class='trMonth'>
          <td class='month' onclick='setChosenMonth(6)'>Jul</td>
          <td class='month' onclick='setChosenMonth(7)'>Aug</td>
          <td class='month' onclick='setChosenMonth(8)'>Sep</td>
        </tr>
        <tr class='trMonth'>
          <td class='month' onclick='setChosenMonth(9)'>Oct</td>
          <td class='month' onclick='setChosenMonth(10)'>Nov</td>
          <td class='month' onclick='setChosenMonth(11)'>Dec</td>
        </tr>
      </tbody>
    </table>
  `;
  calenderTag.innerHTML = months;
}

function setChosenMonth(idx) {
  month = idx;
  calender();
}

function chooseYears() {
  let years = `
    <table>
      <tbody>
        <tr class='trMonth'>
          <td class='month' onclick='setChosenYear(2019)'>2019</td>
          <td class='month' onclick='setChosenYear(2020)'>2020</td>
          <td class='month' onclick='setChosenYear(2021)'>2021</td>
        </tr>
        <tr class='trMonth'>
          <td class='month' onclick='setChosenYear(2022)'>2022</td>
          <td class='month' onclick='setChosenYear(2023)'>2023</td>
          <td class='month' onclick='setChosenYear(2024)'>2024</td>
        </tr>
        <tr class='trMonth'>
          <td class='month' onclick='setChosenYear(2025)'>2025</td>
          <td class='month' onclick='setChosenYear(2026)'>2026</td>
          <td class='month' onclick='setChosenYear(2027)'>2027</td>
        </tr>
        <tr class='trMonth'>
          <td class='month' onclick='setChosenYear(2028)'>2028</td>
          <td class='month' onclick='setChosenYear(2029)'>2029</td>
          <td class='month' onclick='setChosenYear(2030)'>2030</td>
        </tr>
      </tbody>
    </table>
  `;
  calenderTag.innerHTML = years;
}

function setChosenYear(idx) {
  year = idx;
  calender();
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
