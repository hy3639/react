// src/components/Card.jsx

function Card({ title, image, price }) {
    console.log(price);
    return (
        //  className="w-full h-[180px] object-cover" 
      <div className="bg-white shadow rounded overflow-hidden hover:shadow-lg transition"> 
        <img src={image} alt={title} className="w-50 h-48 object-cover"/>
        <div className="p-4 text-center">
          <h2 className="text-lg font-semibold mb-2">{title}</h2>
          {price && <p className="text-gray-600 font-medium">{price.toLocaleString()}원</p>}
        </div>
      </div>
    );
  }
  
  
  export default Card;
  