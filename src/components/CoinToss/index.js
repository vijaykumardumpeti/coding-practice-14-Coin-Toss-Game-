import {Component} from 'react'
import './index.css'

export default class CoinToss extends Component {
  state = {
    total: 0,
    heads: 0,
    tails: 0,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  render() {
    const {total, heads, tails, imageUrl} = this.state

    this.onGenerateRandom = () => {
      const tossResult = Math.floor(Math.random() * 2)

      if (tossResult === 0) {
        this.setState({
          imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
        })
        this.setState(prevState => ({heads: prevState.heads + 1}))
        this.setState(prevState => ({total: prevState.total + 1}))
      }
      if (tossResult === 1) {
        this.setState({
          imageUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
        })
        this.setState(prevState => ({tails: prevState.tails + 1}))
        this.setState(prevState => ({total: prevState.total + 1}))
      }
    }

    return (
      <div className="bg-container">
        <div className="white-container">
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img className="toss-icon" alt="toss result" src={imageUrl} />
          <button
            onClick={this.onGenerateRandom}
            className="button-style"
            type="button"
          >
            Toss Coin
          </button>
          <div className="readings-container">
            <p className="para-reading">Total:{total}</p>
            <p className="para-reading">Heads:{heads}</p>
            <p className="para-reading">Tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
