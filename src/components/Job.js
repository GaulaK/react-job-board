const Job = (props) => {
  return (
    <div className={`job ${props.className}`}>
      <div>
        <h2>{props.title}</h2>
      </div>
      <div>
        <p>
          {" "}
          {props.contractType} - {props.country} - {props.city}
        </p>
      </div>
    </div>
  );
};

export default Job;
