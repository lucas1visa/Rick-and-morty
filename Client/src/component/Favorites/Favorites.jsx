import { connect, useDispatch, useSelector } from "react-redux"
import styles from './Favorites.module.css'
import Card from "../Card/Card"
import { useState } from "react"
import { orderCards,filterCards } from "../redux/actions"

const Favorites= ({onClose})=>{
    const [aux, setAux] = useState(false);
    const dispatch = useDispatch();
    const myFavorites = useSelector((state)=> state.myFavorites)
    const handleOrde =(event)=>{
        dispatch(orderCards (event.target.value))
        setAux(!aux)
    }
    const    handleFilter = (event)=>{
        dispatch(filterCards (event.target.value))
    }

    return(
        <div className={styles.containerFavs}>
            <select onChange={handleOrde}>
                <option value='A'>Ascendente</option>
                <option value='D'>Descendente</option>
            </select>
            <select onChange={handleFilter}>
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
                <option value='Genderless'>Genderless</option>
                <option value='unknown'>unknown</option>
            </select>
            {myFavorites.map(({name,image,id,status,specie})=>{
                return <Card
                id = {id}
                name ={name}
                image ={image}
                status={status}
                specie = {specie}
                onClose={onClose}
                />
            })}
        </div>
    )
}
export default Favorites