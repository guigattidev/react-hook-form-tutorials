import * as React from "react";
import { useForm } from "react-hook-form";

let renderCount = 0;

interface FormValues {
  firstName: string;
  lastName: string;
  age: number;
}

export function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      age: 0,
    },
  });
  renderCount++;

  console.log("Errors", errors);

  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <input
          {...register("firstName", {
            required: { value: true, message: "This is required" },
          })}
          placeholder="First Name"
        />

        <input
          {...register("lastName", {
            maxLength: { value: 5, message: "Max length is 5" },
            validate: async (value) => {
              return value === "Bill";
            },
          })}
          placeholder="Last Name"
        />

        <input {...register("age", { valueAsNumber: true })} type="number" />

        <input type="submit" />
      </form>
    </div>
  );
}
