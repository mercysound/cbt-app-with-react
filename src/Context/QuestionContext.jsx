// const questionContext = createContext()
import React, { createContext, useContext, useState } from "react";
const questionContext = createContext()

const QuestionContexProvider = ({children})=>{
    const [questionWithAnswers, setQuestionWithAnswer] = useState([]);
    const addQuestion = question =>{
        setQuestionWithAnswer(prev=>[...prev, question]);
        console.log(question);
    }
    // const targetRef = useRef(null)
    // const scrollToTarget = ()=>{
    //     targetRef.current.scrollIntoView({behaviour:"smooth"})
    // }
    return(
        <questionContext.Provider value={{questionWithAnswers, addQuestion}}>
            {children}
        </questionContext.Provider>
    )
}
const useQuestion = ()=>{
    return useContext(questionContext)
}
export { QuestionContexProvider, useQuestion };