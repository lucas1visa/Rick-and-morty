import { DELETE_CHARACTER, ADD_CHARACTER,FILTER,ORDER } from "../actions/types";
const initialState = {
  myFavorites: [],
  allCharacters:[]
};

const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_CHARACTER:
      return {
        ...state,
        myFavorites: [...state.allCharacters, payload],
        allCharacters: [...state.allCharacters, payload]
      };
    case DELETE_CHARACTER:
      return {
        ...state,
        myFavorites: state.myFavorites.filter((character) => character.id !== payload)
      };
      case FILTER:
        return{
          ...state,
           myFavorites: state.allCharacters.filter(allchar => allchar.gender === payload)
        }
        case ORDER:
          const allCharactersCopy = [...state.allCharacters]
          return{
            ...state,
            myFavorites: payload === 'A'
            ? allCharactersCopy.sort((a,b) => a.id - b.id)
            :allCharactersCopy.sort ((a,b )=> b.id - a.id)
          }
    default:
      return { ...state };
  }
};
export default reducer;
