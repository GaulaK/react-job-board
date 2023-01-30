import Title from "./Title";

const Header = (props) => {
  return (
    <header>
      <div className="container">
        <Title text={props.title} />
      </div>
    </header>
  );
};
export default Header;
