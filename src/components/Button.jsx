function Button ({children, color = "black", size = "medium", onClick}){
    console.log("버튼 색상:", color); 
    const styles= {
        backgroundColor:color,
        color: "white",
        padding: size === "large"? "1rem 2rem" : "0.5rem",
        border: "none",
        borderRadius: "8px",
        cousor :"pointer",
        fontSize : size === "large" ? "1.2rem" : "1rem",
        transition : "all 0.2s ease",
    };

    return (
        <button style={styles} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;