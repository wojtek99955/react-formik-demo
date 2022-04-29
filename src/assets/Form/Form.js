import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import {
  Main,
  StyledForm,
  UserContainer,
  StyledUser,
  ValidateError,
  SuccessMessage,
} from "./FormStyles";

function Form() {
  const [success, setSuccess] = useState(false);
  const validationSchema = Yup.object({
    name: Yup.string()
      .required("required")
      .min(3, "must be 3 characters or more"),
    surname: Yup.string()
      .required("required")
      .min(3, "must be 3 characters or more"),
    email: Yup.string().email("invalid email format").required("required"),
    password: Yup.string()
      .min(8, "must be 6 characters or more")
      .required("required"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "password must match"
    ),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values, onSubmitProps) => {
      alert(JSON.stringify(values, null, 2));
      !formik.error ? setSuccess(true) : setSuccess(false);
      onSubmitProps.resetForm();
    },
    validationSchema,
  });

  return (
    <Main>
      <UserContainer>
        <StyledUser />
      </UserContainer>
      <StyledForm onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          {...formik.getFieldProps("name")}
        />
        <ValidateError>
          {formik.touched.name && formik.errors.name}
        </ValidateError>
        <label htmlFor="surname">Surname</label>
        <input
          id="surname"
          name="surname"
          type="text"
          {...formik.getFieldProps("surname")}
        />
        <ValidateError>
          {formik.touched.surname && formik.errors.surname}
        </ValidateError>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="text"
          {...formik.getFieldProps("email")}
        />
        <ValidateError>
          {formik.touched.email && formik.errors.email}
        </ValidateError>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          {...formik.getFieldProps("password")}
        />
        <ValidateError>
          {formik.touched.password && formik.errors.password}
        </ValidateError>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          {...formik.getFieldProps("confirmPassword")}
        />
        <ValidateError>
          {formik.touched.confirmPassword && formik.errors.confirmPassword}
        </ValidateError>
        <button type="submit">Create Account</button>
        {success ? (
          <SuccessMessage>Your message is sent!</SuccessMessage>
        ) : null}
      </StyledForm>
    </Main>
  );
}

export default Form;
