function Badge({ children, className }) {
    return (
      <span
        className={`inline-flex  px-2.5 py-0.5 rounded-full text-sm font-medium ${className}`}
      >
        {children}
      </span>
    );
  }
  
  export default Badge;