import React, { Component } from "react";

class Modal extends Component {
  state = {
    firstName: "",
    fineSum: 0,
    CarNumber: "",
  };

  hadlerCancel = () => {
    this.props.cancelModal();
  };

  componentWillUnmount() {
    this.setState({ firstName: "", fineSum: 0, carNumber: "" });
  }

  SaveBait = () => {
    if (
      this.state.firstName !== "" &&
      this.state.fineSum !== 0 &&
      this.state.CarNumber !== ""
    ) {
      this.props.cancelModal();
      this.props.BaitsAdd(this.state);
    } else {
      alert("Iltimos malumotlarni to'liq kiriting 😁!");
    }
  };

  render() {
    const { firstName, CarNumber, fineSum } = this.state;
    return (
      <div className="container">
        <form className="d-flex flex-column m-5">
          <div className="d-flex justify-content-evenly ">
            <div
              className="form-floating mb-3 w-1/2"
              style={{ width: "50%", marginRight: "1rem" }}
            >
              <input
                type="text"
                className="form-control"
                id="firstName"
                placeholder="Doe"
                value={firstName}
                onChange={(e) =>
                  this.setState({
                    firstName: e.target.value,
                  })
                }
              />
              <label htmlFor="firstName">👦First Name</label>
            </div>
            <div className="form-floating w-1/2" style={{ width: "50%" }}>
              <input
                type="text"
                className="form-control"
                id="CarNumber"
                placeholder="Car Number"
                value={CarNumber}
                onChange={(e) =>
                  this.setState({
                    CarNumber: e.target.value,
                  })
                }
              />
              <label htmlFor="CarNumber"> 🚗 Car Number</label>
            </div>
          </div>
          <div className="d-flex justify-content-center my-5">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-danger"
                onClick={(e) =>
                  this.setState({
                    fineSum: fineSum - 1,
                  })
                }
              >
                -
              </button>
              <button type="button" className="btn btn-light" disabled>
                💰 {fineSum} .000 so'm
              </button>
              <button
                type="button"
                className="btn btn-success"
                onClick={(e) => {
                  this.setState({
                    fineSum: fineSum + 1,
                  });
                }}
              >
                +
              </button>
            </div>
          </div>
          <div className="d-flex justify-content-center ">
            <button
              type="button"
              className="btn btn-danger"
              style={{ width: "50%", marginRight: "2rem" }}
              onClick={this.hadlerCancel}
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-success"
              style={{ width: "50%" }}
              onClick={this.SaveBait}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Modal;
