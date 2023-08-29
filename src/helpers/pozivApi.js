import axios from 'axios';

export const fetchData = async (city, setWeatherData, setBackgroundImage, setBGGif) => {
  try {
   // const API_KEY = 'aa6ceb23fdb262039c170ab24b33fd67';   --- Moj API ali many request
   const API_KEY = '895284fb2d2c50a520ea537456963d9c'
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=hr&appid=${API_KEY}`
    );
    setWeatherData(response.data);

    const main = response.data.weather[0].main;
    setBackgroundImage(main, setBGGif);

    console.log(response.data); // U console.log se može viditi cijela prognoza
  } catch (error) {
    console.error(error);
  }
};