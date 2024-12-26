import React, { useState } from 'react'
import "./DisplayQuestions.css"
import { useQuestion } from '../../Context/QuestionContext'

const DisplayQuestions = () => {

  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState({});
  const {questionWithAnswers} = useQuestion("");
  const [showScore, setShowScore] = useState(false)

  const selectAnswer = (inputValuePick, id, correctAnswer)=>{
    let answerPick = correctAnswer === inputValuePick ? 1 : 0;
    // other way to run it
    // if(answerPick === 1 && !answers[id]){
    //   setScore(prev=>prev+1)
    // }else if(answers[id] && !answerPick){
    //   console.log(answers[id]);
    //   console.log(answers);
    //   setScore(prev => prev -1);
    // }
    setShowScore(false)
    setScore(prev=>{
      if(answerPick === 1 && !answers[id]) return prev + 1
      else if(!answerPick && answers[id]) return prev -1
      else return prev
    })
    setAnswers(prev=>{
      return {...prev, [id]: answerPick}
    } );
  }
  
  // console.log(correct);
  
  const submitTest = ()=>{
    setShowScore(true)
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
      {/* <h3>Score is {score}</h3> */}
      {/*using using short circuit evaluation (conditional render) javascript feature*/}
      {showScore && <h3>Your score is {score}</h3>}
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
          <td><button onClick={submitTest}>Submit</button></td>
          </tr>
        </tbody>
      </table>
        Display Questions
    </div>
  )
}

export default DisplayQuestions;