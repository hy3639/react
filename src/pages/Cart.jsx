function Cart({ items }) {
  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-bold mb-4">🛒 장바구니</h2>
      {items.length === 0 ? (
        <p>장바구니가 비어있어요.</p>
      ) : (
        <ul className="space-y-4">
          {items.map((item, i) => (
            <li key={i} className="p-4 bg-white shadow rounded">
              <h3 className="font-semibold">{item.title}</h3>
              <p>가격: {item.price.toLocaleString()}원</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;