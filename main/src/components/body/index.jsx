import React, { useState } from "react";
import "./index.scss";
import { ImQuestion } from "react-icons/im";
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from "react-icons/bs";
import { setStep, useDispatch, useStateData, addAnswer } from "../../context";

const Body = () => {
    const [errMsg, setErrMsg]= useState('');
  const dispatch = useDispatch();
  const { step, questionsData } = useStateData();

    const changeStep = (type,isChangeable) => {
        if(!(isChangeable>=0)) return setErrMsg('select option first!');
        let newStep;
        if(type == 'forward'){
            newStep = (step) <3 ? step+1 : step; 
        }
        if(type == 'backward'){
            newStep = (step-1) >= 1 ? step-1 : step; 
        }
        setStep(dispatch,newStep);
    }

    const handleOnChange = ({target:{value}},id,answersByUserId) => {
        setErrMsg('');
        let newData =  [...questionsData].map(question => (question.id == id ? {...question,answersByUserId} : question ));
        addAnswer(dispatch,newData);
    }

  const activeQuestion = questionsData.find(ques => ques.id == step);

  return (
    <section className="questions-body">
      <header className="icon">
        <ImQuestion />
      </header>
      <div className="change-question">
        {
            step > 1 && (
        <span className="left" onClick={() => changeStep('backward', activeQuestion.answersByUserId) } >
          <BsFillArrowLeftSquareFill />
        </span>
            )
        }
        <span className="text">Attempt Questions here</span>
        {
            step<3 && (
        <span className="right" onClick={() => changeStep('forward',activeQuestion.answersByUserId) } >
          <BsFillArrowRightSquareFill />
        </span>
            )
        }
      </div>
      <div>
            <div className="question">{activeQuestion?.question}</div>
            <div className="options"  >
            {
                activeQuestion.options.map((option,index) => (
              <label key={index} >
                <input 
                type="radio" 
                checked={activeQuestion.answersByUserId == (index) ? true : false} 
                onChange={(e) =>handleOnChange(e,activeQuestion.id, index)} 
                value={option} 
                name={option} 
                />
                {option}
              </label>
                ))
            }
            </div>
            <p className="err-msg" >{errMsg}</p>
      </div>
    </section>
  );
};

export default Body;
