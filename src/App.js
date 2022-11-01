import React from 'react'
import './App.css'
import AllQuestions from './Themes/AllQuestions'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Home'
import { jsQuiz, htmlQuiz, reactQuiz, cssQuiz } from './quizes'


function AppJs () {
  return (
 <BrowserRouter>
      <div className='app-wrapper'>
        <div className='app-wrapper-content'>
            <Routes>
              <Route path='/Quiz' element={<Home />} />
              <Route path='/jsQuestions' element={<AllQuestions questions={jsQuiz.questions} name={jsQuiz.name} />} />
              <Route path='/cssQuestions' element={<AllQuestions questions={cssQuiz.questions} name={cssQuiz.name} />} />
              <Route path='/htmlQuestions' element={<AllQuestions questions={htmlQuiz.questions} name={htmlQuiz.name} />} />
              <Route path='/reactQuestions' element={<AllQuestions questions={reactQuiz.questions} name={reactQuiz.name} />} />
            </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default AppJs

