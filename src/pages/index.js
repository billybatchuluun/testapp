import { useEffect, useState } from "react";

// const Cars = ({ brand, color, door }) => {
//   return (
//     <div>
//       <p>My car is {brand}</p>
//       <p>My car's color is {color}</p>
//       <p>My car has {door} doors</p>
//     </div>
//   );
// };

// const Greeting = ({ name, age }) => {
//   return (
//     <p>
//       Hello {name}, Are you {age} years old? Or are you over {age}?
//     </p>
//   );
//   <p></p>;
// };
export default function Home() {
  let count = 0;

  const addCount = () => {
    count++;
    console.log(count);
  };

  return (
    <div>
      <button onClick={addCount}>click</button>
      <p>{count}</p>
    </div>
  );
}
