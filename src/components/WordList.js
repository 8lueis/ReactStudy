import React, { useEffect, useState } from "react";
import data from "../database/words.json"
import { useParams } from "react-router-dom";
import Word from"../components/Word"
import UseFetch from "./UseFetch2";

const WordList = () => {
    const {day} = useParams();
    // const [wordList, setWordList] = useState([]);
    // useEffect(()=>{
    //     console.log("json sever로부터 읽어왔어요 (WordList())");
    //     fetch("https://localhost:3001/words?day="+day)
    //     .then((res)=>{
    //         return res.json();
    //     })
    //     .then((data)=>{
    //         setWordList(data);
    //     })
    //     // day 정보에 따라 해당 내용 가져옴 
    //     // day 변수의 변화에 따라 useEffect() 실행
    // },[day]);
    // let wordList = data.words.filter(
    //     (word) => {
    //         return (word.day === Number(day))
    //     }
    // )
    const wordList = UseFetch("http://localhost:3001/words?day="+day);
    return(
        <div>
            <table>
                <tbody>
                    {wordList.map((word)=>{
                        console.log(word);
                        return (
                            // <tr key={word.id}>
                            //     <td>{word.eng}</td>
                            //     <td>{word.kor}</td>
                            // </tr>
                            <Word word={word} key={word.id}/>
                            // Word -> Word.js의 const Word??
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default WordList;