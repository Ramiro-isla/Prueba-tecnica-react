import React from "react";
import Header from "../Header/Header";
import "./FizzBuzz.scss";

const FizzBuzz = () => {
  const fizzbuzz = () => {
    for (let i = 0; i <= 100; i++) {
      if (i % 3 !== 0 && i % 5 !== 0) {
        console.log(i);
      }
      if (i % 3 === 0 && i % 5 !== 0) {
        console.log("Fizz");
      }
      if (i % 5 === 0 && i % 3 !== 0) {
        console.log("Buzz");
      }
      if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
      }
    }
  };

  return (
    <div className="FizzBuzz">
      <Header />
      <button onClick={fizzbuzz}>Haz click para ver el resultado en la consola</button>
    </div>
  );
};

export default FizzBuzz;
