const Job = (props) => {
  return (
    <article className={`job ${props.className}`}>
      <h2>{props.title}</h2>
      <p>
        {props.contractType} - {props.country} - {props.city}
      </p>
    </article>
  );
};

export default Job;
