import { useState } from "react";
import validation from "../Validation/validation";
import styles from './Forms.module.css'

const Forms = ({login}) => {
    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({});
    const handleChange = (event) => {
        setErrors(validation({...userData, [event.target.name]: event.target.value}))
        setUserData({
            ...userData, //hacemos una copia para que no se pisen los valore porque tengo mas de un objeto
            [event.target.name]: event.target.value, //el nombre del input que disparo el input
        })
    };
    const handleSubmit= (event)=>{
        event.preventDefault();
        login(userData)
    }
  return (
    <div className={styles.loginbox}>
      <form>
        <div className={styles.userbox}>
        <input
          onChange={handleChange}
          value={userData.email}
          type="text"
          name="email"
        />
        <label htmlFor="email">Email</label>
        {errors.email && <p>{errors.email}</p>}
        </div>
        <br />
        <div className={styles.userbox}>
        <input
          onChange={handleChange}
          value={userData.password}
          type="password"
          name="password"
        />
        <label htmlFor="password">Password</label>
        {errors.password && <p>{errors.password}</p>}
        <button  onClick={handleSubmit} type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
export default Forms;
