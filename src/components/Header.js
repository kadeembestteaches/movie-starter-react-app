import React from 'react'
import {Link} from "react-router-dom"
const Header = () => {
    return (
        <header>
            <div className="container">
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">HOme</Link>
                            </li>
                            <li>
                                <Link to="/users">Registration</Link>
                            </li>
                        </ul>
                    </nav>
            </div>
        </header>
    )
}

export default Header
