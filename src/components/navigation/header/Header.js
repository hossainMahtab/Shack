import Link from "next/link";
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

  console.log("sticky", sticky);

  return (
    <>
      <nav className=" w-full ">
        {notSticky && (
          <div className=" w-full z-[9999] flex flex-col bg-transparent  ">
            <div className="w-full mx-auto flex   justify-between items-center bg-transparent z-[9999]  pt-4 px-10">
              <p className="text-white text-xs capitalize text-left">
                {/* address  */}
                9100 Jane St, Vaughan, <br /> ON L4K 0A4
              </p>
              <img
                src="/logo/shack-logo-2.png"
                alt="logo"
                border="0"
                className="w-36 h-12 z-[9999]"
              />
              <p className="text-white text-xs capitalize text-right">
                {/* phone number */}
                Book now <br />
                905-303-9900
              </p>
            </div>
            <div className="container mx-auto flex flex-col  justify-center items-center bg-transparent  py-5 px-10 z-[9999]">
              <div className=" text-lg uppercase">
                <ul className="flex space-x-16">
                  <Link href="/">
                    <li className="text-white cursor-pointer">Home</li>
                  </Link>
                  <Link href="/menu">
                    <li className="text-white cursor-pointer">Menu</li>
                  </Link>
                  <li className="text-white cursor-pointer">Reservation</li>
                  <li className="text-white cursor-pointer">About</li>
                  <li className="text-white cursor-pointer">Gallery</li>
                  <li className="text-white cursor-pointer">Blog</li>
                  <li className="text-white cursor-pointer">Contact</li>
                </ul>
              </div>
            </div>
          </div>
        )}
        {sticky && (
          <div className="bg-[#202020]  top-0 w-full !fixed  z-[9999] ">
            <div className="container mx-auto flex flex-col  justify-center items-center bg-transparent py-5 px-10">
              {/* <div className="text-2xl text-[#1d1d1f]">My Blog</div> */}

              <div className=" text-lg uppercase">
                <ul className="flex space-x-16">
                  {/* <li className="mr-5 text-white ">
              <div className="relative  focus-within:text-gray-400 ">
                <input
                  type="text"
                  placeholder="Search Blog"
                  className="pl-10 border-none focus:border-none focus:ring-0 focus:outline-none focus:ring-transparent placeholder-white focus-within:placeholder-gray-400 "
                />
                <div className="absolute  flex inset-y-0 left-0  items-center pl-3 focus-within:text-gray-400">
                  <MdSearch />
                </div>
              </div>
            </li> */}
                  {/* <li className="mr-5 text-white">Pineapple Stories</li> */}
                  {/* <li className="mr-5 text-white">
              <select className="border-none focus:border-none focus:ring-0 focus:outline-none focus:ring-transparent ">
                <option value="popular topics">Popular Topics</option>
                <option value="abc">ABC</option>
                <option value="def">DEF</option>
                <option value="ghi">GHI</option>
              </select>
            </li> */}
                  <Link href="/">
                    <li className="text-white cursor-pointer">Home</li>
                  </Link>
                  <Link href="/menu">
                    <li className="text-white cursor-pointer">Menu</li>
                  </Link>
                  <li className="text-white cursor-pointer">Reservation</li>
                  <li className="text-white cursor-pointer">About</li>
                  <li className="text-white cursor-pointer">Gallery</li>
                  <li className="text-white cursor-pointer">Blog</li>
                  <li className="text-white cursor-pointer">Contact</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
