import { ButtonStyled } from "./Button.styled";

const Button = (props) => (
  <ButtonStyled {...props}>{props.children}</ButtonStyled>
);

export default Button;
