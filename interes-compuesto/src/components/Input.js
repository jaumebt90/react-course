import styled from "styled-components";
import { useField } from "formik";

const Control = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  color: #000;
  display: block;
  margin-bottom: 5px;
`;
const Input = ({ label, ...props }) => {
  return (
    <Control>
      <Label>{label}</Label>
    </Control>
  );
};

export default Input;
