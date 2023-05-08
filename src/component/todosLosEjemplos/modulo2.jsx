//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//------------------------------------Estados----------------------------------------//
// import React from "react";

// class EstadoClases extends React.Component{
//     constructor(props){//toma las props crea el estado.
//         super(props)
//         this.state={
//             count:0,
//         }
//     }
//     componentDidMount(){
//         console.log("componente montado")
//     }
//     componentDidUpdate(){
//         console.log("componente actualizado")
//     }
//     componentDidCatch(){
//         console.log("componente cargado")
//     }
//     componentWillUnmount(){
//         console.log("componente desmontado")// borro todo lo que deje guardado en el estado
//     }
//         render(){
//             const aumentar = ()=>{
//                 this.setState({count: this.state.count + 1},()=>{
//                     console.log(this.state.count)})//demora un chikin,,//usamos una callback para una vez se actualice lo haga inmediatamente
//             }
//             const disminuir = ()=>{
//                this.setState.count > 0 &&  this.setState({count: this.state.count - 1})
//             }
//             <div>
//                 <h1>Contador Con Estados (Clases)</h1>
//                 <h3>{this.state.count}</h3>
//                 <button onClick={aumentar}>+</button>
//                 <button onClick={disminuir}>-</button>
//             </div>
//         }
// }
//
//
//
//
//
// bracket notetion
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//-----------------------------------------Redux----------------------------------------//
const { createStore } = require("redux"); // estructura de redux
const initialState = {
  count: 0,
  instructor: "",
  alumnos: [],
};
const reducer = (state = initialState, action) => {
  //viaja aca 'AUMENTAR_COUNT' en (action) playload: 'Lucas Visa
  console.log(action);
  // if(action.type === 'AUMENTAR_COUNT'){//la acction type es igual a 'AUMENTAR_COUNT'
  //     return{
  //         ...state,// guardamos para no pisa
  //         count : state.count + 1// aumentamos
  //     }
  // }
  // if(action.type === 'CAMBIAR_INSTRUCTOR'){//la acction type es igual a 'AUMENTAR_COUNT'
  //     return{
  //         ...state,// guardamos para no pisa
  //        instructor: action.payload
  //     }
  // }
  // if(action.type === 'AGREGAR_ALUMNOS'){//la acction type es igual a 'AUMENTAR_COUNT'
  //     return{
  //         ...state,// guardamos para no pisa
  //         alumnos : [...state.alumnos, action.payload]
  //     }
  // }
  switch (action.type) {
    case "AUMENTAR_COUNT":
      return {
        ...state,
        count: state.count + 1,
      };
    case "CAMBIAR_INSTRUCTOR":
      return {
        ...state, // guardamos para no pisa
        instructor: action.payload,
      };
    case "AGREGAR_ALUMNOS":
      return {
        ...state, // guardamos para no pisa
        alumnos: [...state.alumnos, action.payload],
      };
      case "LIMPAR INSTRUCTOR" : return{
        ...state,
        instructor: action.payload
      }
    default:
      return { ...state }; //devuelve el estado por defecto si no esta lo que pregunto
  }
};
const store = createStore(reducer);

store.dispatch({ type: "AUMENTAR_COUNT" }); // despacha un obj
console.log(store.getState());
store.dispatch({ type: "AUMENTAR_COUNT" }); // despacha un obj
console.log(store.getState());
store.dispatch({ type: "CAMBIAR_INSTRUCTOR", payload: " Lucas Visa" }); // despacha un obj
console.log(store.getState());
store.dispatch({ type: "CAMBIAR_INSTRUCTOR", payload: " Jose Soria" }); // despacha un obj
console.log(store.getState());
store.dispatch({ type: "AGREGAR_ALUMNOS", payload: " Lucas Visa" }); // despacha un obj
console.log(store.getState());
store.dispatch({ type: "AGREGAR_ALUMNOS", payload: " Sebas" }); // despacha un obj
console.log(store.getState());
store.dispatch({ type: "LIMPAR INSTRUCTOR",payload: ''}); // despacha un obj
console.log(store.getState());
//
//
//
//
//
//
//
//
// import {useState} from "react";

// React.useStateconst functiones = ( )=>
// {
//     return(
//         <div>
//             <species />
//             <label htmlFor="text"></label>
//             <input type="text" onChange={pa}/>
//         </div>
//     )
// }
