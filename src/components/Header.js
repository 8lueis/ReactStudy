import React from "react";
import {Link} from "react-router-dom"

const Header = () => {
    return(
        <div className="header">
            <h1>
                <a className="title-name" href="/">TOEIC 英単語</a>
            </h1>
            <div className="menu">
                {/* <a href="#" className="link">+ Word</a> */}
                <Link to="/create_word" className="link">
                + Word
                </Link>
                {/* <a href="#" className="link">+ Day</a> */}
                <Link to="/create_day" className="link">
                + Day
                </Link>
            </div>

        </div>
    )
}


export default Header;