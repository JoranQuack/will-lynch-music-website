"use client";

import { FC, useState } from "react";
import { sendEmail } from "@/utils/send-email";
import Loader from "@/components/Loader";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";

export type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  recaptchaToken?: string;
};

const ContactForm: FC = () => {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();

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
      if (!executeRecaptcha) {
        alert("reCAPTCHA not available");
        return;
      }
      setIsSending(true);
      try {
        // Execute reCAPTCHA and get token
        const token = await executeRecaptcha("contact_form");

        // Send email with token
        await sendEmail({
          ...values,
          recaptchaToken: token,
        });

        formik.resetForm();
        setIsSent(true);
      } catch (error) {
        console.error("Failed to send email:", error);
      } finally {
        setIsSending(false);
      }
    },
  });

  return (
    <form className="flex flex-col gap-8" onSubmit={formik.handleSubmit}>
      <h2 className="block text-center text-2xl lg:hidden">
        SEND ME A MESSAGE
      </h2>
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

interface ContactProps {
  title: string;
  description: string;
  email: string;
  phone: string;
}

export default function Contact({
  title,
  description,
  email,
  phone,
}: ContactProps) {
  return (
    <section
      id="contact"
      className="grid grid-cols-1 gap-10 bg-white px-8 py-10 text-dark lg:grid-cols-2 lg:gap-36 lg:px-36 lg:py-20"
    >
      <div className="flex flex-col justify-start gap-10">
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-green">{title}</h1>
          <p>{description}</p>
        </div>
        <a href={`mailto:${email}`} className="duration-500 hover:text-green">
          <p>
            <b>EMAIL ME:</b> <br />
            {email}
          </p>
        </a>
        <a
          href={`tel:${phone.replace(/\s/g, "")}`}
          className="duration-500 hover:text-green"
        >
          <p>
            <b>PHONE ME:</b> <br />
            {phone}
          </p>
        </a>
      </div>
      <GoogleReCaptchaProvider
        reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
      >
        <ContactForm />
      </GoogleReCaptchaProvider>
    </section>
  );
}
