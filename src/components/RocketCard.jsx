import React, { Component } from "react";
import axios from "axios";
import "../css/RocketCard.css";

class RocketCard extends Component {
  state = {
    rocket: {},
    height: {},
    mass: {},
    images: []
  };

  render() {
    const { rocket, height, mass, images } = this.state;
    return (
      <div className="main">
        <img className="rocket_image" alt="rocket_image" src={images[0]} />
        <p className="rocketPTag">
          <strong>ID:</strong> {rocket.id}
        </p>
        <p className="rocketPTag">
          <strong>Name:</strong> {rocket.rocket_name}
        </p>
        <p className="rocketPTag">
          <strong>feet:</strong> {height.feet} <strong>meters:</strong>
          {height.meters}
        </p>
        <p className="rocketPTag">
          <strong>kg:</strong> {mass.kg} <strong>lb:</strong> {mass.lb}
        </p>
        <p className="rocketPTag">
          <strong>Stages:</strong> {rocket.stages}
        </p>
        <p className="rocket_description">{rocket.description}</p>
      </div>
    );
  }

  componentDidMount = () => {
    const rocket = this.props;
    axios
      .get(`https://api.spacexdata.com/v3/rockets/${rocket.rocket_id}`)
      .then(res => {
        console.log(res);
        this.setState({
          rocket: res.data,
          height: res.data.height,
          mass: res.data.mass,
          images: res.data.flickr_images
        });
      });
  };
}

export default RocketCard;
