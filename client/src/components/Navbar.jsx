import React from "react";
import {Link} from 'react-router-dom'
const Navbar=()=>{
    return(
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    <img src="logo.jfif" width='40' height='40' />
                </div>
                <div className="links">
                    <Link className="Link" to='/?cat=art' >
                        <h6>ART</h6>
                    </Link>
                    <Link className="Link" to='/?cat=technology' >
                        <h6>    TECHNOLOGY</h6>
                    </Link>
                    <Link className="Link" to='/?cat=cinama' >
                        <h6>CINAMA</h6>
                    </Link>
                    <Link className="Link" to='/?cat=design' >
                        <h6>DESIGN</h6>
                    </Link>
                    <Link className="Link" to='/?cat=food' >
                        <h6>FOOD</h6>
                    </Link>
                    <span>john</span>
                    <span>Logout</span>
                    <span className="write">
                        <Link to='/write'>Write</Link>
                    </span>
                </div>
            </div>
            </div>
    )
}
export default Navbar;