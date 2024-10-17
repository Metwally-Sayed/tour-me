import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-white h-[400px] lg:p-20 p-5 w-full">
      <div className="flex flex-col lg:flex-row lg:justify-between justify-start ">
        <div className="flex flex-col gap-10 justify-center items-start">
          <Image src={"/footerlogo.png"} width={200} height={200} alt="logo" />
          <div className="flex lg:flex-row flex-col gap-10">
            <div className="w-1/2 flex flex-col gap-10">
              <div className="flex flex-col gap-2">
                <p className="text-aqua">Tel: 123-456-7890</p>
                <p className="text-aqua">Email: info@mysite.com</p>
                <p className="text-aqua">
                  500 Terry Francine Street San Francisco, CA 94158
                </p>
              </div>
              <div className="flex gap-3">
                <FaFacebookF size={20} />
                <FaTwitter size={20} />
                <FaLinkedin size={20} />
              </div>
            </div>
            <div className="w-1/2 flex flex-col gap-2 lg:justify-center ">
              <p className="text-aqua  lg:text-start">Accessibility</p>
              <Link href={"/terms"} className="text-aqua  lg:text-start">
                Terms & Conditions
              </Link>
              <p className="text-aqua  lg:text-start">Privacy Policy</p>
              <p className="text-aqua  lg:text-start">Shipping Policy</p>
              <p className="text-aqua  lg:text-start">Refund Policy</p>
            </div>
          </div>
        </div>
        <div className=" hidden lg:flex flex-row justify-center items-center gap-3">
          <Image src={"/apple.png"} width={144} height={43} alt="apple" />
          <Image src={"/google.png"} width={144} height={43} alt="apple" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
