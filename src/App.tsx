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
    formState: { isSubmitting },
  } = useForm<FormInputs>({
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
    },
  });
  renderCount++;

  const onSubmit = async (data) => {
    await sleep(3000);
  };

  // Check if is valid on run time
  console.log("isSubmitting", isSubmitting);

  // Check if is valid on run time
  // console.log("isvalid", isValid);

  // Check how many times submit was submitted
  // console.log("submitCount", submitCount);

  // Check if submited is successfully
  // console.log("isSubmitSuccessful", isSubmitSuccessful);

  // Indicates a input get focus and blur
  // console.log("touchedFields", touchedFields);

  // Check if field was dirty, need provide default values
  // console.log("DirtyFields", dirtyFields);

  // Where of was form dirty
  // console.log("IsDirty", isDirty);

  // Check for errors on fields
  // console.log("Errors", errors);

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
