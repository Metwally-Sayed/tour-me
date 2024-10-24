"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

const Header = () => {
  const [isScrolledUp, setIsScrolledUp] = useState<boolean>(true);
  const [isAtTop, setIsAtTop] = useState<boolean>(true);
  const [closeSheet, setCloseSheet] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    let lastScrollY = 0;
    console.log(pathname);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolledUp(currentScrollY <= lastScrollY);
      setIsAtTop(currentScrollY === 0);
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed h-[91px] w-full flex line-height-[60px]  top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolledUp ? "translate-y-0 " : "-translate-y-full bg-transparent"
      } ${isAtTop ? "bg-aqua" : "bg-aqua"}`}
    >
      <div className=" w-full px-4 md:px-8 lg:px-16 xl:px-24 flex items-center justify-between my-auto ">
        <Link href="/" className="flex w-1/3 items-center text-white">
          {/* <MountainIcon className="h-6 w-6" /> */}
          <span className="text-lg font-bold">Logo</span>
          {/* <Image src="/logo.png" alt="logo" width={126} height={40} /> */}
        </Link>
        <nav className="w-2/3 hidden  text-md font-light space-x-4 lg:flex justify-end ">
          <div className="flex space-x-9 mt-2">
            <Link
              href="/#home"
              className={`text-white text-[13.75px] font-[400] ${
                pathname === "/" ? "text-purple" : "text-textGray"
              } `}
            >
              Home
            </Link>
            <Link
              href="/#app"
              className={`text-white text-[13.75px] font-[400] ${
                pathname === "/" ? "text-purple" : "text-textGray"
              } `}
            >
              The App{" "}
            </Link>
            <Link
              href="/#idea"
              className={`text-white text-[13.75px] font-[400] ${
                pathname === "/" ? "text-purple" : "text-textGray"
              } `}
            >
              The Idea of TourMe
            </Link>
            <Link
              href="/#about"
              className={`text-white text-[13.75px] font-[400] ${
                pathname === "/" ? "text-purple" : "text-textGray"
              } `}
            >
              About Us
            </Link>
            <Link
              href="/#features"
              className={`text-white text-[13.75px] font-[400] ${
                pathname === "/" ? "text-purple" : "text-textGray"
              } `}
            >
              Features
            </Link>
            <Link
              href="/#contact"
              className={`text-white text-[13.75px] font-[400] ${
                pathname === "/" ? "text-purple" : "text-textGray"
              } `}
            >
              Contact
            </Link>
          </div>
        </nav>
        <Sheet open={closeSheet} onOpenChange={setCloseSheet}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="lg:hidden text-dark"
            >
              <MenuIcon className="h-6 w-6 text-white" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-aqua text-white">
            <div className="flex flex-col gap-y-10 items-center justify-center w-full min-h-screen ">
              <Link
                onClick={() => setCloseSheet(false)}
                href="/#home"
                className=" text-2xl cursor-pointer rounded-full hover:text-yellow duration-500 text-textGray hover:text-purple"
              >
                Home
              </Link>
              <Link
                onClick={() => setCloseSheet(false)}
                href="/#app"
                className="text-2xl cursor-pointer rounded-full hover:text-yellow duration-500 text-textGray hover:text-purple"
              >
                The App{" "}
              </Link>
              <Link
                onClick={() => setCloseSheet(false)}
                href="/#idea"
                className="text-2xl cursor-pointer rounded-full hover:text-yellow duration-500 text-textGray hover:text-purple"
              >
                The Idea of TourMe
              </Link>
              <Link
                onClick={() => setCloseSheet(false)}
                href="/#about"
                className="text-2xl cursor-pointer rounded-full hover:text-yellow duration-500 text-textGray hover:text-purple"
              >
                About Us
              </Link>
              <Link
                onClick={() => setCloseSheet(false)}
                href="/#features"
                className="text-2xl cursor-pointer rounded-full hover:text-yellow duration-500 text-textGray hover:text-purple"
              >
                Features{" "}
              </Link>
              <Link
                onClick={() => setCloseSheet(false)}
                href="/#contact"
                className="text-2xl cursor-pointer rounded-full hover:text-yellow duration-500 text-textGray hover:text-purple"
              >
                Contact{" "}
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
