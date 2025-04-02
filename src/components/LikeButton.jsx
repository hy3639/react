import { useState } from "react";
import Button from "../components/Button";



function LikeButton(){
    const [cnt, setCnt]= useState(0);

    const handleClick = () => {
        setCnt((prev) => prev+1);
    };

    return (
      <div>
           
            {/* <button>좋아요추가</button>        */}
            <p>좋아요: {cnt}개</p>
            <Button onClick={handleClick} color="primary" size="lg">좋아요</Button>
      </div>

    );
}

export default LikeButton;