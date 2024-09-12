import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaTelegramPlane,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="flex justify-center items-center w-full max-w-screen-2xl px-6 md:px-10 bg-black">
      <div className="grid grid-cols-1 md:grid-cols-3 w-full">
        <div className="col-span-1 md:border-r border-neutral-500 flex justify-center md:justify-start">
          <div className="md:w-80">
            <Image
              src="/images/logo/logo-white.webp"
              alt="logo"
              width={84}
              height={84}
              className="mb-16 md:mb-32"
            />
          </div>
        </div>
        <div className="col-span-2 pl-0 md:pl-8 mb-36 flex flex-col items-center md:items-start">
          <p className="font-albert-sans font-normal md:text-lg mb-4">
            @2024 - Copyright Unit Network
          </p>
          <div className="flex items-center gap-x-8">
            <Link href="#">
              <FaTelegramPlane className="size-8 text-white hover:text-white/85 transition-colors" />
            </Link>
            <Link href="#">
              <FaWhatsapp className="size-8 text-white hover:text-white/85 transition-colors" />
            </Link>
            <Link href="#">
              <FaFacebook className="size-8 text-white hover:text-white/85 transition-colors" />
            </Link>
            <Link href="#">
              <FaInstagram className="size-8 text-white hover:text-white/85 transition-colors" />
            </Link>
            <Link href="#">
              <FaTwitter className="size-8 text-white hover:text-white/85 transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
