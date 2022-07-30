const calenderTag = document.querySelector(".calender");
const calendarData = new Date();
let year = calendarData.getFullYear();
let month = calendarData.getMonth();
let day = calendarData.getDay();
let today = calendarData.getDate();

function calender() {
  let calenderHtml = "";

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

  calendarData.setDate(1);
  calendarData.setMonth(month);
  calendarData.setFullYear(year);

  calenderHtml = `
    <table>
        <thead>
            <tr>
                <th onclick="prevMonth()"><<//th>
                <th class='monthYear'>${yearMonth[month]}, ${year}</th>
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
    if (i === today + start - 1) {
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

calender();
