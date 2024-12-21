// const questionContext = createContext()
import React, { createContext, useContext, useState } from "react";
const questionContext = createContext()

const QuestionContexProvider = ({children})=>{
    const [questionWithAnswer, setQuestionWithAnswer] = useState([]);
    const addQuestion = question =>{
        setQuestionWithAnswer(prev=>[...prev, question]);
        console.log(question);
    }
    // const targetRef = useRef(null)
    // const scrollToTarget = ()=>{
    //     targetRef.current.scrollIntoView({behaviour:"smooth"})
    // }
    return(
        <questionContext.Provider value={{questionWithAnswer, addQuestion}}>
            {children}
        </questionContext.Provider>
    )
}
const useQuestion = ()=>{
    return useContext(questionContext)
}
export { QuestionContexProvider, useQuestion };