import { useState } from 'react'
 
const StatisticLine = ({value, text}) => {
  return (
    <tr>
      <td>
        {text}
      </td>
      <td>
       {value}
      </td>
    </tr>
)}
 
const Button = ({onClick, text}) => (
  <button onClick={onClick}> {text} </button>
)
 
const Statistics = ({good, bad, neutral}) => {
  const average = (good-bad)/(good+bad+neutral)
  const positive = good/(good+bad+neutral)*100
  if (good || bad || neutral) {
  return (
    <>
      <p>average {average}</p>
      <p>positive {positive}%</p>
    </>
  )
  }
  else {
    return (
      <p>No feedback given</p>
    )
  }
}
 
const App = () => {
  // select random anecdote
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
  const [points, setPoints] = useState([])
  const [selected, setSelected] = useState(0)
 
  const random = () =>
    setSelected(Math.floor(Math.random() * anecdotes.length))
 
  const vote = () => {
    let votes = points[selected] + 1;
    console.log(points[selected])
    if (points[selected] === undefined) {
      votes = 1
    }
    let copy = points
    copy[selected] = votes
    console.log(votes)
    setPoints(points => ({
      ...points,
      [selected]: votes
    }))
    console.log(points)
    mostVotes(copy);
  }
 
  const mostVotes = (points) => {
    let min = 0
    let post = 0
    for (const point in points) {
      let latest = points[point]
      if (latest > min) {
        min = latest
        post = point
      }
    }
    setBest(post)
  }
 
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
 
  const [best, setBest]  = useState(0)
 
  const voteGood = () => {
    setGood(good + 1)
  }
  const voteNeutral = () => {
    setNeutral(neutral + 1)
  }
  const voteBad = () => {
    setBad(bad + 1)
  }
  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={voteGood} text={"good"}/>
      <Button onClick={voteNeutral} text={"neutral"}/>
      <Button onClick={voteBad} text={"bad"}/>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text={"good"} value={good}/>
          <StatisticLine text={"neutral"} value={neutral}/>
          <StatisticLine text={"bad"} value={bad}/>
        </tbody>
      </table>
      <Statistics good={good} neutral={neutral} bad={bad}/>
      <Button onClick={random} text="Random quote"/>
      <Button onClick={vote} text="vote"/>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[best]}</p>      <p>has {points[best]} votes</p>
    </div>
  )
}
 
export default App
 
