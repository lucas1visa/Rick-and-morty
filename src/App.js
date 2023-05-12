import React from "react";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import Cards from "./component/Cards/Cards";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Forms from "./component/Forms/Forms";
import About from "./component/About/About";
import Detail from "./component/Detail/Detail";
import Favorites from "./component/Favorites/Favorites";
import { useSelector } from "react-redux";
const EMAIL = "lucasjulian@gmail.com";
const PASSWORD = "123456789";

function App() {
  const myFavorites = useSelector((state)=> state.myFavorites)
  const [logout, setLogout] = useState(false);
  const [characters, setCharacters] = useState([]); //Hoocks
  // apartir de ahora tengo un estado que sellama characters = {}
  //setCharacter es la funcion encargada de modificar ese estado
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate("/home");
    }
  }
  useEffect(() => {
    !access && navigate("/");
  }, [access]);
  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name && !characters.find((pers) => pers.id == id)) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID o Esta Repetido.");
        }
      }
    );
  }
  function onClose(id) {
    //id
    setCharacters(characters.filter((pers) => pers.id !== id));
    //filter no modifica ell array original// devuelve un array nuevo
    //retorna un array donde hizo la comparacion y lo elimina
    //[{1},{2},{3}]
  }
  return (
    <div className="App">
      {pathname !== "/" && <Navbar onSearch={onSearch} setLogout={setLogout} />}
      <Routes>
        <Route path="/" element={<Forms login={login} />} />
        <Route
          path="/home"
          element={<Cards character={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites onClose={onClose}/>} />
      </Routes>
    </div>
  );
}

export default App;
