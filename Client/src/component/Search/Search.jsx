import styles from './Search.module.css'
import { useState } from 'react'
const Search = (props) =>{
    const [id, setId] = useState('');
    const handleChange = (event)=>{
        setId(event.target.value);
    }
    return (
        <div className={styles.containerSearch}>
            <input onChange={handleChange}type="text" placeholder="Card por ID" />
            <button onClick={()=>{props.onSearch(id)}}>Agregar</button>
        </div>
    )
}
export default Search