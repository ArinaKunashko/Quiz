import React from 'react'
import './App.css'
import AllQuestions from './Themes/AllQuestions'
import { Routes, Route, HashRouter } from 'react-router-dom'
import Home from './Home'
import * as Quizes from './quizes'



function AppJs() {
  const quizes = Object.values(Quizes)

  return (
    <HashRouter>
      <div className='app-wrapper'>
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/' element={<Home />} />
            {quizes.map(q => (
              <Route key={q.path} path={q.path} element={<AllQuestions questions={q.questions} name={q.name} />} />
            ))}

          </Routes>
        </div>
      </div>
      </HashRouter>
  )
}

export default AppJs
