import Image from "next/image";

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <div className={`flex justify-end mb-8 ${className}`}>
      <Image 
        src="/images/logo-white.svg" 
        alt="Misarfeh Logo" 
        width={64} 
        height={64}
        priority
        className="text-white"
      />
    </div>
  );
};

export default Logo;
