import * as React from "react";
import { useForm } from "react-hook-form";

let renderCount = 0;

interface FormInputs {
  firstName: string;
  lastName: string;
}

export function App() {
  const { register, handleSubmit, control, reset } = useForm<FormInputs>({
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });
  renderCount++;

  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => {
          console.log("Submitted", data);
        })}
      >
        <input
          {...(register("firstName"), { required: true })}
          placeholder="First Name"
        />

        <input control={control} name={"lastName"} />

        <button
          type="button"
          onClick={() => {
            reset();
          }}
        >
          Reset
        </button>

        <input type="submit" />
      </form>
    </div>
  );
}
