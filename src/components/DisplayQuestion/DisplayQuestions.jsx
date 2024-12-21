import React, { useState } from 'react'
import "./DisplayQuestions.css"
import { useQuestion } from '../../Context/QuestionContext'

const DisplayQuestions = () => {
  const [answer, setAnswer] = useState("")
  const {questionWithAnswer} = useQuestion();
  console.log(questionWithAnswer);
  const selectAnswer = (val, id)=>{
    setAnswer(prev=>{
      return {...prev, id: val}
    } )
    console.log(val, id);
  }
  const submitTest = ()=>{
  }

  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <th>No:</th>
            <th rowSpan={3}>Question</th>
            <th>Option A</th>
            <th>Option B</th>
            <th>Option C</th>
            <th>Option D</th>
            <th>Submit</th>
          </tr>
        </thead>
        <tbody>
          {questionWithAnswer.map((data, id)=>(
          <tr key={data.id}>
            <td >{id+1}</td>
            <td >{data.question}</td>
            {data.options.map((option, i)=>(
              <td key={i}>{option.key}. {option.val}
              <input value={option.key} onChange={e=>selectAnswer(e.target.value, data.id)} type="radio" name={data.id}/></td>
            ))}
          </tr>
          ))} <button onClick={submitTest}>Answer</button>
        </tbody>
      </table>
        Display Questions
    </div>
  )
}

export default DisplayQuestions;