import React, { Component } from "react";
import axios from "axios";

class Launches extends Component {
  state = {
    launches: []
  };

  render() {
    return (
      <ul>
        {this.state.launches.map(launch => (
          <li key={launch.flight_number}>
            <h6>Flight Number: {launch.flight_number}</h6>
            <h6>Launch Date: {launch.launch_date_utc}</h6>
            <h6>Rocket Name: {launch.rocket.rocket_name}</h6>
            <h6>Launch Year: {launch.launch_year}</h6>
            <h6>Launch Success: {launch.launch_success}</h6>
            <h6>More Info</h6>
          </li>
        ))}
      </ul>
    );
  }

  componentDidMount = () => {
    axios
      .get(
        // `https://api.spacexdata.com/v3/launches/?sort=launch_date_utc&order=asc`
        `https://api.spacexdata.com/v3/launches/past?sort=launch_date_utc&order=desc&limit=10`
      )
      .then(res => {
        console.log(res);
        this.setState({ launches: res.data });
      });
  };
}

export default Launches;
