"use client";

import { FC } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/utils/send-email";

export type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

const Contact: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <form className="flex flex-col gap-8" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-2 gap-2">
        <div className="form-field">
          <label htmlFor="first-name">First Name</label>
          <input
            placeholder=" "
            type="text"
            className="w-full"
            {...register("firstName", { required: true })}
          />
        </div>
        <div className="form-field">
          <label htmlFor="last-name">Last Name</label>
          <input
            placeholder=" "
            type="text"
            className="w-full"
            {...register("lastName", { required: true })}
          />
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="email">Email</label>
        <input
          placeholder=" "
          type="text"
          className="w-full"
          {...register("email", { required: true })}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message">Message</label>
        <textarea {...register("message", { required: true })} />
      </div>
      <button className="round-button bg-green text-white" type="submit">
        SEND
      </button>
    </form>
  );
};

export default Contact;
