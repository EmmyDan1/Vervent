function Button({children, className}) {
    return (
        <button className={` px-4 py-1 rounded-full text-sm ${className}`}>
            {children}
        </button>
    );
}

export default Button;