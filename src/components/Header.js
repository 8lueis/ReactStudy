import React from "react"
const Header = (props) => {
    return(
        <div>
            <header>
                <h1> <a href="/" onClick={(e) => {
                    e.preventDefault();
                    props.onChangePage();
                }}>{props.title}</a></h1>
                {props.sub}
            </header>
        </div>
    )
}

export default Header;