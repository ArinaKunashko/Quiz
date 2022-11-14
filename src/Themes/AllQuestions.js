import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'

const AllQuestions = ({ name, questions }) => {
  const navigate = useNavigate()
  const Result = ({ correct }) => {
    let gif = [gifTarget, gifApple, gifHacker, gifVerified, gifIdea, gifDiploma, gifMouse]
    let randGif = Math.floor(Math.random() * gif.length)
    const resultGif = gif[randGif]

    return (
      <div className='result'>
        <img src={resultGif} />
        <h2> Your result is {correct} correct answers out of {questions.length} </h2>
        <Button variant="contained" color='success' size='large' onClick={() => navigate('/')}> Try again </Button>
      </div>
    )
  }

  const Game = ({ question, onClickVariant, step }) => {

    const percentage = Math.round((step / questions.length) * 100)

    return (
      <>
        <div>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1 }}>
              <LinearProgress variant='determinate'
                value={percentage}
                color='success'
                sx={{ height: 17, borderRadius: 6 }} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
              <Typography variant='body2'
                color='text.secondary'>{`${Math.round((step / questions.length) * 100)}%`}
              </Typography>
            </Box>
          </Box>
        </div>
        <h1>{question.title}</h1>
        <List>
          {
            question.variants.map((text, index) => (
              <ListItem key={index} >
                <ListItemButton onClick={() => onClickVariant(index)}
                  sx={{ border: '1px solid #808080', borderRadius: '9px' }}>
                  <ListItemText> {text} </ListItemText>
                </ListItemButton>
              </ListItem>
            ))
          }
        </List>
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
    <div className='App'>
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
