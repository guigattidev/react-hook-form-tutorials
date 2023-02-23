import * as React from "react";
import { useForm } from "react-hook-form";

let renderCount = 0;

interface FormInputs {
  firstName: string;
  lastName: string;
}

export function App() {
  // Boolean value that indicates whether form changes
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    defaultValues: {},
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
          {...(register("firstName"), { required: true })}
          placeholder="First Name"
        />
        <input
          {...(register("lastName"), { required: true })}
          placeholder="Last Name"
        />

        <input type="submit" />
      </form>
    </div>
  );
}
