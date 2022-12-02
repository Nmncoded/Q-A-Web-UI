import React from "react";
import { setStep, useDispatch, useStateData } from "../../context";
import './index.scss';

const Header = () => {
    const dispatch =  useDispatch();
    const {step} = useStateData();

  return (
    <header
    className="header"
    >
        Q/A-WEB-UI
    </header>
  )
};

export default Header;
