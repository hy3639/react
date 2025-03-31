import React from "react";
import { Link } from 'react-router-dom';

function NotFound(){
    return (
      <div style={{padding:"2rem", textAlign:"center"}}>
            <h1>🚫 404 - 페이지를 찾을 수 없어요</h1>
            <p>주소가 잘못되었거나, 존재하지 않는 페이지입니다.</p>
            <Link to="/">🏠 홈으로 가기</Link>
      </div>  
    );
}

export default NotFound;