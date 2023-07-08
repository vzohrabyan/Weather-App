import Clear from "./assets/clear.svg";
import Moon from "./assets/Subtract.svg";
import Sunny from "./assets/sunny.svg";
import Cloudy from "./assets/Cloudy.svg";
import NightCloudy from "./assets/NightCloudy.svg";
import Rainy from "./assets/Rainy.svg";
import Thunder from "./assets/Thunder.svg";
import RainyNight from "./assets/RainyNight.svg";
import Wind from "./assets/wind.png";

export const CONFIG = {
    first: [
        "Yerevan",
        "New York",
        "London",
        "Moscow",
        "Tbilisi",
        "Berlin",
        "Paris",
        "Rome",
        "Washington",
        "Vienna",
        "Minsk",
        "Sofia",
        "Zagreb",
        "Athens",
        "New Delhi",
        "Tehran",
        "Astana"
    ],
    second: [
        "Kabul",
        "Tirana",
        "Luanda",
        "Brussels",
        "Gyumri",
        "Tashkent",
        "Ashgabat",
        "Bern",
        "Stockholm",
        "Damascus",
        'Madrid',
        'Seoul',
        'Bratislava',
        'Belgrade',
        'Riyadh',
        'Lisbon',
        'Warsaw'
    ],
    weatherIcons: {
        "01d": Clear,
        "01n": Moon,
        "02d": Sunny,
        "02n": NightCloudy,
        "03d": Cloudy,
        "03n": NightCloudy,
        "04d": Cloudy,
        "04n": NightCloudy,
        "10d": Rainy,
        "10n": RainyNight,
        "11d": Thunder,
        "11n": Thunder,
        "50d": Wind,
        "50n": Wind,
      }
}