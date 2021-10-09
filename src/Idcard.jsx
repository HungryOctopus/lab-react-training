// Iteration 1

const IdCard = (props) => {
  return (
    <div>
      <img src={props.picture} alt={props.firstName} />
      <div>
        <p>
          <b>First name: </b>
          {props.firstName}
        </p>
        <p>
          <b>Last name: </b>
          {props.lastName}
        </p>
        <p>
          <b>Gender: </b>
          {props.gender}
        </p>
        <p>
          <b>Height: </b>
          {props.height}
        </p>
        <p>
          <b>Birth: </b>
          {props.birthdate.toDateString()}
        </p>
      </div>
    </div>
  );
};

export default IdCard;
