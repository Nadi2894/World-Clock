function updateTime() {
  let BishkekElement = document.querySelector("#Bishkek");
  let dateElementBishkek = Bishkek.querySelector(".date");
  let timeElementBishkek = Bishkek.querySelector(".time");
  let BishkekTime = moment().tz("Asia/Bishkek");

  dateElementBishkek.innerHTML = BishkekTime.format("MMMM, Do, YYYY");
  timeElementBishkek.innerHTML = BishkekTime.format(
    "h:mm:ss [<small>] A [</small>]"
  );

  let ParisElement = document.querySelector("#paris");
  let dateElementParis = Paris.querySelector(".date");
  let timeElementParis = Paris.querySelector(".time");
  let ParisTime = moment().tz("Europe/Paris");

  dateElementParis.innerHTML = ParisTime.format("MMMM, Do, YYYY");
  timeElementParis.innerHTML = ParisTime.format(
    "h:mm:ss [<small>] A [</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
