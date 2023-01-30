const Footer = (props) => {
  return (
    <footer>
      <div class="container">
        <p>
          Made with <span>React</span> at <span>{props.location}</span> by{" "}
          <span>{props.name}</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
