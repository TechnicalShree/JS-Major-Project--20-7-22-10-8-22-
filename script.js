const calenderTag = document.querySelector(".calender");

function calender() {
  const calendarData = new Date();
  let year = calendarData.getFullYear();
  let month = calendarData.getMonth();
  let day = calendarData.getDay();
  let today = calendarData.getDate();

  let calenderHtml = "";

  const weekDay = ["Sun", "mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
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

  calenderHtml = `
    <table>
        <thead>
            <tr>
                <th onclick="prevMonth()"><<//th>
                <th>${yearMonth[month]}</th>
                <th>${year}</th>
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
            ${tableBody(year, month, today)}
        </tbody>
    </table>
    `;
  calenderTag.innerHTML = calenderHtml;
}

function tableBody(year, month, today) {
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
      body += `<td class='today'>${i - start + 1}</td>`;
      if (i % 7 === 6) {
        body += "</tr>";
      }
    } else if (i % 7 === 6) {
      body += `<td>${i - start + 1}</td>`;
      body += "</tr>";
    } else {
      body += `<td>${i - start + 1}</td>`;
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

calender();
