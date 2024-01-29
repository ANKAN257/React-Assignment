import React, { useState } from "react";

function DisableButton() {
  const [value, setvalue] = useState("");
  const [texts, setTexts] = useState("");
  const handleChnage = (e) => {
    setvalue(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();

    setTexts(value);
    console.log("this is clicked", value);
  };

  return (
    <div className="text-center mt-1 ">
      <h2 >Disable Button after more than 3 input character</h2>
      <input
        type="text"
        value={value}
        className="p-2 bg-red-100"
        placeholder="Enter text"
        //   disabled={value.length >3 }
        onChange={handleChnage}
      />

      <button
        className="bg-gray-200 p-2 ml-3 rounded-md"
        disabled={value.length > 3}
        onClick={handleClick}
      >
        submit
      </button>

      <p>input value [onchange ] : {value}</p>
      <p> texts=input value: [ onclick] : {texts}</p>
    </div>
  );
}

export default DisableButton;
