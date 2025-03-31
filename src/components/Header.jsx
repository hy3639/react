import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={{ padding: "1rem", background: "#f4f4f4", borderBottom: "1px solid #ddd" }}>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link to="/">홈</Link>
        <Link to="/about">소개</Link>
        <Link to="/cart" className="">🛒 장바구니 가기</Link>
      </nav>
    </header>
  );
}

export default Header;
