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

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM, Do, YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small> ${cityTime.format("A")}
  </small>
         </div>
        </div>
     `;
}

updateTime();
setInterval(updateTime, 1000);

let cityElement = document.querySelector("#city");
cityElement.addEventListener("change", updateCity);
