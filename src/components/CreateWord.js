import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import UseFetch2 from "./UseFetch2";
// CreateWord 함수 정의
const CreateWord = () => {
    // json 서버로부터 days 데이터 가져오기
    const days = UseFetch2("http://localhost:3001/days");
    // history ==> 이전 페이지로 이동함
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);

    // 입력 값에 접근하기 위해 useRef() 사용 
    // 상태 변수 정의, useRef(null) ==> DOM에 접근 
    // 초기 값: null로 설정 
    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);

    const onSubmit = (e) => {
        e.preventDefault(); // 입력 정보 리셋 방지 
        // 이용 데이터 추가 
        fetch("http://localhost:3001/words/",{
            method: "POST",
            headers: {
                "Content-type":"application/json",
            },
            body: JSON.stringify({
                day: dayRef.current.value,
                eng: engRef.current.value,
                kor: korRef.current.value,
                isDone: false,
            }),
        }).then(res=>{
            // res ok면 url 히스토리에서 word/day 호출
            if(res.ok){
                alert("단어 추가가 완료 되었습니다.");
                history.pushState(`/word/${dayRef.current.value}`);
            }
        });
        return(
        // form : onSubmit에 등록된 onSubmit 함수 호출 
        // 입력된 값을 engRef에 넣음 
        <form onSubmit={onSubmit}>
            <div className="input_area">
                <label>Eng</label>
                <input type="text" placeholder="computer" ref={engRef}></input>
            </div>
            <div className="input_area">
                <label>Kor</label>
                <input type="text" placeholder="컴퓨터" ref={korRef}></input>
            </div>
            <div className="input_area">
                <label>Day</label>
                {/* days.map을 통해 현재 등록된 day 정보 보여줌 */}
                <select ref={dayRef}>
                    {days.map((day)=>{
                        return(
                            <option key={day.id} value={day.day}>
                                {day.day}
                            </option>
                        );
                    })}
                </select>
            </div>
            <button>저장</button>
        </form>
        
    )
    }
}





export default CreateWord;