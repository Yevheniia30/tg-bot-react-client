import { useTelegram } from "../../hooks/useTelegram";
import Button from "../Button/Button";

const Header = () => {
  const { handleClose, user } = useTelegram();
  return (
    <header>
      <Button onClick={handleClose}>Закрити</Button>
      <span>{user?.username}</span>
    </header>
  );
};

export default Header;
