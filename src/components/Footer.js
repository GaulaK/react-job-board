const Footer = (props) => {
  return (
    <footer>
      <div className="container">
        <p>
          Made with <span>React</span> at <span>{props.location}</span> by{" "}
          <span>{props.name}</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
