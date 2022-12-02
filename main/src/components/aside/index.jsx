import React from "react";
import './index.scss';
import {GiSparrow} from 'react-icons/gi';
import {TbArrowRight} from 'react-icons/tb'
import { useStateData } from "../../context";

const Aside = () => {
    const {questionsData} = useStateData();
  return (
    <aside
    className="answers-body"
    >
        <div className="icon" >
        <GiSparrow />
        </div>
        <h1 >Review Answers here</h1>
        <div>
        {
          questionsData.map((question,index) => (
            question.options[question.answersByUserId] && (
          <span key={index} >
            <TbArrowRight className="arrow" />{`${question.options[question.answersByUserId]}`}
            </span>))

            )
        }
        </div>
    </aside>
  )
};

export default Aside;
