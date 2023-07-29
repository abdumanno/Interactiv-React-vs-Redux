import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";

class App extends Component {
  state = {
    text: "",
    checked: false,
  };

  ChangeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handlerChangeInput = (e) => {
    e.preventDefault();

    let regEx = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

    if (!regEx.test(this.state.text)) {
      toast.warn("Bu yerga faqat email manzil kiritishingizni so'raymiz", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    if (!this.state.checked) {
      toast.warn("Bizning qoidalarimizga amal qiling!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    if (regEx.test(this.state.text) && this.state.checked) {
      toast.success("Siz muvaffaqiyatli o'tdingiz! 👏🏻👏🏻", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      this.setState({
        text: "",
        checked: false,
      });
    }
  };

  render() {
    const { text, checked } = this.state;
    return (
      <div className="row">
        <form className="form">
          <div className="h1">
            <h1>Contact us</h1>
          </div>
          <div className="email">
            <label htmlFor="email">Email </label>
            <input
              type="text"
              placeholder="Enter your email...."
              value={text}
              name="text"
              onChange={this.ChangeInput}
            />
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              name="checked"
              id="checkbox"
              value={checked}
              onClick={this.ChangeInput}
            />
            <label htmlFor="checkbox">Terms & Conditions</label>
          </div>
          <div className="button">
            <button
              type="submit"
              className="btn btn-success"
              onClick={this.handlerChangeInput}
            >
              Submit
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    );
  }
}

export default App;
