import React from "react";
import { Link } from "react-router-dom"
const EmptyPage = () => {
    return (
        <div>
            <h2>잘못된 접근입니다.</h2>
            <Link to={"/"}>메인으로 돌아가기</Link>
            {/* 메인으로 돌아가기 클릭 시 '/' 호출 */}
        </div>
    )
}

export default EmptyPage;