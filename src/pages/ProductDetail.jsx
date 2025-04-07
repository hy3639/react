import { useParams} from "react-router-dom"; //주소값 읽는 hook
import { useState } from "react";
import products from "../data/products"; //전체상품 데이터
 import LikeButton from "../components/LikeButton";
import Button from "../components/Button";
import Modal from "../components/Modal";
import Tabs from "../components/Tabs";

function ProductDetail({handleAddToCart}) {
    const { id } = useParams(); // url의 id 가져오기
    const product = products.find((item) => item.id === parseInt(id)); // products.find(조건) , 배열에서 조건에 맞는 "딱 하나"의 값을 찾아서 리턴, 조건에 맞는 게 없으면 undefined

   // const [added, setAdded] = useState(false);
   const [quantity, setQuantity] = useState(0); //상태선언, 수량과 담긴 여부
   const [isModalOpen, setIsModalOpen]= useState(false);

    
    if (!product) return <p>상품을 찾을 수 없습니다.</p>;

    // 버튼클릭시 실행되는 함수
    // const handleClick = () => {
    //     setQuantity((prev) => prev + 1); 
    // };

    return (
    <div className="cake-detail p-6 max-w-xl mx-auto">
        {/* <h2 className="text-xl mb-8">{product.id}번째 케이크는 {product.title}입니다.</h2> */}
        <img src={product.image} alt={product.title} className="w-full h-[300px] object-cover rounded shadow mb-6" onClick={() => setIsModalOpen(true)} />
        <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
        <p className="text-gray-600 mb-4">
            {product.description || "이 케이크는 맛과 디자인 모두 만족시켜 드립니다."}
        </p>
        <p className="text-xl font-semibold mb-6">{product.price?.toLocaleString()}원</p>

        {/* <div className="flex items-center  justify-center gap-4">
            <Button color="primary" size="md" onClick={() => alert("장바구니에 담겼습니다!")}>🛒 장바구니 담기</Button>
            <Button color="gray" size="md" to="/">← 홈으로</Button>
        </div> */}

        <div className="flex items-center justify-center gap-4">          
            <div className="">
                {quantity > 0 ?  <p>🧺현재 수량: {quantity}개</p> : <p>🧺현재 수량 0개</p>}
                <Button
                color="primary"
                size="lg"
                onClick={() => {
                    handleAddToCart(product);
                    setQuantity((prev) => prev + 1);
                }}
                >
                {quantity > 0 ? "🛒 추가 담기" : "장바구니 담기"}
                </Button>
            </div>
            <LikeButton />
        </div>

        <Tabs
        tabs={{
            "상품 설명": <p>{product.description}</p>,
            "리뷰": <p>아직 리뷰가 없습니다.</p>,
            "배송 안내": <p>당일 주문 시 다음날 발송됩니다 🚚</p>
        }}
        />
       
       <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <h2 className="text-xl font-bold mb-2">📦 케이크 상세 설명</h2>
            <p>{product.description || "이 케이크는 부드러운 시트와 신선한 재료로 만들어졌습니다."}</p>
       </Modal>
    </div>
) ;
}

export default ProductDetail;
