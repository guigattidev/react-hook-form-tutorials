import * as React from "react";
import { useForm } from "react-hook-form";

let renderCount = 0;

export function App() {
  const [value, setValue] = React.useState("");

  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      firstName: "John",
      lastName: "Snow",
      age: "0",
    },
  });
  renderCount++;

  // Subscribe to all application without rerender
  React.useEffect(() => {
    const subscription = watch((data) => {
      console.log(data);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [watch]);

  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />

      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <input {...register("firstName")} placeholder="First Name" />
        <input {...register("lastName")} placeholder="Last Name" />
        <input {...register("age")} placeholder="Age" />

        <input type="submit" />
      </form>
    </div>
  );
}
