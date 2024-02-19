import React from "react";
import sunriseIcon from "../../icons/sunrise.svg";
import sunsetIcon from "../../icons/sunset.svg";

function SunriseSunset({ sunrise, sunset }) {
  return (
    <div>
      <div className="flex items-center">
        <figure>
          <img className="w-24 mr-3" src={sunriseIcon} alt="sunrise" />
        </figure>
        <span className="text-xl text-gray-600 dark:text-gray-200 font-semibold">
          {sunrise}
        </span>
      </div>
      <div className="flex items-center">
        <figure>
          <img className="w-24 mr-3" src={sunsetIcon} alt="sunrise" />
        </figure>
        <span className="text-xl text-gray-600 dark:text-gray-200 font-semibold">
          {sunset}
        </span>
      </div>
    </div>
  );
}

export default SunriseSunset;
