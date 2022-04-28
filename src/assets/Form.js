import { useFormik } from "formik";
import styled from "styled-components";
import { User } from "@styled-icons/boxicons-solid/User";

const Main = styled.main`
  background: white;
  padding: 2.5rem;
  position: relative;
  width: 400px;
  border-radius: 10px;
  -webkit-box-shadow: 2px 3px 39px -11px rgba(66, 68, 90, 0.75);
  -moz-box-shadow: 2px 3px 39px -11px rgba(66, 68, 90, 0.75);
  box-shadow: 2px 3px 39px -11px rgba(66, 68, 90, 0.75);
`;
const StyledForm = styled.form`
  label {
    display: block;
    color: #b6d7d0;
  }
  button {
    display: block;
    border: none;
    color: white;
    margin-top: 1rem;
    padding: 0.7rem 1.2rem;
    cursor: pointer;
    border-radius: 15px;
    background: rgb(151, 122, 255);
    background: linear-gradient(
      90deg,
      rgba(151, 122, 255, 1) 19%,
      rgba(191, 123, 249, 1) 100%
    );
  }
  input {
    background-color: #ebf4f2;
    border: none;
    border-radius: 5px;
    margin: 0.5rem 0;
    padding: 0.5rem 0.2rem;
    width: 100%;
  }
`;
const UserContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.8rem;
  height: 2.8rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -1.4rem;
  border-radius: 50%;
  background: rgb(151, 122, 255);
  background: linear-gradient(
    90deg,
    rgba(151, 122, 255, 1) 19%,
    rgba(191, 123, 249, 1) 100%
  );
`;
const StyledUser = styled(User)`
  width: 2rem;
  color: #f8e4ff;
`;

function Form() {
  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
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
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <label htmlFor="surname">Surname</label>
        <input
          id="surname"
          name="surname"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.surname}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <button type="submit">Create Account</button>
      </StyledForm>
    </Main>
  );
}

export default Form;
