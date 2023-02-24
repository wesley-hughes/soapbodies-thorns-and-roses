import { useEffect, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"


export const NavBar = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const [purchases, setPurchases] = useState ([])

    const thornUser = localStorage.getItem("thorn_user")
    const thornUserObject = JSON.parse(thornUser)


    //useLocation in order to watching the path of the user
    useEffect(
        () => {
    fetch(`http://localhost:8088/purchases?customerId=${thornUserObject.id}`)
        .then(res => res.json())
        .then((data) => {
            setPurchases(data)
        })
    }, [location]
    )

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
            <li className="navbar__item active">
                <Link className="navbar__link" to="/purchaseList">My Cart {purchases.length}</Link>
            </li>
            {
                localStorage.getItem("thorn_user")
                    ? <li className="navbar__item navbar__logout">
                        <Link className="navbar__link" to="" onClick={() => {
                            localStorage.removeItem("thorn_user")
                            navigate("/", {replace: true})
                        }}>Logout</Link>
                    </li>
                    : ""
            }
    </ul>
}