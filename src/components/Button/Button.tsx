import { ButtonStyled } from "./Button.styled";

const Button = (props: any) => (
  <ButtonStyled {...props}>{props.children}</ButtonStyled>
);

export default Button;
