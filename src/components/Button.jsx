import { Link } from "react-router-dom";

function Button ({className, children, onClick, color = "primary", size = "md" , to, style={}}){ //초기값
    console.log(size);
    const base = "text-white font-semibold rounded transition duration-200";
    const sizes = {
       sm: "text-sm px-3 py-1",
       md: "text-base px-4 py-2",
       lg: "text-lg px-6 py-3",
    };
    const colors ={
        primary: "bg-blue-500 hover:bg-blue-600",
        danger: "bg-red-500 hover:bg-red-600",
        gray: "bg-gray-500 hover:bg-gray-600",
        black: "bg-black hover:bg-gray-800",
    }

    const finalClass = `${base} ${sizes[size] || sizes.md} ${colors[color] || colors.primary} ${className}`;

    // return (
    //     <button onClick={onClick}
    //      className={`${base} ${size[size] || size.md} ${colors[color] || color.primary}`}
    //      >
    //         {children}
    //     </button>
    // );


    // 만약 to가 있으면 버튼 대신 <Link> 렌더링
    if (to) {
        return (
        <Link to={to} className={finalClass} style={style}>
            {children}
        </Link>
        );
    }

    return (
        <button onClick={onClick} className={finalClass} style={style}>
            {children}
        </button>
    );
}

export default Button;