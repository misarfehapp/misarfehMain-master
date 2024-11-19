import AddressSection from "@/components/address section/AddressSection";
import ExitSection from "@/components/exit section/ExitSection";
import FoodSensitivities from "@/components/food sensitivities/FoodSensitivities";
import ExitIcon from "@/components/icons/ExitIcon";
import Input from "@/components/input/Input";
import ArrowBack from "@/components/user header/ArrowBack";
import UserHeader from "@/components/user header/UserHeader";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex justify-center py-8 px-4">
      <div className="w-full max-w-[398px] flex flex-col gap-4">
        {" "}
        <div className="">
          {/* header */}
          <div className="flex flex-row justify-end min-h-16 items-center border-b border-b-[#C7C6CA] px-5 gap-[10px]">
            <p className="text-base font-medium text-[#49454F]">
              اطلاعات کاربری
            </p>
            <Link href={"/userProfile"}>
              <ArrowBack />
            </Link>
          </div>
          <div className="my-4">
            <UserHeader name="محمد رنجبر" phone="0992450090" />
          </div>
          <div className="w-full h-[6px] bg-neutral-neutral90" />
          <div className="my-6 flex flex-col gap-4">
            <Input type="name" name="محمد رنجبر" />
            <Input type="phone" phone="09924500910" />
            <Input type="province" province="فارس" city="شیراز" />
            <Input type="sex" sex="ترجیح می دهم نگویم" />
            <Input type="email" email="ranjbarmohad@gmail.com" />
          </div>
          <div className="w-full h-[6px] bg-neutral-neutral90" />
          <div className="my-6 mx-4 flex flex-col gap-4">
            <div className="flex justify-center">
              <AddressSection isAddressMenu={false} />
            </div>
          </div>
          <div className="w-full h-[6px] bg-neutral-neutral90" />
          <div className="my-6 mx-4 flex justify-center">
            <FoodSensitivities />
          </div>
          <div className="w-full h-[6px] bg-neutral-neutral90" />
          <div className="my-6 flex flex-col">
            <Input type="diet" diet="(Vegetarian) رژیم لاغری وجترین" />
          </div>
          <ExitSection />
        </div>
      </div>
    </div>
  );
};
export default page;
