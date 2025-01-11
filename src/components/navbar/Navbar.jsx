import "./navbar.css"
import logo from "../../assets/images/logo.png"
import search from "../../assets/images/search.png"

const Navbar = () =>{
    console.log('pc')
    return (
        <div id="nav" className="navbar-container">

            <div className="logo">
                <img src={logo} alt="logo" />
            </div>

            <div className="nav-items">
                <a href="#home">Mediacl Home</a>
                <a href="#services" >Mediacl Services</a>
                <a href="#doctors">Medical Doctors</a>
                <a href="#partners">Medical Partners</a>
                <a href="#facilities">Medical Facilities</a>
                <a href="#comments">Medical Comments</a>
            </div>

            <div className="side-nav-items">
                <h3>Login</h3>
                <img src={ search } alt="search" />
            </div>

        </div>
    )
}


export default Navbar