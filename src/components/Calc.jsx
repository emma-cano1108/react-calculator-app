import { useState } from "react";
import "../styles/calc.css";
import Button from "./Button";
function Calc() {
  const [screen, setScreen] = useState("");


  const handleClick = (value) => {
      setScreen(screen+value);
  };

  const handleReset = () => {
    setScreen("");

  };

  const handleErase = () => {
    if (screen !== "") {
      setScreen(screen.slice(0, -1));
    }
    
  };



  const handleEqual = () => {
    let result = "";
    if(screen != ""){
       result = String(eval(screen));
    } else {result = ""}
    
    
    if(isNaN(result) || result == "Infinity"){
      setScreen("ERROR")
    } else {setScreen(result)}
    
    
  }

 
  


  return (
    <>
      <div className="calculator">
        <h1 className="title">CALCULATOR</h1>
        <input
          type="text"
          value={screen}
          className="input"
          onChange={(e) => {
            setScreen(e.target.value);
          }}
        />

        <section
          onClick={() => {
            handleReset();
          }}
        >
          <Button icon={"AC"} />
        </section>
        <section
          onClick={() => {
            handleErase();
          }}
        >
          <Button icon={"←"} />
        </section>
        <section
          onClick={() => {
            handleClick(".");
          }}
        >
          <Button icon={"."} />
        </section>
        <section
          onClick={() => {
            handleClick("/")
          }}
        >
          <Button icon={"÷"} />
        </section>
        <section
          onClick={() => {
            handleClick("7");
          }}
        >
          <Button icon={"7"} />
        </section>
        <section
          onClick={() => {
            handleClick("8");
          }}
        >
          <Button icon={"8"} />
        </section>
        <section
          onClick={() => {
            handleClick("9");
          }}
        >
          <Button icon={"9"} />
        </section>
        <section
          onClick={() => {
            handleClick("*")
          }}
        >
          <Button icon={"x"} />
        </section>
        <section
          onClick={() => {
            handleClick("4");
          }}
        >
          <Button icon={"4"} />
        </section>
        <section
          onClick={() => {
            handleClick("5");
          }}
        >
          <Button icon={"5"} />
        </section>
        <section
          onClick={() => {
            handleClick("6");
          }}
        >
          <Button icon={"6"} />
        </section>
        <section
          onClick={() => {
            handleClick("-")
          }}
        >
          <Button icon={"-"} />
        </section>
        <section
          onClick={() => {
            handleClick("1");
          }}
        >
          <Button icon={"1"} />
        </section>
        <section
          onClick={() => {
            handleClick("2");
          }}
        >
          <Button icon={"2"} />
        </section>
        <section
          onClick={() => {
            handleClick("3");
          }}
        >
          <Button icon={"3"} />
        </section>
        <section
          onClick={() => {
            handleClick("+")
          }}
        >
          <Button icon={"+"} />
        </section>
        <section
          onClick={() => {
            handleClick("0");
          }}
        >
          <Button icon={"0"} />
        </section>
        <section onClick={() => {
          handleEqual()
        }}>
          <Button icon={"="} />
        </section>
      </div>
    </>
  );
}

export default Calc;
