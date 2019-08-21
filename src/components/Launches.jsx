import React, { Component } from "react";
import axios from "axios";
import LaunchCard from "./LaunchCard";

class Launches extends Component {
  state = {
    launches: [],
    isLoading: true
  };

  render() {
    const { isLoading } = this.state;
    return isLoading ? (
      <h1>Loading...</h1>
    ) : (
      <div className="main">
        <ul className="launches">
          {this.state.launches.map(launch => {
            return <LaunchCard key={launch.flight_number} launch={launch} />;
          })}
        </ul>
      </div>
    );
  }

  componentDidMount = () => {
    axios
      .get(
        `https://api.spacexdata.com/v3/launches/past?sort=launch_date_utc&order=desc&limit=10`
      )
      .then(res => {
        this.setState({ launches: res.data, isLoading: false });
      });
  };
}

export default Launches;
