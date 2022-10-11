import HeaderStyle from "./header.module.css";

const Header = ({ title }) => {
  return <p className={HeaderStyle.title}>{title}</p>;
};

export default Header;
