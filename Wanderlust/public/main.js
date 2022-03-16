// Foursquare API Info

const foursquareKey = "fsq346bkrI2d6o2lsZ0TPlKwwoWr3nUU1WZ6QT3szUH9MB8=";
const url = "https://api.foursquare.com/v3/places/search?near=";

// OpenWeather Info
const openWeatherKey = "ebd3190a94f5614c434d26345192d372";
const weatherUrl = "https://api.openweathermap.org/data/2.5/weather";

// Page Elements
const $input = $("#city");
const $submit = $("#button");
const $destination = $("#destination");
const $container = $(".container");
const $placeDivs = [$("#place1"), $("#place2"), $("#place3"), $("#place4")];
const $weatherDiv = $("#weather1");
const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const options = {
  method: "GET",
  headers: {
    Accept: "application/json",
    Authorization: foursquareKey,
  },
};

// Add AJAX functions here:
const getPlaces = async () => {
  const city = $input.val();
  const urlToFetch = `${url}${city}&limit=10`;

  try {
    const response = await fetch(urlToFetch, options);
    if (response.ok) {
      console.log(response);
    }
  } catch (error) {
    console.log("error getting data");
  }
};

const getForecast = () => {};

// Render functions
const renderPlaces = (places) => {
  $placeDivs.forEach(($place, index) => {
    // Add your code here:

    const placeContent = "";
    $place.append(placeContent);
  });
  $destination.append(`<h2>${places[0].location.locality}</h2>`);
};

const renderForecast = (forecast) => {
  const weatherContent = "";
  $weatherDiv.append(weatherContent);
};

const executeSearch = () => {
  $placeDivs.forEach((place) => place.empty());
  $weatherDiv.empty();
  $destination.empty();
  $container.css("visibility", "visible");
  getPlaces();
  getForecast();
  return false;
};

$submit.click(executeSearch);
