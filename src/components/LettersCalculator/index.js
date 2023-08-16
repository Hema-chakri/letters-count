// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  onChangeText = () => {
    this.setState(prevCount => ({
      count: prevCount.count + 1,
    }))
  }

  render() {
    const {count} = this.state
    return (
      <div className="app-container">
        <div>
          <h1 className="heading">Calculate the Letters you enter</h1>
          <div className="input">
            <label htmlFor="phrase">Enter the phrase</label>
            <input
              id="phrase"
              type="text"
              className="letters"
              onChange={this.onChangeText}
              placeholder="Enter the phrase"
            />
          </div>
          <p className="count-letters">No.of letters: {count}</p>
        </div>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
        />
      </div>
    )
  }
}

export default LettersCalculator
