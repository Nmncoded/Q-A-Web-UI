import React from "react";
import { setSubmit, useDispatch, useStateData } from "../../context";
import "./index.scss";

const Footer = () => {
  const dispatch = useDispatch();
  const { step, questionsData, isSubmitted } = useStateData();
  let canWeSubmit = questionsData.every(ques => ques.answersByUserId >=0);

  const handleSubmit = () => {
    setSubmit(dispatch,!isSubmitted);
  }
  return (
    <div className={canWeSubmit ? "footer" : "footer display-none"}>
      {canWeSubmit && <button onClick={handleSubmit} >Submit</button>}
    </div>
  );
};

export default Footer;
