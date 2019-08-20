import React, { Component } from "react";
import "../css/LaunchPage.css";
import axios from "axios";
import { Link } from "@reach/router";

class LaunchPage extends Component {
  state = {
    launch: {},
    launch_site: [],
    links: [],
    rocket: []
  };

  render() {
    const { launch, launch_site, links, rocket } = this.state;
    return (
      <div className="main">
        <img className="icon" alt="home-icon" src={links.mission_patch_small} />
        <p>Launch Site: {launch_site.site_name}</p>
        <p>{launch.details}</p>
        <Link to={`/rockets/${rocket.rocket_id}`} className="readMore">
          Rocket Info
        </Link>
      </div>
    );
  }

  componentDidMount = () => {
    const launch = this.props;
    axios
      .get(`https://api.spacexdata.com/v3/launches/${launch.flight_number}`)
      .then(res => {
        this.setState({
          launch: res.data,
          launch_site: res.data.launch_site,
          links: res.data.links,
          rocket: res.data.rocket
        });
      });
  };
}

export default LaunchPage;
