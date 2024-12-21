import React from 'react'
import "./SetQuestions.css"
import { useState } from 'react'
import { useQuestion } from '../../Context/QuestionContext'

const SetQuestions = () => {

    const {addQuestion} = useQuestion();

    const [newQuestion, setnewQuestion] = useState("");
    const [optionA, setOptionA] = useState("");
    const [optionB, setOptionB] = useState("");
    const [optionC, setOptionC] = useState("");
    const [optionD, setOptionD] = useState("");
    const [answer, setAnswer] = useState("");
    const addNewQuestion = () =>{
        let allAnswerVar = {id: `ql${Math.floor(Math.random()*100000)}`, question: newQuestion, options:[{key:"a", val:optionA}, {key:"b", val:optionB}, {key:"c", val:optionC}, {key:"d", val:optionD}], correctAnswer: answer} 
        addQuestion(allAnswerVar)
        setnewQuestion("");
        setOptionA("");
        setOptionB("");
        setOptionC("");
        setOptionD("");
        alert("Question added succesfully");
    }
  return (
    <div className='setquestion'>
      <h1>set question page</h1>
      <div className="question-container">
        <textarea value={newQuestion} onInput={e=>setnewQuestion(e.target.value)} rows={5} placeholder='Your question' name="" id=""></textarea>
        <input value={optionA} onInput={e=>setOptionA(e.target.value)} type="text" placeholder='option A'/>
        <input value={optionB} onInput={e=>setOptionB(e.target.value)} type="text" placeholder='option B'/>
        <input value={optionC} onInput={e=>setOptionC(e.target.value)} type="text" placeholder='option C'/>
        <input value={optionD} onInput={e=>setOptionD(e.target.value)} type="text" placeholder='option D'/>
        <select onChange={e=>setAnswer(e.target.value)}>
          <option>Answer</option>
          <option value="a">A</option>
          <option value="b">B</option>
          <option value="c">C</option>
          <option value="d">D</option>
        </select>
        <button onClick={addNewQuestion}>Add new Question</button>
      </div>
    </div>
  )
}

export default SetQuestions;