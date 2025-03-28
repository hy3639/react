import products from "../data/products";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import "../styles.css";

function Home() {
  return (
    <div>
     
      <h1>🎂 케이크 목록</h1>    
      <Link to="/cart">🛒 장바구니 가기</Link>

      <div class="cake-list">
          {products.map((item) => (
            <Link key={item.id} to={`/product/${item.id}`}>
              <Card title={item.title} image={item.image} id={item.id}/>
            </Link>
          ))}
      </div>
     
    </div>
  );
}

export default Home;
