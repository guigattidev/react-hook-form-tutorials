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
    formState: { isDirty, dirtyFields },
  } = useForm<FormInputs>({
    defaultValues: {
      firstName: "",
    },
  });
  renderCount++;

  console.log("isDirty, dirtyFields", isDirty, dirtyFields);

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
            setValue("firstName", "bill", { shouldDirty: true });
          }}
        >
          setValue
        </button>

        <input type="submit" />
      </form>
    </div>
  );
}
