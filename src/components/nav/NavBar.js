import { Link, useNavigate } from "react-router-dom"


export const NavBar = () => {
    const navigate = useNavigate()

    return <ul className="NavBar">
        <li className="navbar__item active">
                <Link className="navbar__link" to="/nurseries">Nurseries</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/distributors">Distributors</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/retailers">Retailers</Link>
            </li>
    </ul>
}