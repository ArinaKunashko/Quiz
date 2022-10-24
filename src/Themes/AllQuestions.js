import React from "react";
import s from "../App.css"

const allQuestions = ({name, questions}) => {
    
  
    const Result = ({ correct }) => {
      return (
        <div className="result">
          <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
          <h2> Ваш результат: {correct} правильных ответов из {questions.length} </h2>
          <a href="/">
            <button className={s.tryagain}>Попробовать снова</button>
          </a>
        </div>
      );
    }


    
    const Game = ({ question, onClickVariant, step }) => {
      const percentage = Math.round((step / questions.length) * 100)
      console.log(percentage)
    
      return (
        <>
          <div className="progress">
            <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
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
      );
    }
    

     
      const [step, setStep] = React.useState(0)
      const [correct, setCorrect] = React.useState(0)
    
      const question = questions[step]
    
      const onClickVariant = (index) => {
        console.log(step, index)
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
      );
    

}
    export default allQuestions;
    
    