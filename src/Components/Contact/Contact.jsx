import { useFormik } from "formik";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { contactSchema } from "./Schemas";
// CSS
import "./Contact.css";

function Contact() {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    if (
      values.name.length &&
      values.email.length &&
      values.message.length !== 0
    ) {
      emailjs
        .sendForm(
          "service_51h8k5p",
          "template_43naxb1",
          form.current,
          "aIt8uauSZSCSwJ9It"
        )
        .then(
          () => {
            alert("Your message has been sent");
          },
          (error) => {
            alert(error.message);
          }
        );
      resetForm();
    }
    return;
  };

  const { values, resetForm, errors, touched, handleBlur, handleChange } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        message: "",
      },
      validationSchema: contactSchema,
    });
  return (
    <section name="contact" className="contact">
      <form ref={form} onSubmit={sendEmail} id="Form" action="">
        <div className="contact-text">
          <h4>Contact</h4>
          <p>
            Submit the form below or shoot me an email - jurgissubcius@gmail.com
          </p>
        </div>

        <div className="contact-form">
          <label htmlFor="name"></label>
          <input
            id="name"
            className={
              errors.name && touched.name
                ? "contact-form-inputs input-error"
                : " contact-form-inputs"
            }
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            placeholder="Enter your name"
            name="name"
          />
          {errors.name && touched.name && (
            <p className="error">{errors.name}</p>
          )}
          <br />
          <label htmlFor="email"></label>
          <input
            id="email"
            className={
              errors.name && touched.name
                ? " contact-form-inputs input-error"
                : " contact-form-inputs"
            }
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            type="email"
            placeholder="Enter your email"
            name="email"
          />
          {errors.email && touched.email && (
            <p className="error">{errors.email}</p>
          )}
          <br />
          <label htmlFor="message"></label>
          <textarea
            id="message"
            className={
              errors.name && touched.name
                ? " contact-form-inputs input-error"
                : " contact-form-inputs"
            }
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter your text"
            name="message"
            rows="10"
          />
          {errors.message && touched.message && (
            <p className="error">{errors.message}</p>
          )}
          <br />
          <button className="btn btn-aligne" type="submit">
            Contact me!!!
          </button>
        </div>
      </form>
    </section>
  );
}

export default Contact;
