import React from 'react'
import { useNavigate } from 'react-router-dom'
import s from './App.css'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import * as Quizes from './quizes'

const Home = () => {
    const quizes = Object.values(Quizes)
    const navigate = useNavigate()
    return <div>
        <h1 className={s.heading}> Choose a test topic </h1>
        <Stack direction='row' spacing={2}>
            {quizes
                .sort((a, b) => a.position - b.position )
                .map(q => (
                    <Button key={q.title} variant="contained" color='success' size='large' onClick={() => navigate(q.path)}>{q.title}</Button>
                ))}
        </Stack>
    </div>
}

export default Home