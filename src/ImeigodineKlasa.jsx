import React, { Component } from "react";

export class ImeigodineKlasa extends Component {
  render() {
    const { name, godine } = this.props;
    return (
      <p>
        Korisnik/ca {name} ima {godine} godina.
      </p>
    );
  }
}

export default ImeigodineKlasa;
