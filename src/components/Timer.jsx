import { useEffect, useState } from "react";

function TimerApp() {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);

  const updateName = () => {
    setName("Bilguun");
    console.log(name);
  };
  const increaseAge = () => {
    setAge(age + 1);
    console.log(age);
  };
  const toggleEmployedStatus = () => {
    setIsEmployed(!isEmployed);
  };

  return (
    <div className="flex flex-col gap-5 items-center mt-40">
      <p>Name:{name}</p>
      <button className="border-2 rounded-md" onClick={updateName}>
        Set Name
      </button>

      <p>Age:{age}</p>
      <button className="border-2 rounded-md" onClick={increaseAge}>
        Increase Age
      </button>
      <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
      <button className="border-2 rounded-md" onClick={toggleEmployedStatus}>
        Togle Status
      </button>
    </div>
  );
}
export default TimerApp;
