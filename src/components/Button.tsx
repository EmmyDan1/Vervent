function Button({children, className, onClick}) {
    return (
        <button className={` rounded-full text-sm ${className}`} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;
