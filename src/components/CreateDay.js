import { useHistory } from "react-router-dom";
import UseFetch2 from "./UseFetch2";
import React from "react";

const CreateDay = () => {
    // days 정보 배열로 가져오기 
    const days = UseFetch2("http://localhost:3001/days");
    // 페이지 이동
    const history = useHistory();
    // addDay로 json 데이터 추가
    const addDay = () => {
        console.log('days size: '+days.length);
    }
    // id는 자동 증가 1-> 2-> 3-> ...
    // 현재의 days 정보에서 하나 추가 
    fetch("http://localhost:3001/days",{
        method:"POST",
        headers: {
            "Content-type":"application/json",
        },
        body: JSON.stringify({
            day: days.length+1,
        }),
    }).then((res)=>{
        if(res.ok){
            alert("Day가 추가 완료 되었떠요!!");
            history.push('/'); // 메인으로 이동
            // 메인 페이지가 /니까... 거기로 push하는 건가...
        }

    });

    return(
        <>
        <h1>현재 일수{days.length}일 </h1>
        <button onClick={addDay}> Day 추가</button>
        </>
    )
}

export default CreateDay;