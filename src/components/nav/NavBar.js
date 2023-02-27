import { useEffect, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"


export const NavBar = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const [purchases, setPurchases] = useState([])

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

    return <>

        <header className="header sticky top-0 bg-white shadow-md flex items-center justify-between px-8 py-02">

            <h1 className="w-3/12 py-2 px-1 flex row ">
                <Link className="navbar__link hover:expand-1 " to="/home">
                    <svg className="w-12 h-12" width="800px" height="800px" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M208.8 178.494C210.706 234.424 143.341 287.589 168.352 345.317" stroke="#016685" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M209.54 171.025C200.69 169.12 191.801 166.306 183.739 162.043C175.313 157.591 167.19 154.266 160.354 147.348C100.32 86.5497 241.204 137.438 220.423 164.494" stroke="#016685" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M175.813 85.052C177.757 79.1751 180.649 72.4313 187.845 71.5608C196.483 70.5197 191.731 75.8778 194.444 79.804C195.136 80.8096 196.924 77.1676 197.546 76.8088C202.673 73.8383 208.569 72.6019 214.624 73.4368C220.844 74.2931 218.897 88.2676 216.567 91.4192C193.089 123.149 160.289 88.527 160.289 107.533" stroke="#016685" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M225.957 76.4089C240.893 99.8657 209.306 120.736 214.377 146.126" stroke="#016685" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M181.451 56.6314C155.79 40.8821 134.114 100.525 140.138 111.267" stroke="#016685" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M133.478 123.717C97.63 152.166 162.832 178.009 186.433 175.882" stroke="#016685" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M210.086 60.8933C221.796 54.0607 234.751 50.8839 247.371 58.1089C278.792 76.1016 226.296 126.771 226.296 153.596" stroke="#016685" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M253.621 106.288C290.246 128 250.934 152.499 228.76 159.82" stroke="#016685" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M197.638 239.497C218.463 211.413 273.887 228.707 291.009 204.638" stroke="#016685" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M175.226 248.211C160.142 239.912 134.305 239.539 116.714 242.24" stroke="#016685" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M152.865 238.472C97.4105 199.697 88.4057 287.205 154.063 245.233" stroke="#016685" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M227.66 219.97C239.791 195.509 267.959 199.979 289.703 199.979C290.692 199.979 279.138 209.32 273.03 218.768C259.623 239.502 248.142 249.431 223.78 231.161" stroke="#016685" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>        </Link>
                <p className="text-4xl font-semibold mt-auto mb-auto text-cyan-800">T&R</p>
            </h1>

            {/* navigation  */}
            <nav className="nav font-semibold text-lg">
                <ul className="flex text-cyan-800 items-center">
                    <li className="p-4 border-b-2 border-red-400 border-opacity-0 hover:border-opacity-100 hover:text-cyan-500 duration-200 cursor-pointer active">
                        <Link className="navbar__link" to="/nurseries">Nurseries</Link>
                    </li>
                    <li className="p-4 border-b-2 border-red-400 border-opacity-0 hover:border-opacity-100 hover:text-cyan-500 duration-200 cursor-pointer">
                        <Link className="navbar__link" to="/distributors">Distributors</Link>
                    </li>
                    <li className="p-4 border-b-2 border-red-400 border-opacity-0 hover:border-opacity-100 hover:text-cyan-500 duration-200 cursor-pointer">
                        <Link className="navbar__link" to="/retailers">Retailers</Link>
                    </li>
                    <li className="p-4 border-b-2 border-red-400 border-opacity-0 hover:border-opacity-100 hover:text-cyan-500 duration-200 cursor-pointer">
                        <Link className="navbar__link" to="/purchaseList">My Cart ({purchases.length})</Link>
                    </li>
                </ul>
            </nav>

            {/* <!-- buttons ---> */}
            <div className="w-3/12 flex justify-end">
                {
                    localStorage.getItem("thorn_user")
                        ? <p className="navbar__item navbar__logout mt-1 text-slate-400 hover:text-cyan-600">
                            <Link className="navbar__link" to="" onClick={() => {
                                localStorage.removeItem("thorn_user")
                                navigate("/", { replace: true })
                            }}>Logout</Link>
                        </p>
                        : ""
                }

        </div>
    </header>
     
    </>
}