import data from "../database/days.json"
import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import UseFetch from "./UseFetch2";

const DayList = () => {
    // days -> 변수의 상태만 관리
//    const [days, setDays] = useState([]);
// //    useEffect() -> json data 한 번만(,[])읽어오기
//    useEffect(() => {
//     console.log('json 서버로부터 읽어왔습니다 (DayList())');
//     // fetch: 서버 주소에 접근 ==> 비동기 처리 then
//     fetch("https://localhost:3001/days")
//     .then((res)=>{
//         // json 형식으로 변경
//         return res.json();
//     })
//     .then((data)=>{
//         // 읽어온 데이터를 days 배열에 저장
//         setDays(data);
//     })
//     // [] : 렌더링 시 한 번만 실행 (처음에만 실행)
//    },[]);
const days = UseFetch("http://localhost:3001/days");

    return (
        <div>
            <ul className="list_day">
                {data.days.map(
                    (day) => {
                        return(
                            <li key={day.id} className="lilist">
                                <Link to={"/word/" + day.day}>
                                    Day {day.day}
                                </Link>
                            </li>
                        )
                    }
                )}
            </ul>
        </div>
    )
}

export default DayList;