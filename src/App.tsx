import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { useForm } from "react-hook-form";
import "./App.css";

let renderCount = 0;

function App() {
  const { register, handleSubmit } = useForm();

  renderCount++;

  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <input {...register("firstName")} placeholder="First Name" />
        <input {...register("lastName")} placeholder="Last Name" />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
