// selecting the form
const cityForm = document.querySelector(".change-location");

// selecting the img for day and night
const time = document.querySelector('img.time');
console.log(time)

// selecting the icon for weather condition
const icon = document.querySelector('.icon img')

// function for collecting the weather data from api by passing city name
const updateCity = async (city) => {
  const cityDetails = await getCity(city);

  const weather = await getWeather(cityDetails.Key);
//   short-hand object property
  return { cityDetails, weather };
};

// event listener on the form submission
cityForm.addEventListener("submit", (e) => {
  e.preventDefault();
//   collecting the city name from the user
  const city = cityForm.city.value.trim();
  cityForm.reset();
// calling the update city function and then send the data to updateUI
  updateCity(city).then(data=>updateUI(data))
    .catch(err=>console.log(err))
});

// update UI

const card = document.querySelector(".card");

const details = document.querySelector(".details");

const updateUI = (data) => {

    const {cityDetails,weather} = data;
    console.log(data)
  details.innerHTML = `
    <div class="text-muted text-uppercase text-center details">
        <h5 class="my-5">${cityDetails.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    </div>
    `;



    let timeSource = null;

    if(weather.IsDayTime){
        timeSource = './images/day.svg';
    } else {
        timeSource = './images/night.svg';
    }

    time.setAttribute('src', timeSource);

    let iconSource = `images/icons/${weather.WeatherIcon}.svg`;

    icon.setAttribute('src',iconSource);

    if(card.classList.contains('d-none')){
        card.classList.remove('d-none')
    }
};
