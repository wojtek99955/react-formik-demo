import { useFormik } from "formik";
import styled from "styled-components";
import { User } from "@styled-icons/boxicons-solid/User";

const Main = styled.main`
  background: white;
  padding: 2rem;
  position: relative;
`;
const StyledForm = styled.form`
  label {
    display: block;
  }
  button {
    display: block;
  }
  input {
    background-color: #ebf4f2;
    border: none;
  }
`;
const UserContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -10%;
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
