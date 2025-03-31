import products from "../data/products";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import "../styles.css";

function Home() {
  console.log("✅ Home 렌더링됨!");
  return (
    <div>
     
     
      <h1 className="flex justify-center">🎂 케이크 목록</h1> 
      <div></div>  
      <Link to="/cart"></Link>

      <div className="flex justify-center py-10 px-10">
          {products.map((item) => (
            <Link key={item.id} to={`/product/${item.id}`}>
              <Card title={item.title} image={item.image} id={item.id}/>
            </Link>
          ))}
      </div>

      <div className="p-10 bg-yellow-100 text-2xl text-center">
        🎉 Tailwind 작동 중!
      </div>  
     
    </div>
  );
}

export default Home;
