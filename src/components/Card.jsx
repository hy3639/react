function Card({id, title, image}){
    return (
        <div className="card">
            <img src={image} alt={title} />
            <p>{id}번째 {title}</p>
        </div>
    );
}

export default Card;