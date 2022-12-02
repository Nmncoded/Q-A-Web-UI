import React from "react";
import './index.scss';

const Aside = () => {
    const answers = [
        {
            answerNo : 1,
            answer : 'nmnmm'
        },
        {
            answerNo : 2,
            answer : 'nm f dfsdfdfsd'
        },{
            answerNo : 3,
            answer : 'dsfgdfgdfggf gfgdf'
        },
    ]
  return (
    <aside
    className="answers-body"
    >
        {
          answers.map((answer,index) => (<div key={index} >{`#${index+1} ${answer.answer}`}</div>))
        }
    </aside>
  )
};

export default Aside;
