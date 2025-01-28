import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "../Menu/MenuItems";
import { Link } from "react-router-dom";


class Navbar extends Component {
    state = {clicked: false};
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    render() {
        return(
            <nav className="NavbarItems">
                {/* <h1 className="navbar-logo">Travel My Sri Lanka</h1> */}
                <Link to="/" className="navbar-logo">
                    <img src={require('../../assets/Logo.png')} alt="Logo" className="logo-image" />
                </Link>
                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>

                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                        <Link className={item.Cname} to={item.url}>
                            <i className={item.icon}></i> {item.title}</Link>
                    </li>
                        )
                    })}
                    <button>Sign Up</button>
                </ul>
            </nav>
        )
    }

}

export default Navbar
