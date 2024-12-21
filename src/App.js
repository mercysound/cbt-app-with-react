import React from 'react'
import SetQuestions from './components/SetQuestion/SetQuestions';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Navbar from './components/Navbar/Navbar';
import DisplayQuestions from './components/DisplayQuestion/DisplayQuestions';
// import { QuestionContexProvider } from './Context/QuestionContext';
const App = () => {
  return (
    <div className='App'>
    {/* <QuestionContexProvider> */}
      <Navbar/>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          {/* <Route path="/navbar" element={}/> */}
          <Route path="/displayquestions" element={<DisplayQuestions/>}/>
          <Route path="/setquestions" element={<SetQuestions/>}/>
        </Routes>
    {/* </QuestionContexProvider> */}

    </div>
  )
}

export default App;