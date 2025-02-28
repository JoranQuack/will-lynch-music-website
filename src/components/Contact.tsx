"use client";

import { FC, useState } from "react";
import { sendEmail } from "@/utils/send-email";
import Loader from "@/components/Loader";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

const Contact: FC = () => {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .min(2, "Must be 2 characters or more")
        .required("Required"),
      lastName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .min(2, "Must be 2 characters or more")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      message: Yup.string()
        .max(500, "Must be 500 characters or less")
        .min(10, "Must be 10 characters or more")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      setIsSending(true);
      try {
        await sendEmail(values);
        formik.resetForm();
      } catch (error) {
        console.error("Failed to send email:", error);
      } finally {
        setIsSending(false);
        setIsSent(true);
      }
    },
  });

  return (
    <form className="flex flex-col gap-8" onSubmit={formik.handleSubmit}>
      <div className="grid grid-cols-2 gap-2">
        <div className="form-field">
          <label htmlFor="firstName">First Name</label>
          <input
            placeholder=" "
            type="text"
            className="w-full"
            id="firstName"
            name="firstName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div className="text-red-500">{formik.errors.firstName}</div>
          ) : null}
        </div>
        <div className="form-field">
          <label htmlFor="lastName">Last Name</label>
          <input
            placeholder=" "
            type="text"
            className="w-full"
            id="lastName"
            name="lastName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div className="text-red-500">{formik.errors.lastName}</div>
          ) : null}
        </div>
      </div>
      <div className="form-field">
        <label htmlFor="email">Email</label>
        <input
          placeholder=" "
          type="email"
          className="w-full"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-red-500">{formik.errors.email}</div>
        ) : null}
      </div>
      <div className="flex flex-col gap-2 transition-none">
        <label htmlFor="message">Message</label>
        <textarea
          placeholder=" "
          id="message"
          name="message"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
        />
        {formik.touched.message && formik.errors.message ? (
          <div className="text-red-500">{formik.errors.message}</div>
        ) : null}
      </div>
      <div className="flex h-10 items-center gap-5">
        {isSending ? (
          <Loader />
        ) : isSent ? (
          <div className="font-medium text-green">
            Message sent successfully!
          </div>
        ) : (
          <button
            className="round-button bg-green text-white"
            type="submit"
            disabled={isSending}
          >
            SEND
          </button>
        )}
      </div>
    </form>
  );
};

export default Contact;
