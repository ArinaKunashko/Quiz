import React from "react"
import { useNavigate } from "react-router-dom"
import s from "./App.css"


const Home = () => {

const navigate = useNavigate()
return <div> 
    <h1 className={s.heading}> Выберите тему теста </h1>
<button onClick={ () => navigate ('/jsQuestions') }> JS </button>
<button onClick={ () => navigate ('/cssQuestions') }> CSS </button>
<button onClick={ () => navigate ('/htmlQuestions') }> HTML </button> 
<button onClick={ () => navigate ('/reactQuestions') }> React </button> 
</div>
}

export default Home