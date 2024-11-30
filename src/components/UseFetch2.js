import React, { useEffect, useState } from "react";
// DayList, WordList에 같은 코드가 포함되어 있는데 (useEffect, fetch 쓰는 부분)
// 그 부분을 하나의 Component UseFetch로 분리해 구성할 수 있다

const UseFetch = (url) => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        // fetch(url) -> res.json() -> setData(data)
        fetch(url)
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            setData(data);
        })
        // url 변경 시 useEffect 호출
    },[url]);
    return data;
}

export default UseFetch;

