import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "../styles/Search.style.css";

const Search = () => {

  const history = useHistory();
  const [inputState, setInputState] = useState("ENV");

  return (
    <div className="Search-container">
        <input 
          type="text" 
          placeholder="search country..." 
          onChange={(e) => {
            setInputState(e.target.value)
          }}
        />
        {/* el click del botón tiene que mandar el valor del imput en una dirección dinámica. */}
        <button onClick={() => history.push(`/detail/${inputState}`)}>
          GO
        </button>
    </div>
  )
};

export {Search};
