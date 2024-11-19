interface AuthHeaderProps {
    title: string;
    subtitle: string;
  }
  
  const AuthHeader = ({ title, subtitle }: AuthHeaderProps) => {
    return (
      <div className="text-white text-right mb-12">
        <h1 className="text-xl font-bold mb-2">{title}</h1>
        <p className="text-sm opacity-80">{subtitle}</p>
      </div>
    );
  };
  
  export default AuthHeader;