import React from "react";
import styles from "./Card.module.css";
import { addCharacterFav, deleteCharacterFav } from "../redux/actions/index";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Card = ({ onClose, id, name, status, specie, gender, image, addCharacterFav, deleteCharacterFav, myFavorites }) => {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      deleteCharacterFav(id);
    } else {
      setIsFav(true);
      addCharacterFav({ name, status, specie, gender, image, id});
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={styles.containerCard}>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <button onClick={() => onClose(id)}>X</button>
      <Link to={`/detail/${id}`} >
      <h3>{name}</h3>
      </Link>
      <h4>status:{status}</h4>
      <h4>species:{specie}</h4>
      <h4>gender:{gender}</h4>
      <img src={image} alt={name} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps, { addCharacterFav, deleteCharacterFav })(Card);
