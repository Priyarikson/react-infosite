import React from "react"

export default function Navbar() {
    return (
        <nav>
            {/*<img src="../images/react-icon-small.png" className="nav--icon" />*/}
            <img src={require("../images/logo512.png")} className="nav--icon" alt="pic" />
            <h3 className="nav--logo_text">ReactFacts</h3>
            <h4 className="nav--title">React Course - Project 1</h4>
        </nav>
    )
}