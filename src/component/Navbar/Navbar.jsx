import styles from "./Navbar.module.css";
import Search from "../Search/Search";
import {NavLink, useNavigate} from 'react-router-dom'

const Navbar = (props) => {
  const navigate = useNavigate();
  const handlelogout=()=>{
    props.setLogout(true)
    navigate('/')
  }
  return <div className={styles.containerNav}>
    <button onClick={handlelogout}>Log Out</button>
    <NavLink to='/about'>
    <button>About</button>
    </NavLink>
    <NavLink to= '/home'>
    <button>Home</button>
    </NavLink>
    <Search onSearch = {props.onSearch}/>
  </div>;
};

export default Navbar;
