import React, { Component } from "react";
import axios from "axios";

class Launches extends Component {
  state = {
    launches: []
  };

  componentDidMount() {
    axios.get(`https://api.spacexdata.com/v3/launches`).then(res => {
      console.log(res);
      this.setState({ launches: res.data });
    });
  }

  render() {
    return (
      <ul>
        {this.state.launches.map(launch => (
          <li key={launch.flight_number}>
            <h6>Flight Number: {launch.flight_number}</h6>
            <h6>
              Launch Date: {new Date(launch.launch_date_unix).toUTCString()}
            </h6>
            <h6>Rocket Name: {launch.rocket.rocket_name}</h6>
            <h6>Launch Year: {launch.launch_year}</h6>
            <h6>Launch Success: {launch.launch_success}</h6>
            <h6>More Info</h6>
          </li>
        ))}
      </ul>
    );
  }
}

export default Launches;
