"use client";

import { SubmitHandler, useForm } from "react-hook-form";

export interface FormValues {
  firstName: string;
  lastName: string;
}

const Form = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName")} placeholder="First name" />
      <input {...register("lastName")} placeholder="Last name" />
      <button type="submit">Send</button>
    </form>
  );
};

export default Form;
