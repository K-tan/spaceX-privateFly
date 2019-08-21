import React, { Component } from "react";
import "../css/LaunchPage.css";
import axios from "axios";
import { Link } from "@reach/router";

class LaunchPage extends Component {
  state = {
    launch: {},
    launch_site: [],
    links: [],
    rocket: [],
    isloading: true
  };

  render() {
    const { launch, launch_site, links, rocket, isloading } = this.state;
    return isloading ? (
      <h1>Loading...</h1>
    ) : (
      <div className="launch">
        <img alt="mission_patch" src={links.mission_patch_small} />
        <p>
          <strong>Launch Site:</strong> {launch_site.site_name}
        </p>
        <p>{launch.details}</p>
        <Link to={`/rockets/${rocket.rocket_id}`} className="readMore">
          <button className="moreInfo">Rocket Information</button>
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
          rocket: res.data.rocket,
          isloading: false
        });
      });
  };
}

export default LaunchPage;
