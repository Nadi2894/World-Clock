function updateTime() {
  let London = document.querySelector("#London");
  let dateElementLondon = document.querySelector(".date");
  let timeElementLondon = document.querySelector(".time");
  LondonTime = moment().tz("Europe/London");

  dateElement.innerHTML = LondonTime.format("MMMM, Do, YYYY");
  timeElement.innerHTML = LondonTime.format("h:mm:ss [<small>] A [</small>]");

  let BudapestElement = document.querySelector("#Budapest");
  let dateElementBudapest = document.querySelector(".date");
  let timeElementBudapest = document.querySelector(".time");
  BudapestTime = moment().tz("Europe/Budapest");

  dateElement.innerHTML = BudapestTime.format("MMMM, Do, YYYY");
  timeElement.innerHTML = BudapestTime.format("h:mm:ss [<small>] A [</small>]");
}
updateTime();
setInterval(updateTime, 1000);
