
const Card = (props) => {
    return (
      <div>
        <button>X</button>
        <h4>name:{props.name}</h4>
        <h4>status:{props.status}</h4>
        <h4>species:{props.species}</h4>
        <h4>gender:{props.gender}</h4>
        <img src={props.image} alt={props.name} />
      </div>
    );
  };
  export default Card