import { useParams } from "react-router-dom"; //주소값 읽는 hook
import { useState } from "react";
import products from "../data/products"; //전체상품 데이터
import LikeButton from "../components/LikeButton";
import Button from "../components/Button";

function ProductDetail() {
    const { id } = useParams(); // url의 id 가져오기
    const product = products.find((item) => item.id === parseInt(id)); // products.find(조건) , 배열에서 조건에 맞는 "딱 하나"의 값을 찾아서 리턴, 조건에 맞는 게 없으면 undefined

   // const [added, setAdded] = useState(false);
   const [quantity, setQuantity] = useState(0); //상태선언, 수량과 담긴 여부

    
    if (!product) return <p>상품을 찾을 수 없습니다.</p>;

    // 버튼클릭시 실행되는 함수
    const handleClick = () => {
        setQuantity((prev) => prev + 1); //이전수량에서 1 추가
    };

    return (
    <div className="cake-detail">
        <h2 className="font-mono text-xl">{product.id}번째 케이크는 {product.title}입니다.</h2>
        <img src={product.image} alt={product.title} width="300" />
        <p>{product.description}</p>

        {/* 수량출력 */}
        <div className="p-8">
            {quantity > 0 ?  <p>🧺현재 수량: {quantity}개</p> : <p>🧺현재 수량 0개</p>}
            <Button onClick={handleClick} color="gray" size="lg">{quantity > 0 ? "🛒 추가 담기" : "장바구니 담기"}</Button>
        </div>
        

        

        <LikeButton />
    </div>
) ;
}

export default ProductDetail;
