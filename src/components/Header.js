
import { Link } from "react-router-dom"
import "./../styles/style.css"

function Header(props) {
    return (
        <div className="header-container">
            <h4>Welcome <em>{props.email}</em></h4>
            <Link to="/">
            <button className="header-btn">Logout</button>
            </Link>
        </div>

    )

}

export default Header;