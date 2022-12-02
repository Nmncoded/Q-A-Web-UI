import React from "react";
import { setSubmit, useDispatch, useStateData } from "../../context";
import './index.scss';
import {BsPatchCheckFill} from 'react-icons/bs'

const Success = () => {
    const dispatch = useDispatch();
    const {isSubmitted,questionsData} = useStateData();
    const handleSubmit = () => {
        window.location.reload();
    }
    const totalQuestionsCorrect = questionsData.reduce((acc,cv) => {
        if(cv.answersByUserId == cv.correctAnswerId){
            acc = acc+1 ;
        }
        return acc;
    },0);
    const yourScore = ((totalQuestionsCorrect*100)/questionsData.length).toFixed(2);
  return (
    <section  >
        <header className="success-header" >
        <button onClick={handleSubmit} >Take Quiz Again!</button>
        </header>
        <main className="main-success" >
        <div className="success-icon" >
            <BsPatchCheckFill/>
        </div>
        <h2>Successfully completed the assignment!</h2>
        <p>{`Questions asked :  ${questionsData.length}`}</p>
        <p>{`Questions correct :  ${totalQuestionsCorrect}`}</p>
        <p>{`Your Score :  ${yourScore}%`}</p>
        </main>
    </section>
  )
};

export default Success;
