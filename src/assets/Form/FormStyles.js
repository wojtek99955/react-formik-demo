import styled from "styled-components";
import { User } from "@styled-icons/boxicons-solid/User";

export const Main = styled.main`
  background: white;
  padding: 2.5rem;
  position: relative;
  width: 400px;
  border-radius: 10px;
  -webkit-box-shadow: 2px 3px 39px -11px rgba(66, 68, 90, 0.75);
  -moz-box-shadow: 2px 3px 39px -11px rgba(66, 68, 90, 0.75);
  box-shadow: 2px 3px 39px -11px rgba(66, 68, 90, 0.75);
`;
export const StyledForm = styled.form`
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
    border-radius: 12px;
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
export const UserContainer = styled.div`
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
export const StyledUser = styled(User)`
  width: 2rem;
  color: #f8e4ff;
`;
export const ValidateError = styled.div`
  color: red;
  font-size: 0.8rem;
`;

export const SuccessMessage = styled.h3`
  color: green;
  font-size: 1rem;
  margin-top: 1rem;
`;
