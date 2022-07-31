function selectMonth() {
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
  return months;
}
function setChosenMonth(idx) {
  month = idx;
  calender();
}
