import Card from "../Card/Card";
import styles from './Cards.module.css'
const Cards = (props) => {
  return (
    <div className={styles.containerCards}>
        {
        props.character.map(({id,name,image,status,species,gender})=>{
            return <Card
            key={id}
            id={id}
            name={name}
            image={image}
            gender={gender}
            status={status}
            specie={species}
            onClose={props.onClose}
                />
            
        })}
    </div>
  )
};

export default Cards