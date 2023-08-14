import React, { useState } from "react";
import axios from "axios";
import WeatherProfile from "./WeatherProfile";
import "./FetchDta.css";

const WeatherData = () => {
  const [apidata, setApidata] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  //const [githubProfile, setGithubProfile] = useState({});

  async function weatherData(e) {
    try {
      e.preventDefault();
      const Appid = "79d3f0ed8990dec7c3134722b19d1e77";
      const url =
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        searchTerm +
        "&appid=" +
        Appid +
        "&units=metric";
      let dataURL = url;
      let response = await axios.get(dataURL);

      // if(response.data.cod!=200)
      console.log(response.data.cod);
      if (response.data.cod === 200) setApidata(response.data);

      //   setTimeout(()=>
      //   {
      //       setSearchTerm(response.data);
      //  },5000);
    } catch (error) {
      console.log(error);
    }
  }
  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <>
      <div className="container">
        <div>
          <h1>Weather Details(City-Wise)</h1>
          <form onSubmit={weatherData}>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Enter City Name"
            />
            <input type="submit" value="Search" className="btn" />
          </form>
        </div>
        <div>
          {Object.keys(apidata).length > 0 ? (
            <WeatherProfile data={apidata} />
          ) : (
            <p className="warning">enter correct city name</p>
          )}
        </div>
      </div>
    </>
  );
};

export default WeatherData;
