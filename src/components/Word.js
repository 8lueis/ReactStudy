import React from "react";
import { useState } from "react";

const Word = ({word}) => {
    // 다 외웠는지 플래그로 관리
    const [isDone, setIsDone] = useState(word.isDone);
    // 뜻이 화면에 보이는지 플래그로 관리
    const [isShow, setIsShow] = useState(false)
    // 플래그 온, 오프 처리
    const toggleDone = () =>{
        // fetch로 json 서버 접근 데이터 수정
        // word.id -> 수정 word 접근 
        fetch("http://localhost:3001/words"+word.id,{
            // 데이터 수정
            method: "PUT",
            headers: {
                "Content-type":"application/json",
            },
            body: JSON.stringify({
                ...word,
                isDone:!isDone
            }),
        }).then((res)=>{
            // res가 ok면 isDone 상태 수정 
            if(res.ok){
                setIsDone(!isDone);
            }
        });
    }

   
    // 플래그 온, 오프 처리
    const toggleShow = () => {
        setIsShow(!isShow);
    }


    // 삭ㅈㅔ

     // 초기 값: word
     const [wordDel, setWordDel] = useState(word);
     // window.confirm 삭제 확인 -> 지울 게 없으면 리턴(null)
     // fetch()=> json 서버 접근 
     // method => DLETE 설정
     const del = () =>{
         if(window.confirm("정말 삭제하시겠습니까?")){
             fetch("http://localhost:3001/words"+word.id,{
                 method: "DELETE",
             }).then((res)=>{
                 if(res.ok){
                     // 윈도우 리로드 
                     setWordDel({id:0});
                     window.location.reload();
                 }
             })
         }
     }
     if(wordDel.id === 0){
         return null;
     }
    return(
        <>
        {/* isDone이 true이면 className은 off로 처리 */}
        <tr className={isDone ? "off":""}>
            <td>
                {/* 체크 박스 체크에 따라서 toggleDone()에 의해 isDone 설정 */}
                <input type="checkbox" checked={isDone} onChange={toggleDone}/>
            </td>
            <td>{word.eng}</td>
            {/* word.kor은 isShow 값에 따라서 처리 -> isShow가 참이어야 단어가 보이도록 */}
            <td>{isShow && word.kor}</td>
            <td>
                {/* 뜻 보기, 숨기기 버튼에 따라 toggleShow()에 의해 처리 */}
                <button onClick={toggleShow}>뜻 {isShow ? "숨기기":"보기"}</button>
                {/* 삭제 버튼 */}
                <button className="btn_del" onClick={del}>삭제</button>
            </td>
        </tr>
        </>
    )
}

export default Word;