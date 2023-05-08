import styles from './Card.module.css'
const Card = (props) => {
    return (
      <div className={styles.containerCard}>
        <button onClick= {()=>props.onClose(props.id)} >X</button>
        <h4>name:{props.name}</h4>
        <h4>status:{props.status}</h4>
        <h4>species:{props.specie}</h4>
        <h4>gender:{props.gender}</h4>
        <img src={props.image} alt={props.name} />
      </div>
    );
  };
  export default Card