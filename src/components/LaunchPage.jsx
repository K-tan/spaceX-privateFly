import React, { Component } from "react";
import "../css/LaunchPage.css";
import axios from "axios";

class LaunchPage extends Component {
  state = {
    launch: {},
    launch_site: []
  };

  render() {
    const { launch, launch_site } = this.state;
    console.log(launch);
    return (
      <div className="main">
        <p>{launch.details}</p>
        <p>{launch_site.site_name}</p>
      </div>
    );
  }

  componentDidMount = () => {
    const launch = this.props;
    axios
      .get(`https://api.spacexdata.com/v3/launches/${launch.flight_number}`)
      .then(res => {
        this.setState({ launch: res.data, launch_site: res.data.launch_site });
      });
  };
}

export default LaunchPage;
