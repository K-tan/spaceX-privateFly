import React from "react";
import { Link } from "@reach/router";
import "../css/LaunchCard.css";

const LaunchCard = ({ launch }) => {
  return (
    <div>
      <li className="launch_card">
        <p>
          <strong>Flight Number:</strong> {launch.flight_number}
        </p>
        <p>
          <strong>Launch Date:</strong>{" "}
          {new Date(launch.launch_date_utc).toUTCString()}
        </p>
        <p>
          <strong>Rocket Name:</strong> {launch.rocket.rocket_name}
        </p>
        <p>
          <strong>Launch Year:</strong> {launch.launch_year}
        </p>
        <p>
          <strong>Launch Success:</strong>{" "}
          {launch.launch_success ? "Succesful" : "Not Succesful"}
        </p>
        <Link to={`/launches/${launch.flight_number}`} className="readMore">
          <h3>More Information</h3>
        </Link>
      </li>
    </div>
  );
};

export default LaunchCard;
