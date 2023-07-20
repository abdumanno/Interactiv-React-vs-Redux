import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      interval: "",
      intervalState: [],
      isDisabled: false,
    };
  }

  // Function

  NolCount = (value) => {
    if (value < 10) {
      return `0${value}`;
    } else {
      return value;
    }
  };

  countStart = () => {
    let interval = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
    this.setState({ interval, isDisabled: true });
  };

  countStop = () => {
    clearInterval(this.state.interval);
  };

  countInterval = () => {
    this.setState({
      intervalState: [
        ...this.state.intervalState,
        `${this.NolCount(Math.floor(this.state.count / 3600))}:
        ${this.NolCount(
          Math.floor(this.state.count / 60) % 60
        )}:${this.NolCount(this.state.count % 60)}`,
      ],
    });
  };

  countClear = () => {
    this.setState({ count: 0, isDisabled: false });
    this.countStop();
  };

  render() {
    const { count, intervalState, isDisabled } = this.state;
    return (
      <div className="app">
        <div className="date">
          <div className="logo">
            <span>Online</span>
            <p>StopWatch</p>
          </div>
          <div className="term">
            <div className="count">
              {this.NolCount(Math.floor(count / 3600))}
            </div>
            <div className="name">HOURS</div>
          </div>
          <div className="term">
            <div className="count">
              {this.NolCount(Math.floor(count / 60) % 60)}
            </div>
            <div className="name">MINUTS</div>
          </div>
          <div className="term">
            <div className="count">{this.NolCount(count % 60)}</div>
            <div className="name">SECONDS</div>
          </div>
        </div>
        <div className="buttonGroup">
          <div>
            <button
              className={`btn btn-success`}
              onClick={this.countStart}
              disabled={isDisabled}
            >
              Start
            </button>
          </div>
          <div>
            <button
              className={`btn btn-danger`}
              onClick={this.countStop}
              disabled={!isDisabled}
            >
              Stop
            </button>
          </div>
          <div>
            <button
              className={`btn btn-secondary`}
              onClick={this.countInterval}
            >
              Interval
            </button>
          </div>
          <div>
            <button className={`btn btn-warning`} onClick={this.countClear}>
              Clear
            </button>
          </div>
        </div>
        <div className="interval">
          <h1>Interval</h1>
          {intervalState.map((item, index) => (
            <div key={index}>
              <p>{String(index + 1) + " =>"} &nbsp;</p>
              <p key={item}>{item}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
