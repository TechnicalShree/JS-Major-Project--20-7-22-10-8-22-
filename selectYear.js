function selectYear() {
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
  return years;
}

function setChosenYear(idx) {
  year = idx;
  calender();
}
