// Write your code here
import {Component} from 'react'
import './index.css'

class StopWatch extends Component {
  state = {timerSeconds: 0}

  //   componentDidMount() {
  //     const {isRunning} = this.state
  //     if (isRunning) {
  //       this.timerId = setInterval(this.tick, 1000)
  //       console.log('running')
  //     }
  //     console.log('componentDidMount called')
  //   }

  tick = () => {
    this.setState(prevState => ({timerSeconds: prevState.timerSeconds + 1}))
  }

  clearTimerInterval = () => clearInterval(this.timerId)

  onClickStart = () => {
    this.timerId = setInterval(this.tick, 1000)
  }

  onClickStop = () => {
    this.clearTimerInterval()
  }

  onClickReset = () => {
    this.setState({timerSeconds: 0})
    this.clearTimerInterval()
  }

  getTimerDisplay = () => {
    const {timerSeconds} = this.state
    const minutes = Math.floor(timerSeconds / 60)
    const seconds = Math.floor(timerSeconds % 60)
    const stringfiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringfiedSeconds = seconds > 9 ? seconds : `0${seconds}`
    return `${stringfiedMinutes}:${stringfiedSeconds}`
  }

  render() {
    return (
      <div className="app-container">
        <div className="card-contaner">
          <h1 className="heading">Stopwatch</h1>
          <div className="card">
            <div className="timer-titel">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p className="title">Timer</p>
            </div>
            <h1 className="heading">{this.getTimerDisplay()}</h1>
            <div className="button-container">
              <button
                className="btn start-button"
                type="button"
                onClick={this.onClickStart}
              >
                Start
              </button>
              <button
                className="btn stop-button"
                type="button"
                onClick={this.onClickStop}
              >
                Stop
              </button>
              <button
                className="btn reset-button"
                type="button"
                onClick={this.onClickReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default StopWatch
