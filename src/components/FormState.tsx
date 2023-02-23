import * as React from "react";
import { useForm } from "react-hook-form";

let renderCount = 0;

interface FormInputs {
  firstName: string;
}

export function FormState() {
  // Boolean value that indicates whether form changes
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormInputs>({
    defaultValues: {
      yourDetails: {
        firstName: "",
        lastName: "",
      },
    },
  });
  renderCount++;

  console.log("errors", errors);

  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => {
          console.log("submitted", data);
        })}
      >
        <input
          {...(register("youDetails.firstName"), { required: true })}
          placeholder="First Name"
        />

        <input
          {...(register("youDetails.lastName"), { required: true })}
          placeholder="Last Name"
        />

        <button
          type="button"
          onClick={() => {
            setValue("youDetails.firstName", "Bill");
            setValue("youDetails.lastName", "Lee");
          }}
        >
          setValue
        </button>

        <input type="submit" />
      </form>
    </div>
  );
}
