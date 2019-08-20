import React from "react";
import { Link } from "@reach/router";
import "../css/LaunchCard.css";

const LaunchCard = ({ launch }) => {
  return (
    <div>
      <li className="launch_card">
        <p>Flight Number: {launch.flight_number}</p>
        <p>Launch Date: {new Date(launch.launch_date_utc).toUTCString()}</p>
        <p>Rocket Name: {launch.rocket.rocket_name}</p>
        <p>Launch Year: {launch.launch_year}</p>
        <p>
          Launch Success:{" "}
          {launch.launch_success ? "succesful" : "not succesful"}
        </p>
        <Link to={`/launches/${launch.flight_number}`} className="readMore">
          Read More
        </Link>
      </li>
    </div>
  );
};

export default LaunchCard;
