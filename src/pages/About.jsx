// import React from "react";
// import { Link } from "react-router-dom";
import Button from "../components/Button";


function About() {
    
    // const handleClick = () => {
    //     alert("주문페이지로 이동");
    // };

    return (
        <div style={{padding:"2rem"}}>
            <h1>🍰 About Us</h1>
            <p>안녕하세요! 정하 케이크샵입니다 🎂</p>
            <p>우리의 케이크는 정성으로 구워집니다. 다양한 맛과 스타일을 확인해보세요!</p>

{/*            
          <Button color="gold" size="medium" onClick={handleClick}> <Link to="/">주문하러 가기</Link></Button>
          <Link className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded" to="/">주문하러 가기</Link> */}

            <Button className="inline-block" to="/" color="primary" size="lg">
                주문하러 가기
            </Button>
            {/* <Button to="/" color="primary" size="lg" style={{ display: "inline-block" }}>
                주문하러 가기
            </Button> */}
        </div>
    );
}

export default About;