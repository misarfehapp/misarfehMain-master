import Link from "next/link";

interface CreateAccountLinkProps {
  text: string;
  linkText: string;
  href: string;
}

const CreateAccountLink = () => {
  return (
    <div className="text-center mt-4">
      <p className="text-white text-sm">
        حساب ندارید؟{" "}
        <Link href="/signup" className="underline font-medium">
          !حساب خود را بسازید
        </Link>
      </p>
    </div>
  );
};

export default CreateAccountLink;