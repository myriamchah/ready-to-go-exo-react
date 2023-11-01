import shuttle from "../assets/space-shuttle-solid.jpg";

const Header = () => {
  return (
    <header>
      <img src={shuttle} alt="space shuttle logo" height="40" />
      <h1>Ready To Go</h1>
    </header>
  );
};

export default Header;
