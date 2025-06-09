const submitBtn = document.querySelector("#submitBtn");
const cityName = document.querySelector("#cityName");

const city_name = document.querySelector("#city_name");
const temp_status = document.querySelector("#temp_status");
const temp = document.querySelector("#temp");
const datahide = document.querySelector(".data_hide");
const today = document.querySelector("#today_date");
const date = document.querySelector("#day");

const getInfo = async (event) => {
  event.preventDefault();
  let cityVal = cityName.value;
  if (cityVal === "") {
    city_name.innerText = "Please write the name before search";
    datahide.classList.add("data_hide");
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=b6c8d5ae432f7ab19ac9b70cd71d6a06`;
      const response = await fetch(url);
      const data = await response.json();
      const arrData = [data];

      console.log(data);

      city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
      temp.innerText = arrData[0].main.temp;
      temp_status.innerText = arrData[0].weather[0].main;
      //    Date
      const timestamp = Date.now();
      const date = new Date(timestamp);
      //   time
      const formattedDate = date.toLocaleDateString("en-AU", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
      today.innerText = formattedDate;
      //   day
      const dayName = date.toLocaleDateString("en-AU", { weekday: "long" });
      date.innerText = dayName;

      datahide.classList.remove("data_hide");
    } catch {
      city_name.innerText = "Please enter city name ";
      datahide.classList.add("data_hide");
    }
  }
};

submitBtn.addEventListener("click", getInfo);
