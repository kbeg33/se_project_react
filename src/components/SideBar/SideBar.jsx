import "./SideBar.css";
import avatar from "../../assets/avatar.png";


function SideBar() {
    return (
    <div className="sidebar">
        <img className="sidebar__avatar" src={avatar} alt="Avatar" />
        <p className="sidebar__username">That Guy</p>
    </div>
    );
}

export default SideBar;