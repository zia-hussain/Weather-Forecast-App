import React, { useEffect } from "react";

function ForecastDayItem({ temp, icon, day, hour }) {
  const weatherIcon = require(`../../icons/${icon}.svg`);

  return (
    <li className="flex flex-col justify-center items-center p-5 bg-white dark:bg-gray-900 rounded-xl py-2">
      <span className="font-semibold text-lg dark:text-gray-200">{day}</span>
      <span className="text-xs text-gray-500 dark:text-gray-300">{hour}</span>

      <img className="w-2/3" src={weatherIcon} alt={`icon-${icon}`} />

      <span className="text-lg text-gray-500 dark:text-gray-300">{temp}°</span>
    </li>
  );
}

export default ForecastDayItem;
