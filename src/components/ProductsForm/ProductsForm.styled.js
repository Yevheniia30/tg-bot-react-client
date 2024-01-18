import styled from "styled-components";

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  gap: 10px;
`;

export const ErrorStyled = styled.span`
  font-size: 12px;
  color: red;
`;

export const InputStyled = styled.input`
  padding: 8px;
  border-radius: 6px;
  border: 1px solid #cecece;
`;

export const InputBoxStyled = styled.div`
  display: flex;
  flex-direction: column;
`;
