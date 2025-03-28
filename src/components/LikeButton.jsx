import { useState } from "react";


function LikeButton(){
    const [cnt, setCnt]= useState(0);

    const handleClick = () => {
        setCnt((prev) => prev+1);
    };

    return (
      <div>
            {cnt > 0 && <p>좋아요: {cnt}개</p>}
            <button onClick={handleClick}>좋아요추가</button>       
      </div>

    );
}

export default LikeButton;