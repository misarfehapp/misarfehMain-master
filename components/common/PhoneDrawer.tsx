"use client";
import { useEffect, useState, useRef } from "react";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import Link from "next/link";
import PhoneIcon from "@/components/icons/PhoneIcon";

interface PhoneDrawerProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
}

const PhoneDrawer = ({ value, onChange, onSubmit }: PhoneDrawerProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isVerifying, setIsVerifying] = useState(false);
  const [otpValues, setOtpValues] = useState<string[]>(new Array(5).fill(""));
  const [activeOtpIndex, setActiveOtpIndex] = useState(0);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, 5);
  }, []);

  const handlePhoneSubmit = () => {
    setIsVerifying(true);
  };

  const handleOtpChange = (index: number, value: string) => {
    const newOtp = [...otpValues];
    newOtp[index] = value.substring(value.length - 1);
    setOtpValues(newOtp);

    // Move to next input if value is entered
    if (value && index < 4) {
      setActiveOtpIndex(index + 1);
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otpValues[index] && index > 0) {
      setActiveOtpIndex(index - 1);
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <Drawer 
      open={isOpen} 
      onOpenChange={() => setIsOpen(true)}
      shouldScaleBackground={false}
      modal={false}
      dismissible={false}
    >
      <DrawerContent 
        className="bg-white h-[60vh] rounded-t-[24px] fixed bottom-0 select-none touch-none outline-none focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0"
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
        onInteractOutside={(e) => e.preventDefault()}
        style={{ transform: 'none' }}
      >
        <div className="p-6 flex flex-col h-full outline-none">
          <div className="mx-auto h-1 w-8 rounded-full bg-[#333333] mb-8" />
          
          {!isVerifying ? (
            // Phone Input View
            <>
              <div className="text-right mb-2">
                <span className="text-[#999999] text-sm">شماره تلفن</span>
              </div>

              <div className="flex items-center border border-[#333333] rounded-2xl p-4 mb-6 bg-white">
                <div className="text-[#666666] mr-2">
                  <PhoneIcon width={16} height={16} />
                </div>
                <input
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={value}
                  onChange={(e) => onChange(e.target.value)}
                  placeholder="مثال : ۰۹۱۲۷۶۶۶۸۸۰"
                  className="text-right w-full outline-none bg-transparent text-black placeholder:text-[#666666]"
                  dir="rtl"
                />
              </div>

              <button 
                onClick={handlePhoneSubmit}
                className="w-full bg-[#008900] text-white py-4 rounded-xl flex items-center justify-center gap-2 mb-4"
              >
                <span className="text-lg">←</span>
                تایید
              </button>

              <div className="text-center mt-auto">
                <span className="text-[#666666]">حساب ندارید؟ </span>
                <Link href="/signup" className="text-[#004000] font-medium">
                  حساب خود را بسازید!
                </Link>
              </div>
            </>
          ) : (
            // OTP Verification View
            <>
              <div className="flex justify-center gap-2 mb-6">
                {otpValues.map((digit, index) => (
                  <input
                    key={index}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    ref={(element) => {
                      if (inputRefs.current) {
                        inputRefs.current[index] = element;
                      }
                    }}
                    value={digit}
                    onChange={(e) => handleOtpChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className="w-12 h-12 border-2 rounded-lg text-center text-lg focus:border-[#008900] outline-none"
                  />
                ))}
              </div>

              <div className="text-center text-sm text-[#666666] mb-6">
                ۲:۴۵ ثانیه دیگر تا ارسال مجدد
              </div>

              <button 
                onClick={onSubmit}
                className="w-full bg-key-colors-primary text-white py-3 rounded-rounded-7"
              >
                ورود
              </button>
            </>
          )}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default PhoneDrawer;