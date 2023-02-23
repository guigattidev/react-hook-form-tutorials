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
    setValue,
    handleSubmit,
    formState: { touchedFields },
  } = useForm<FormInputs>({
    defaultValues: {
      firstName: "",
    },
  });
  renderCount++;

  console.log("touchedFields", touchedFields);

  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => {
          console.log("submitted", data);
        })}
      >
        <input
          {...(register("firstName"), { required: true })}
          placeholder="First Name"
        />

        <button
          type="button"
          onClick={() => {
            setValue("firstName", "bill", { shouldTouch: true });
          }}
        >
          setValue
        </button>

        <input type="submit" />
      </form>
    </div>
  );
}
