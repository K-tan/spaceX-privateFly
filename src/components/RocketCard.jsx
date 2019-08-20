import React, { Component } from "react";
import axios from "axios";

class RocketCard extends Component {
  state = {
    rocket: {},
    height: {},
    mass: {}
  };

  render() {
    const { rocket, height, mass } = this.state;
    return (
      <div>
        <p>{rocket.id}</p>
        <p>
          feet: {height.feet} meters: {height.meters}
        </p>
        <p>
          kg: {mass.kg} lb: {mass.lb}
        </p>
        <p>stages: {rocket.stages}</p>
        <p>{rocket.description}</p>
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
          mass: res.data.mass
        });
      });
  };
}

export default RocketCard;
