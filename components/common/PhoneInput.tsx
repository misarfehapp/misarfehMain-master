"use client";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { useState } from "react";

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
}

const PhoneInput = ({ value, onChange }: PhoneInputProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <div className="w-full cursor-pointer">
          <p className="text-white text-right mb-2">شماره تلفن</p>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-white">
            <p className="text-right opacity-50">مثال : ۰۹۱۲۷۶۶۶۸۸۰</p>
          </div>
        </div>
      </DrawerTrigger>

      <DrawerContent className="bg-white rounded-t-3xl p-6">
        <div className="space-y-6">
          <div className="text-right">
            <label className="text-gray-500 text-sm">شماره تلفن</label>
            <div className="flex items-center justify-end mt-2 border rounded-xl p-3">
              <input
                type="tel"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="مثال : ۰۹۱۲۷۶۶۶۸۸۰"
                className="text-right w-full outline-none"
                dir="rtl"
              />
              <span className="text-gray-400 ml-2">📱</span>
            </div>
          </div>

          <button 
            onClick={() => setOpen(false)}
            className="w-full bg-key-colors-primary text-white py-4 rounded-xl flex items-center justify-center gap-2"
          >
            <span>←</span>
            تایید
          </button>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default PhoneInput;