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
