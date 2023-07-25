import React, { Component } from "react";
import Modal from "./modal";

class App extends Component {
  state = {
    baits: [],
    modal: false,
  };

  baitsInitialState = [
    {
      firstName: "Jasur",
      CarNumber: "Z045XA",
      fineSum: "20",
    },
    {
      firstName: "G'ulom",
      CarNumber: "F445KA",
      fineSum: "10",
    },
    {
      firstName: "Akbar",
      CarNumber: "G345YA",
      fineSum: "500",
    },
    {
      firstName: "Sarvar",
      CarNumber: "V255YA",
      fineSum: "200",
    },
  ];

  componentDidMount() {
    this.setState({
      baits: this.baitsInitialState,
    });
  }

  RemoveBaits = (e) => {
    this.setState({
      baits: this.state.baits.filter((item, index) => index !== e),
    });
  };

  BaitsAdd = (value) => {
    this.baitsInitialState.push(value);
    this.setState({
      baits: this.baitsInitialState,
    });
  };

  cancelModal = () => {
    this.setState({ modal: false });
  };

  render() {
    const { modal, baits } = this.state;
    return (
      <div className="container my-5">
        <div>
          <h2 className="text-center">📡 Radar o'ljasi</h2>
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => this.setState({ modal: true })}
        >
          Add o'lja 👻
        </button>
        <div>
          {modal ? (
            <Modal
              baits={baits}
              setState={this.setState}
              BaitsAdd={this.BaitsAdd}
              cancelModal={this.cancelModal}
            />
          ) : (
            ""
          )}
        </div>
        <div className="my-5">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>FirstName</th>
                <th>Car Number</th>
                <th>Fine</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {baits.map((item, index) => (
                <tr key={index + "salom"}>
                  <td>{index + 1}</td>
                  <td>{item.firstName}</td>
                  <td>{item.CarNumber}</td>
                  <td>💰 {item.fineSum} 000 so'm</td>
                  <td>
                    <button
                      className="btn btn-danger cursor-pointer"
                      onClick={() => this.RemoveBaits(index)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
