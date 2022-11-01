import React from 'react'
import { useNavigate } from 'react-router-dom'
import s from './App.css'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

const Home = () => {

const navigate = useNavigate()
return <div> 
    <h1 className={s.heading}> Choose a test topic </h1>
    <Stack direction="row" spacing={2}>
        <Button variant="contained" color='success' size='large' onClick={() => navigate('/jsQuestions')}> JS </Button>
        <Button variant="contained" color='success' size='large' onClick={() => navigate('/cssQuestions')}> CSS </Button>
        <Button variant="contained" color='success' size='large' onClick={() => navigate('/htmlQuestions')}> HTML </Button>
        <Button variant="contained" color='success' size='large' onClick={() => navigate('/reactQuestions')}> React </Button>
    </Stack>
</div>
}

export default Home