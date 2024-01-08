import { useEffect, useState } from "react";
import React from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <div className="flex flex-col w-[400px] h-[400px] bg-gray-200 m-auto mt-10 justify-center items-center rounded-xl">
      <div className="flex w-[300px] h-[100px] border-2 bg-lime-500  text-4xl justify-center items-center rounded-3xl">
        <p className="flex text-large justify-center text-blue-500 text-5xl">
          {count}
        </p>
      </div>
      <div className="flex mt-20 gap-10">
        <button
          className="flex w-10 h-10 justify-center items-center bg-white rounded-lg text-2xl"
          onClick={decrease}
        >
          -
        </button>
        <button
          className="flex w-30 h-10 py-2 px-10 justify-center items-center bg-white rounded-lg text-2xl"
          onClick={reset}
        >
          Reset
        </button>

        <button
          className="flex w-10 h-10 justify-center items-center bg-white rounded-lg text-2xl"
          onClick={increase}
        >
          +
        </button>
      </div>
    </div>
  );
}
export default Counter;
