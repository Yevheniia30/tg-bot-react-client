import { useTelegram } from "../../hooks/useTelegram";
import { NavLink } from "./Header.styled";
import Button from "../Button/Button";

const Header = () => {
  const { handleClose, user } = useTelegram();
  return (
    <header>
      <Button onClick={handleClose}>Закрити</Button>
      <span>{user?.username}</span>
      <NavLink to="/form">Form</NavLink>
      <NavLink to="/">List</NavLink>
    </header>
  );
};

export default Header;
