import { ADD_CHARACTER, DELETE_CHARACTER,FILTER,ORDER } from "./types"
export const addCharacterFav= (character)=>{
    return {
        type: ADD_CHARACTER,
        payload: character}
}
export const deleteCharacterFav= (id)=>{
    return {
        type: DELETE_CHARACTER,
        payload: id}
}
export const filterCards = (filter)=>{
    return{
        type:FILTER,
        payload:filter
    }
}
export const orderCards = (order)=>{
    return{
        type:ORDER,
        payload:order
    }
}