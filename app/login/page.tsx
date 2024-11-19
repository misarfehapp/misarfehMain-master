"use client";
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import Logo from "@/components/auth/Logo";
import AuthHeader from "@/components/auth/AuthHeader";
import PhoneDrawer from "@/components/common/PhoneDrawer";

const LoginPage = () => {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleSubmit = () => {
    if (phoneNumber.match(/^09[0-9]{9}$/)) {
      // Valid Iranian phone number
      router.push('/homePage');
    }
  };

  return (
    <div className="fixed inset-0 bg-[#004000] p-6 flex flex-col overflow-hidden">
      <Logo className="mt-20" />

      <AuthHeader
        title="ورود به می‌صرفه"
        subtitle="وارد اکانت خود شوید تا در صورت عدم وجود حساب خود را بسازید."
      />

      <PhoneDrawer 
        value={phoneNumber} 
        onChange={setPhoneNumber}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default LoginPage;
