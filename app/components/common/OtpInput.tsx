interface OtpInputProps {
    value: string;
    onChange: (value: string) => void;
    onSubmit: () => void;
  }
  
  const OtpInput = ({ value, onChange, onSubmit }: OtpInputProps) => {
    return (
      <div className="flex flex-col gap-4">
        <input
          type="text"
          maxLength={4}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="p-2 text-center text-xl"
          placeholder="کد تایید را وارد کنید"
        />
        <button 
          onClick={onSubmit}
          className="bg-white text-green-800 p-2 rounded"
        >
          تایید
        </button>
      </div>
    );
  };
  
  export default OtpInput;