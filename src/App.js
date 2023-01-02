import React, { useState } from "react";

const App = () => {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [result, setResult] = useState();
  const [sym, setSym] = useState();
  const [clear, setClear] = useState(true);

  const add = () => {
    const res = Number(number1) + Number(number2);
    setResult(res);
    setSym("+");
  };
  const sub = () => {
    const res = Number(number1) - Number(number2);
    setResult(res);
    setSym("-");
  };
  const mul = () => {
    const res = Number(number1) * Number(number2);
    setResult(res);
    setSym("*");
  };
  const div = () => {
    const res = Number(number1) / Number(number2);

    setResult(res.toFixed(2));
    setSym("/");
  };
  const per = () => {
    const res = (Number(number1) * Number(number2)) / 100;
    setResult(res);
    setSym("%");
  };

  const clr = () => {
    setClear(false);
    setNumber1("");
    setNumber2("");
    setSym();
    setResult();
    console.log(clear);
  };

  return (
    <>
      <h1 className="text-center my-5  text-secondary"> Simple Calculator </h1>
      <div className="container w-50 my-3 border p-5 rounded-5">
        <div className="d-flex align-items-center justify-content-center">
          <input
            placeholder="Enter First Number"
            className="mx-2 my-3 px-3 py-2 rounded-2"
            type="number"
            name=""
            id=""
            value={number1}
            onChange={(e) => setNumber1(e.target.value)}
          />
          <h1>{sym}</h1>
          <input
            placeholder="Enter Second Number"
            type="number"
            className="mx-2 my-3 px-3 py-2 rounded-2"
            name=""
            id=""
            value={number2}
            onChange={(e) => setNumber2(e.target.value)}
          />
        </div>
        <div className="d-flex align-items-center justify-content-center mt-3">
          <button className=" btn btn-primary mx-2 my-3 px-3 py-2 rounded-2" onClick={add}>
            ADD
          </button>
          <button className=" btn btn-danger mx-2 my-3 px-3 py-2 rounded-2" onClick={sub}>
            SUB
          </button>
          <button className="btn btn-warning mx-2 my-3 px-3 py-2 rounded-2" onClick={mul}>
            MUL
          </button>
          <button className="btn btn-info mx-2 my-3 px-3 py-2 rounded-2" onClick={div}>
            DIV
          </button>
          <button className="btn btn-success mx-2 my-3 px-3 py-2 rounded-2" onClick={per}>
            PER
          </button>
        </div>
        <div className="d-flex align-items-center justify-content-between mt-5">
          <h1 className="text-success d-inline">Result : {result}</h1>
          <button className="btn btn-secondary px-3 py-2 rounded-2" onClick={clr}>
            Clear
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
