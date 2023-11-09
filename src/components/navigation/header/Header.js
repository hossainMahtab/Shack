import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { MdSearch } from "react-icons/md";

const Header = () => {
  const [sticky, setSticky] = React.useState(false);
  const [notSticky, setNotSticky] = React.useState(true);
  const scrollThreshold = 64;

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > scrollThreshold) {
        setSticky(true);
      }
      if (window.scrollY < scrollThreshold) {
        setNotSticky(true);
        setSticky(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // console.log("sticky", sticky);

  const { pathname } = useRouter();

  return (
    <>
      <nav className=" w-full ">
        {notSticky && (
          <div className=" w-full z-[9999] flex flex-col bg-transparent  ">
            <div className="w-full relative mx-auto flex justify-center items-center bg-transparent z-[9999]  pt-4 xl:px-20 md:px-16 px-12">
              <div className="absolute top-4 xl:px-20 md:px-16 px-12  w-full flex justify-between items-center">
                <p className="text-white text-xs capitalize text-left">
                  9100 Jane St, Vaughan, <br /> ON L4K 0A4
                </p>
                <button className="text-white text-base capitalize text-right cursor-pointer bg-transparent outline-none focus:outline-none">
                  Sign in
                </button>
              </div>

              <img
                src="/logo/shack-logo-2.png"
                alt="logo"
                border="0"
                className="w-36 h-12 z-[9999]"
              />
            </div>
            <div className="container mx-auto flex flex-col  justify-center items-center bg-transparent  py-5 xl:px-20 md:px-16 px-12 z-[9999]">
              <div className=" text-lg uppercase">
                <ul className="flex space-x-16">
                  <Link href="/">
                    <li
                      className={` ${
                        pathname === "/" ? "text-[#e4ae62]" : "text-white"
                      } cursor-pointer `}
                    >
                      Home
                    </li>
                  </Link>
                  <Link href="/menu">
                    <li
                      className={` ${
                        pathname === "/menu" ? "text-[#e4ae62]" : "text-white"
                      } cursor-pointer `}
                    >
                      Menu
                    </li>
                  </Link>
                  <Link href="/reservation">
                    <li
                      className={` ${
                        pathname === "/reservation"
                          ? "text-[#e4ae62]"
                          : "text-white"
                      } cursor-pointer `}
                    >
                      Reservation
                    </li>
                  </Link>
                  <Link href="/about">
                    <li
                      className={` ${
                        pathname === "/about" ? "text-[#e4ae62]" : "text-white"
                      } cursor-pointer `}
                    >
                      About
                    </li>
                  </Link>
                  <Link href="/gallery">
                    <li
                      className={` ${
                        pathname === "/gallery"
                          ? "text-[#e4ae62]"
                          : "text-white"
                      } cursor-pointer `}
                    >
                      Gallery
                    </li>
                  </Link>
                  <Link href="/blog">
                    <li
                      className={` ${
                        pathname === "/blog" ? "text-[#e4ae62]" : "text-white"
                      } cursor-pointer `}
                    >
                      Blog
                    </li>
                  </Link>
                  <Link href="/contact">
                    <li
                      className={` ${
                        pathname === "/conatact"
                          ? "text-[#e4ae62]"
                          : "text-white"
                      } cursor-pointer `}
                    >
                      Contact
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        )}
        {sticky && (
          <div className="bg-[#202020]  top-0 w-full !fixed  z-[9999]  ">
            <div className="container mx-auto h-[70px] flex  justify-between items-center bg-transparent py-5 ">
              <Link href="/">
                <img
                  src="/logo/shack-logo-2.png"
                  alt="logo"
                  border="0"
                  className="w-24 h-8 z-[9999] cursor-pointer"
                />
              </Link>
              <div className=" text-lg uppercase">
                <ul className="flex space-x-14">
                  <Link href="/">
                    <li
                      className={` ${
                        pathname === "/" ? "text-[#e4ae62]" : "text-white"
                      } cursor-pointer `}
                    >
                      Home
                    </li>
                  </Link>
                  <Link href="/menu">
                    <li
                      className={` ${
                        pathname === "/menu" ? "text-[#e4ae62]" : "text-white"
                      } cursor-pointer `}
                    >
                      Menu
                    </li>
                  </Link>
                  <Link href="/reservation">
                    <li
                      className={` ${
                        pathname === "/reservation"
                          ? "text-[#e4ae62]"
                          : "text-white"
                      } cursor-pointer `}
                    >
                      Reservation
                    </li>
                  </Link>
                  <Link href="/about">
                    <li
                      className={` ${
                        pathname === "/about" ? "text-[#e4ae62]" : "text-white"
                      } cursor-pointer `}
                    >
                      About
                    </li>
                  </Link>
                  <Link href="/gallery">
                    <li
                      className={` ${
                        pathname === "/gallery"
                          ? "text-[#e4ae62]"
                          : "text-white"
                      } cursor-pointer `}
                    >
                      Gallery
                    </li>
                  </Link>
                  <Link href="/blog">
                    <li
                      className={` ${
                        pathname === "/blog" ? "text-[#e4ae62]" : "text-white"
                      } cursor-pointer `}
                    >
                      Blog
                    </li>
                  </Link>
                  <Link href="/contact">
                    <li
                      className={` ${
                        pathname === "/contact"
                          ? "text-[#e4ae62]"
                          : "text-white"
                      } cursor-pointer `}
                    >
                      Contact
                    </li>
                  </Link>
                </ul>
              </div>
              <button className="text-white bg-transparent cursor-pointer text-lg  uppercase outline-none focus:outline-none">
                Sign in
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
