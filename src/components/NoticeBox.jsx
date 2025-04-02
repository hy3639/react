function NoticeBox({    
    children,
    bg = "bg-yellow-100",
    text = "text-black",
    padding = "p-10",
    rounded = "rounded",
    align = "text-center",
  }) {
    const classNames = `${bg} ${text} ${padding} ${rounded} ${align}`;
  //  console.log(children);
    return <div className={classNames}>{children}</div>;
  }
  
  export default NoticeBox;