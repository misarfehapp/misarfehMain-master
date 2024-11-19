interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    className?: string;
  }
  
  const Button = ({ 
    children, 
    onClick, 
    type = "button",
    className = ""
  }: ButtonProps) => {
    return (
      <button 
        type={type}
        onClick={onClick}
        className={`w-full bg-[#004000] text-white py-4 rounded-2xl text-lg font-medium flex items-center justify-center gap-2 ${className}`}
      >
        <span>←</span>
        {children}
      </button>
    );
  };
  
  export default Button;