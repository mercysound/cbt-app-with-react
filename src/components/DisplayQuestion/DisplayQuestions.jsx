import React, { useState } from 'react'
import "./DisplayQuestions.css"
import { useQuestion } from '../../Context/QuestionContext'

const DisplayQuestions = () => {

  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState({});
  const {questionWithAnswers} = useQuestion("");
  
  const selectAnswer = (inputValuePick, id, correctAnswer)=>{

    let answerPick = correctAnswer === inputValuePick ? 1 : 0;

    if(answerPick == 1 && !answers[id]){
      setScore(prev=>prev+1)
    }else if(answers[id] && !answerPick){
      setScore(prev => prev -1);
    }

    setAnswers(prev=>{
      return {...prev, [id]: answerPick}
    } )
  }
  
  // console.log(correct);
  
  const submitTest = ()=>{
    // let scores = 0;
    // for(let ans in answers){
    //   for (let index = 0; index < questionWithAnswers.length; index++){
    //     if(ans === questionWithAnswers[index].id && answers[ans] === questionWithAnswers[index].correctAnswer){
    //       scores++
    //       alert("working")
    //     }
    //   }
    // }
    // setScore(scores)
  }

  return (
    <div>
      <h3>Score is {score}</h3>
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
          {questionWithAnswers.map((data, id)=>(
          <tr key={data.id}>
            <td >{id+1}</td>
            <td >{data.question}</td>
            {data.options.map((option, i)=>(
              <td key={i}>{option.key}. {option.val}
              <input value={option.key} onChange={e=>selectAnswer(e.target.value, data.id, data.correctAnswer)} type="radio" name={data.id}/></td>
            ))}
          </tr>
          ))}
          <tr>
          <td><button onClick={submitTest}>Answer</button></td>
          </tr>
        </tbody>
      </table>
        Display Questions
    </div>
  )
}

export default DisplayQuestions;