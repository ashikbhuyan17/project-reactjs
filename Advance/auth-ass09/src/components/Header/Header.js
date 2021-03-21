
import { Link } from 'react-router-dom';
import "./Header.css"
import React, { useContext } from "react";
import { UserContext } from '../../App';
const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    console.log(loggedInUser)

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <Link to="/home" class="navbar-brand justify-content-center" style={{ color: "#FF5833", textDecoration: "none" }}><h3>Hurray Riders</h3></Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div class="navbar-nav ">
                        <Link to="/home" class="nav-link active" >Home</Link>
                        <Link to="/destination" class="nav-link active" >Destination</Link>
                        <Link to="/blog" class="nav-link active" >Blog</Link>
                        <Link to="/contact" class="nav-link active" >Contact</Link>

                        {
                            loggedInUser.email ? <small>{loggedInUser.email} </small> :
                                <Link to="/login" className="header-link" class="nav-link" style={{ background: "orange", color: "#fff", padding: "10px 16px", borderRadius: "5px" }}>
                                    LogIn
                                </Link>
                        }

                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;