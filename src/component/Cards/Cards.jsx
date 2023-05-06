import Card from "../Card/Card";
const Cards = (props) => {
  return (
    <div>
        {
        props.character.map(({id,name,image,status,species})=>{
            return <Card
            key={id}
            id={id}
            name={name}
            image={image}
            status={status}
            specie={species}
                />
            
        })}
    </div>
  )
};

export default Cards