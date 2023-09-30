import React from "react"

const Nav = (props) => {
    
    const list = props.data.map(content => {
      return(
        <li key={content.id}>
            <a 
            href={content.id}
            
            onClick={(e)=>{
                e.preventDefault();
                props.onChangePage(content.id);
                // props.onChangePage(e.target.data.id);
            }}
            
            >
                
                {content.title}</a></li>
      );
    });
    return(

        <div>
            <nav>
                <ul>
                    {list}
                </ul>
            </nav>
        </div>
    )
}

export default Nav;