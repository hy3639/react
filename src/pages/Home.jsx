import products from "../data/products";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import "../styles.css";
import { useState } from "react";
// import NoticeBox from "../components/NoticeBox";

function Home() {
  console.log("✅ Home 렌더링됨!");

  const [filter, setFilter] = useState("전체"); //filter는 현재 선택된 카테고리 값 저장, 기본값 전체

  const filtered =
  filter === "전체"
  ? products
  : products.filter((item) => item.category === filter);

  const categories = ["전체","딸기","초코","망고","녹차"]; // 셀렉트 value

  return (
    <div className="p-6">
      <h1 className="flex justify-center text-2xl">🎂 케이크 목록</h1> 
      
      <div className="flex justify-end gap-2 mt-6">
        {/* {[
          { label: "전체", emoji: "🍰" },
          { label: "딸기", emoji: "🍓" },
          { label: "초코", emoji: "🍫" },
          { label: "망고", emoji: "🥭" },
          { label: "녹차", emoji: "🍵" },
        ].map(({ label, emoji }) => (
          <button
            key={label}
            onClick={() => setFilter(label)}
            className={`px-3 py-1 rounded-full border text-sm ${
              filter === label
                ? "bg-pink-500 text-white"
                : "bg-white text-gray-700 hover:bg-pink-100"
            }`}
          >
            {emoji} {label}
          </button>
        ))} */}
         <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border px-4 py-2 rounded shadow-sm"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* <div className="cake-list flex justify-center py-10 px-10 gap-4">
          {products.map((item) => (
            <Link key={item.id} to={`/product/${item.id}`}>
              <Card title={item.title} image={item.image} id={item.id} price={item.price}/>
            </Link>
          ))}
      </div> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 py-10">
         {filtered.map((item) => (
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
