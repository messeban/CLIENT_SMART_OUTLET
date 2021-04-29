import React from "react";
import { useForm } from "react-hook-form";

export default function SignUp() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <label>
            User Name
        <input {...register("userName")} />
        </label>
        <label>
            password
        <input type="password" {...register("password")} />
        </label>
      <input type="submit" />
    </form>
  );
}