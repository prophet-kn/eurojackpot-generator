import React, { Component } from 'react'
import './style.css'
import _ from 'lodash'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      generate: false,
      numbersFive: [],
      randomizeFive: 0,
      numbersTwo: [],
      randomizeTwo: 0,
      five: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
      two: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }

    this.rollNumbers = this.rollNumbers.bind(this)
    this.generateButton = this.generateButton.bind(this)
    this.generateFive = this.generateFive.bind(this)
    this.generateTwo = this.generateTwo.bind(this)
    this.cleanStates = this.cleanStates.bind(this)
  }

  generateTwo() {
    let random = this.state.two,
        shuff = _.shuffle(random)

    this.setState({
      numbersTwo: _.slice(shuff, 0, 2)
    })
  }

  generateFive() {
    let random = this.state.five,
        shuff = _.shuffle(random)

    this.setState({
      numbersFive: _.slice(shuff, 0, 5)
    })
  }

  rollNumbers() {
    this.setState({generate: true})
    this.generateTwo()
    this.generateFive()
  }

  cleanStates() {
    this.setState({
      numbersFive: [],
      randomizeFive:  0,
      numbersTwo: [],
      numbersTwoOne: 0
    })

    this.rollNumbers()
  }

  generateButton() {
    const five = this.state.numbersFive
    const two = this.state.numbersTwo

    return (
      <div className={'ejp-main-generated'}>
        <div className={'ejp-main-generated-numbers'}>
          {five.sort((a, b) => a - b).map((e, i) => {
            return (
              <span key={i}>{e}</span>
            )
          })}
        </div>
        <div className={'ejp-main-generated-numbers'}>
          {two.sort((a, b) => a - b).map((e, i) => {
            return (
              <span key={i}>{e}</span>
            )
          })}
        </div>
        <div className={'ejp-main-return'} onClick={(e) => this.cleanStates()}>
          <svg width="100" height="100" viewBox="0 0 14 16"><path fillRule="evenodd" d="M8 9H6V4h2v5zm-2 3h2v-2H6v2zm6.33-2H10l1.5 1.5c-1.05 1.33-2.67 2.2-4.5 2.2A5.71 5.71 0 011.3 8c0-.34.03-.67.09-1H.08C.03 7.33 0 7.66 0 8c0 3.86 3.14 7 7 7 2.19 0 4.13-1.02 5.41-2.59L14 14v-4h-1.67zM1.67 6H4L2.5 4.5C3.55 3.17 5.17 2.3 7 2.3c3.14 0 5.7 2.56 5.7 5.7 0 .34-.03.67-.09 1h1.31c.05-.33.08-.66.08-1 0-3.86-3.14-7-7-7-2.19 0-4.13 1.02-5.41 2.59L0 2v4h1.67z"></path></svg>
        </div>
      </div>
    )
  }

  render() {
    return (
     <div className={"ejp-main"}>
       {this.generateButton()}
     </div>
    )
  }
}

export default App