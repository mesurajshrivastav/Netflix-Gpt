import logo from "../images/logo.png";

const Header = () => {
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10">
      <img 
       className="w-48"
      src={logo} alt="logo" />
    </div>
  );
};

export default Header;
