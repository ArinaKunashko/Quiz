import React, { useState } from "react"
import styles from "../App.css"
import LinearProgress from '@mui/material/LinearProgress'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import gifTarget from '../assets/images/target.gif'
import gifApple from '../assets/images/apple.gif'
import gifHacker from '../assets/images/hacker.gif'
import gifVerified from '../assets/images/verified.gif'
import gifIdea from '../assets/images/idea.gif'
import gifDiploma from '../assets/images/diploma.gif'
import gifMouse from '../assets/images/mouse.gif'

const AllQuestions = ({ name, questions }) => {

  const Result = ({ correct }) => {
    let gif = [gifTarget, gifApple, gifHacker, gifVerified, gifIdea, gifDiploma, gifMouse]
    let randGif = Math.floor(Math.random() * gif.length)
    const resultGif = gif[randGif]

    return (
      <div className="result">


        <img src={resultGif} />

        <h2> Ваш результат: {correct} правильных ответов из {questions.length} </h2>
        <a href="/Quiz">
          <Button color='success' size='large' variant='contained'>Попробовать снова</Button>
        </a>
      </div>
    )
  }

  const Game = ({ question, onClickVariant, step }) => {

    const percentage = Math.round((step / questions.length) * 100)

    return (
      <>
        <div className="progress">

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1 }}>
              <LinearProgress variant="determinate" 
              value={percentage} 
              color='success' 
              sx={{height: 17, borderRadius: 6}} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
              <Typography variant="body2" color="text.secondary">{`${Math.round((step / questions.length) * 100)}%`}</Typography>
            </Box>
          </Box>

        </div>
        <h1>{question.title}</h1>
        <ul>
          {
            question.variants.map((text, index) => (
              <li onClick={() => onClickVariant(index)} key={text}> {text}  </li>
            ))
          }
        </ul>
      </>
    )
  }



  const [step, setStep] = useState(0)
  const [correct, setCorrect] = useState(0)

  const question = questions[step]

  const onClickVariant = (index) => {
    setStep(step + 1)
    if (index == question.correct) {
      setCorrect(correct + 1)
    }
  }

  return (
    <div className="App">
      <h2>{name}</h2>
      {
        step !== questions.length
          ? (<Game step={step} question={question} onClickVariant={onClickVariant} />
          ) : (
            <Result correct={correct} />
          )
      }
    </div>
  )


}
export default AllQuestions

