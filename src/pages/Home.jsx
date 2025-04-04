import products from "../data/products";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import "../styles.css";
// import NoticeBox from "../components/NoticeBox";

function Home() {
  console.log("✅ Home 렌더링됨!");
  return (
    <div className="p-6">
      <h1 className="flex justify-center text-2xl">🎂 케이크 목록</h1> 

      {/* <div className="cake-list flex justify-center py-10 px-10 gap-4">
          {products.map((item) => (
            <Link key={item.id} to={`/product/${item.id}`}>
              <Card title={item.title} image={item.image} id={item.id} price={item.price}/>
            </Link>
          ))}
      </div> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 py-10">
         {products.map((item) => (
            <Link key={item.id} to={`/product/${item.id}`}>
              <Card title={item.title} image={item.image} id={item.id} price={item.price}/>
            </Link>
          ))}
      </div>

      {/* <NoticeBox bg="bg-yellow-500" text="text-red" padding="p-5">
        케이크를 선택해 보세요.
      </NoticeBox> */}

      {/* <div className="p-10 bg-yellow-100 text-2xl text-center">
        🎉 Tailwind 작동 중!
      </div>   */}
     
    </div>
  );
}

export default Home;
