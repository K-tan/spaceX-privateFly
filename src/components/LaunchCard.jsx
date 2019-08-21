import React from "react";
import { Link } from "@reach/router";
import "../css/LaunchCard.css";

const LaunchCard = ({ launch }) => {
  return (
    <div>
      <li className="launch_card">
        <p>
          <strong>Flight Number: </strong>
          <span className="apiResult">{launch.flight_number}</span>
        </p>
        <p>
          <strong>Launch Date: </strong>
          <span className="apiResult">
            {new Date(launch.launch_date_utc).toUTCString()}
          </span>
        </p>
        <p>
          <strong>Rocket Name: </strong>
          <span className="apiResult">{launch.rocket.rocket_name}</span>
        </p>
        <p>
          <strong>Launch Year: </strong>
          <span className="apiResult">{launch.launch_year}</span>
        </p>
        <p>
          <strong>Launch Success: </strong>
          <span className="apiResult">
            {launch.launch_success ? "Succesful" : "Not Succesful"}
          </span>
        </p>
        <Link to={`/launches/${launch.flight_number}`} className="readMore">
          <button className="moreInfo">More Information</button>
        </Link>
      </li>
    </div>
  );
};

export default LaunchCard;
