import * as React from "react";
import { useForm } from "react-hook-form";

let renderCount = 0;

interface FormValues {
  firstName: string;
  lastName: string;
}

export function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });
  renderCount++;

  // register, update values inside data
  register("firstName", { required: true });
  register("lastName", { maxLength: 5 });

  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <input name="firstName" placeholder="First Name" />

        <input name="lastName" placeholder="Last Name" />

        <input type="submit" />
      </form>
    </div>
  );
}
