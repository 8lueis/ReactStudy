import React from "react";
const CreateContent = (props) => {
    return(
        <article>
            <h2>Create</h2>
            <form action="/create_process" method="post"
            onSubmit={(e)=>{
                e.preventDefault(); //화면 멈춤
                props.onSubmit( // 입력된 title, desc 값을 인자로 전달 (입력된 값에 접근e.target.title.value...)
                    e.target.title.value,
                    e.target.desc.value);
                    e.target.title.value=''; // 빈 칸으로 설정 == 초기치로 변경
                    e.target.desc.value=''; //빈 칸으로 설정
            }}>
                {/* name = title, desc에 접근해 입력 값 전달 */}
                {/* props.onSubmit에 입력된 title, desc 값 인자로 전달*/}
               
                <p>
                    <input type="text" name="title" placeholder="title"></input>
                </p>
                <p>
                    <input type="textarea" name="desc" placeholder="description"></input>
                </p>
                <p>
                    <input type="submit"></input>
                </p>
            </form>
        </article>
    )
}

export default CreateContent;