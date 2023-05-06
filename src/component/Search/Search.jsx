import styles from './Search.module.css'
const Search = () =>{
    return (
        <div className={styles.containerSearch}>
            <input type="text" placeholder="Card por ID" />
            <button>Agregar</button>
        </div>
    )
}
export default Search