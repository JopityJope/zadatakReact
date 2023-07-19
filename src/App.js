import React, { Component } from "react";
import Imeigodine from "./Imeigodine";
import ImeigodineKlasa from "./ImeigodineKlasa";
import ImeGodineChildren from "./ImeGodineChildren";
import Button from "./Button";

export class App extends Component {
  state = {
    user1: {
      ime: "Josipa",
      dob: 28,
    },
    user2: {
      ime: "Tea",
      dob: 27,
    },
    user3: {
      ime: "Boris",
      dob: 31,
    },
    randomVar: "I volim povijest.",
  };

  dodajGodine = function () {
    this.setState({ user1: { ime: "Josipa", dob: this.state.user1.dob + 1 } });
  };
  render() {
    return (
      <div>
        <Imeigodine ime={this.state.user1.ime} godine={this.state.user1.dob} />
        <ImeigodineKlasa
          ime={this.state.user2.ime}
          godine={this.state.user2.dob}
        />
        <ImeGodineChildren
          ime={this.state.user3.ime}
          godine={this.state.user3.dob}
          children={this.state.randomVar}
        ></ImeGodineChildren>
        <br />
        <Button counterFunkcija={this.dodajGodine} tekst="Dodaj godine" />
      </div>
    );
  }
}

export default App;
