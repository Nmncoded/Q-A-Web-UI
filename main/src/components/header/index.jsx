import React from "react";
import { setStep, useDispatch, useState } from "../../context";
import './index.scss';

const Header = () => {
    const dispatch =  useDispatch();
    const {step} = useState();

  return (
    <header
    className="header"
    >
        Q/A-WEB-UI
    </header>
  )
};

export default Header;
