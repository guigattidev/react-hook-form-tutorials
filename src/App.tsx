import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { useForm } from "react-hook-form";
import "./App.css";

let renderCount = 0;

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: { firstName: "John", lastName: "Lee" },
  });

  renderCount++;

  console.log(watch());

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
        <p>{errors.firstName?.message}</p>
        <input
          {...register("lastName", {
            required: "This is required.",
            minLength: { value: 4, message: "Min lenght is 4" },
          })}
          placeholder="Last Name"
        />
        <p>{errors.lastName?.message}</p>

        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
