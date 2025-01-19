import "./Header.css"
import logo from "../../assets/logo.svg";
import avatar from "../../assets/avatar.png";

function Header({ handleAddClick, weatherData }) {
    const currentDate = new Date().toLocaleString("default", {
        month: "long",
        day: "numeric",
      });

    return (
        <header className="header">
            <div className="header__info">
                <img className="header__logo" src={logo} alt="Logo"/>
                <p className="header__date-and-lo">{currentDate}, {weatherData.city} </p>
            </div>
            <div className="header__user-container">
                <button onClick={handleAddClick} type="button" className="header__add-clothes-btn">+Add clothes</button>
                <p className="header__username">That Guy</p>
                <img src={avatar} alt="User photo" className="header__avatar" />
            </div>
        </header>
    )
}

export default Header;