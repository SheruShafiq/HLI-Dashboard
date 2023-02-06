import React from 'react'
import WeatherStats from "./weatherStats";
import DayIconLabel from "./dayiconlabel";

const WidgetRender = (props) => {
    const {weatherData} = props
    const {dayNameS} = props
    const {dayNametom} = props
    const {dayNameafttom} = props
    return(
<div className="info-side">
    <div className="today-info-container">
      <div className="today-info">
        <WeatherStats title={"PRECIPITATION"} value={weatherData.liveweer[0].d0neerslag} />
        <WeatherStats title={"HUMIDITY"} value={weatherData.liveweer[0].lv} />
        <WeatherStats title={"WIND"} value={weatherData.liveweer[0].windkmh} />
        <WeatherStats title={"PRESSURE"} value={weatherData.liveweer[0].luchtd} />
      </div>
    </div>
    <div className="week-container">
      <div className="icon cloudy">
        <div className="cloud"></div>
        <div className="cloud"></div>
      </div>

      <ul className="week-list">
        <li className="active">
          <DayIconLabel day={dayNameS} temp={weatherData.liveweer[0].temp} />
        </li>
        <li>
          <DayIconLabel day={dayNametom} temp={weatherData.liveweer[0].d1tmax} />
        </li>
        <li>
          <DayIconLabel day={dayNameafttom} temp={weatherData.liveweer[0].d2tmax} />
        </li>
        <div className="clear"></div>
      </ul>
    </div>
  </div>
    )
}

export default WidgetRender