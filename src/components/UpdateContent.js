import React, {useState} from "react";

const UpdateContent = (props) => {
    console.log(props.data);

    let [title, setTitle] = useState(props.data.title);
    let [desc, setDesc] = useState(props.data.desc);
    // porps.data.title/desc 이용 -> 선택된 데이터를 title, desc 상태 변수에 저장

    return(
        <article>
            <h2>Update</h2>
            {/* form의 submit 버튼 클릭 시 onSubmit() 호출 */}
            <form action="/update_process" method="post"
            onSubmit={(e)=>{
                e.preventDefault();
                props.onSubmit(
                    e.target.title.value,
                    e.target.desc.value);
                    e.target.title.value='';
                    e.target.desc.value=''; //빈 칸으로 설정
            }}>
                {/* props.onSubmit -> 입력된 title, desc 값 인자로 전달 */}
                <p>
                    {/* input -> 기존 데이터 출력 및 입력 받기 */}
                    <input 
                    type="text"
                    name="title"
                    placeholder="title"
                    value={title}
                    // 기존 값 출력
                    // input의 value는 초기값이나 마찬가지!
                    // 입력 값에 변화가 있을 때 호출되는 이벤트 리스너
                    onChange={(e)=>{
                        setTitle(e.target.value);
                    }}>
                        {/* 로 onChange 이용해 title 값 저장 */}
                    </input>
                </p>
                <p>
                    <textarea
                    name="desc"
                    placeholder="description"
                    value={desc}
                    onChange={(e)=>{
                        setDesc(e.target.value);
                    }}>

                    </textarea>
                </p>
                <p>
                    <input type="submit"/>
                </p>

            </form>
        </article>
    )
}
export default UpdateContent;