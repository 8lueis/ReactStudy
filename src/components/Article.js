import React from "react"
export const Article = (props) => {
    return(
        <div>
            <article>
                <h2> {props.title} </h2>
                {props.desc}
            </article>
        </div>
    )
}

export default Article;