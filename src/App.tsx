import * as React from "react";
import { useForm } from "react-hook-form";

let renderCount = 0;

interface FormInputs {
  firstName: string;
  lastName: string;
}

export function App() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { isDirty },
  } = useForm<FormInputs>({
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });
  renderCount++;

  console.log("isDirty", isDirty);

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

        <input name={"lastName"} />

        <button
          type="button"
          onClick={() => {
            reset(
              {
                firstName: "Bill",
                lastName: "Lee",
              },
              {
                keepDefaultValues: true,
              }
            );
          }}
        >
          Reset
        </button>

        <input type="submit" />
      </form>
    </div>
  );
}
