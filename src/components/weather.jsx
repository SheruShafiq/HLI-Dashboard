import axios from "axios"
import React, { useEffect, useState } from "react"
import '../components/weather.css';
import giffyLoad from '../assets/loading-gif.gif'; 


const Weather = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const fetchData = () => {
    axios.get("https://weerlive.nl/api/json-data-10min.php?key=3932a19976&locatie=Hilversum").then(response => {
      setUsers(response.data)
      setLoading(false);
    })
  }

  useEffect(() => {
    fetchData()
  }, [])
console.log(users)

var event = new Date();
var options = { weekday: 'long' };
let dayName = (event.toLocaleDateString('en-US', options));
let dayNum = event.getDate();
const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"];
let month = monthNames[event.getMonth()];
let year = event.getFullYear();
let currentDate = `${dayNum} ${month} ${year}`;
var options1 = { weekday: 'short' };
let dayNameS = (event.toLocaleDateString('en-US', options1));
var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var dayNametom = days[event.getDay() + 1];
var dayNameafttom = days[event.getDay() + 2];
if (!!!!isLoading) {
  
  return   <div id="sunDiv"><img id="loading" src={giffyLoad} alt="" /></div>;
}
  return (
   
   
  
 
         <div className="container">
         <div className="weather-side">
             <div className="weather-gradient"></div>
             <div className="date-container">
                 <h2 className="date-dayname">{dayName}</h2><span className="date-day">{currentDate}</span><i className="location-icon" data-feather="map-pin"></i><span className="location">{(users.liveweer[0].plaats)}</span>
             </div>
             <div className="weather-container"><i className="weather-icon" data-feather="sun"></i>
                 {<h1 className="weather-temp">{(users.liveweer[0].temp)}°C</h1>}
                 <h3 className="weather-desc">{(users.liveweer[0].samenv)}</h3>
             </div>
         </div>
         <div className="info-side">
             <div className="today-info-container">
                 <div className="today-info">
                     <div className="precipitation"> <span className="title">PRECIPITATION</span><span className="value">{(users.liveweer[0].d0neerslag)} %</span>
                         <div className="clear"></div>
                     </div>
                     <div className="humidity"> <span className="title">HUMIDITY</span><span className="value">{(users.liveweer[0].lv)} %</span>
                         <div className="clear"></div>
                     </div>
                     <div className="wind"> <span className="title">WIND</span><span className="value">{(users.liveweer[0].windkmh)} km/h</span>
                         <div className="clear"></div>
                     </div>
                 </div>
             </div>
             <div className="week-container">
             <div className="icon cloudy">
  <div className="cloud"></div>
  <div className="cloud"></div>
</div>
             
                 <ul className="week-list">
                     <li className="active"><i className="day-icon" data-feather="sun"></i><span className="day-name">{dayNameS}</span><span className="day-temp">{users.liveweer[0].temp}°C</span></li>
                     <li><i className="day-icon" data-feather="cloud"></i><span className="day-name">{dayNametom}</span><span className="day-temp">{users.liveweer[0].d1tmax}°C</span></li>
                     <li><i className="day-icon" data-feather="cloud-snow"></i><span className="day-name">{dayNameafttom}</span><span className="day-temp">{users.liveweer[0].d2tmax}°C</span></li>
                     <div className="clear"></div>
                 </ul>
             </div>
         
         </div>
     </div>
      


  ) 
}

export default Weather