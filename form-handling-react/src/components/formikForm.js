import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const FormikForm = () => {
  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", padding: "20px" }}>
      <h2>User Registration (Formik)</h2>
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          // Simulate API submission
          console.log("Form submitted:", values);
          alert("Registration successful! (Simulated)");
          resetForm();
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div style={{ marginBottom: "15px" }}>
              <label htmlFor="username">Username:</label>
              <Field
                type="text"
                id="username"
                name="username"
                style={{ width: "100%", padding: "8px", marginTop: "5px" }}
              />
              <ErrorMessage
                name="username"
                component="p"
                style={{ color: "red", fontSize: "12px" }}
              />
            </div>

            <div style={{ marginBottom: "15px" }}>
              <label htmlFor="email">Email:</label>
              <Field
                type="email"
                id="email"
                name="email"
                style={{ width: "100%", padding: "8px", marginTop: "5px" }}
              />
              <ErrorMessage
                name="email"
                component="p"
                style={{ color: "red", fontSize: "12px" }}
              />
            </div>

            <div style={{ marginBottom: "15px" }}>
              <label htmlFor="password">Password:</label>
              <Field
                type="password"
                id="password"
                name="password"
                style={{ width: "100%", padding: "8px", marginTop: "5px" }}
              />
              <ErrorMessage
                name="password"
                component="p"
                style={{ color: "red", fontSize: "12px" }}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                width: "100%",
                padding: "10px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                cursor: isSubmitting ? "not-allowed" : "pointer",
              }}
            >
              {isSubmitting ? "Submitting..." : "Register"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
