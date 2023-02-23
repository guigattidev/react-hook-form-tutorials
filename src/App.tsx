import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { useForm } from "react-hook-form";
import "./App.css";

let renderCount = 0;

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  renderCount++;

  console.log(errors);

  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <input
          {...register("firstName", { required: "This is required." })}
          placeholder="First Name"
        />
        <input
          {...register("lastName", {
            required: "This is required.",
            minLength: { value: 4, message: "Min lenght is 4" },
          })}
          placeholder="Last Name"
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
