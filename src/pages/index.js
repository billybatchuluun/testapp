import { useEffect, useState } from "react";
import TimerApp from "@/components/Timer";
import Counter from "@/components/Counter";
import ToDoList from "@/components/ToDoList";

export default function Home() {
  return (
    <>
      {/* <TimerApp />
      <Counter /> */}
      <ToDoList />;
    </>
  );
}
