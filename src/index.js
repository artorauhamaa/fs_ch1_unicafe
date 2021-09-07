import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticsLine = (props) => {
  return (
    <tr>
    <td> {props.text} </td>
    <td> {props.value} </td>
    </tr>
  )
}

const Statistics = (props) => {
  const tot = props.gvalue+props.nvalue+props.bvalue
  if(tot===0) {
    return (
    <div>
      <h1> Statistics </h1>
      <div> No feedback provided yet, click a button </div>
    </div>
    )
  }

  const avg = ((props.gvalue * 1) + (props.nvalue*0) +(props.bvalue*-1))/tot
  return (
  <div>
      <h1> Statistics </h1>
      <table>
      <tbody>
      <StatisticsLine text="Good" value ={props.gvalue} />
      <StatisticsLine text="Neutral" value ={props.nvalue} />
      <StatisticsLine text="Bad" value ={props.bvalue} />
      <StatisticsLine text="All" value ={tot} />
      <StatisticsLine text="Average" value ={avg} />
      <StatisticsLine text="Positive" value ={props.gvalue/tot} />
      </tbody>
      </table>
  </div>
  )
} 

const App = props => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => { setGood(good + 1)}
  const handleNeutralClick = () => { setNeutral(neutral + 1)}
  const handleBadClick = () => { setBad(bad + 1)}

  return (
    <div>
      <h1>Give Feedback </h1>
      <Button handleClick={()=>handleGoodClick()} text="Good"/>
      <button onClick={handleNeutralClick}>Neutral</button>
      <button onClick={handleBadClick}>Bad</button>
      <Statistics gvalue={good} nvalue={neutral} bvalue = {bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)