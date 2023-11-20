import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { BiSolidUpArrowCircle } from "react-icons/bi";
import CommonModal from "@/components/shared/modal/CommonModal";
import SignIn from "@/components/auth/SignIn";
import SignUp from "@/components/auth/SignUp";
import { auth } from "../../../../firebaseConfig";

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

  const [burger, setBurger] = React.useState(false);

  const handleBurger = () => {
    setBurger(!burger);
  };

  const { pathname } = useRouter();

  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const toggleVisibility = () => {
    if (window.scrollY > 580) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const [signInModalOpen, setSignInModalOpen] = useState(false);
  const [signUpModalOpen, setSignUpModalOpen] = useState(false);

  const handleSignInOpen = () => {
    setSignInModalOpen(true);
    setSignUpModalOpen(false);
  };
  const handleSignInClose = () => {
    setSignInModalOpen(false);
  };

  // sign up modal

  const handleSignUpOpen = () => {
    setSignUpModalOpen(true);

    setSignInModalOpen(false);
  };

  const handleSignUpClose = () => {
    setSignUpModalOpen(false);

    // setSignInModalOpen(true);
  };

  const [userName, setUserName] = useState("null");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else {
        setUserName("");
      }
    });
  }, []);

  return (
    <>
      <nav className=" w-full h-full relative ">
        {notSticky && (
          <div className=" w-full z-[7777] flex flex-col bg-transparent  ">
            <div className="w-full relative mx-auto flex justify-center items-center bg-transparent z-[7777]  pt-4 ">
              <div className="absolute top-4 xl:px-20 lg:px-16 px-4  w-full flex justify-between items-center">
                <p className="text-white xl:text-sm lg:text-xs capitalize text-left hidden lg:block ">
                  9100 Jane St, Vaughan, <br /> ON L4K 0A4
                </p>
                <div onClick={handleBurger} className="block lg:hidden">
                  {!burger && (
                    <FiMenu className="text-white text-2xl cursor-pointer" />
                  )}
                </div>
                <button
                  onClick={handleSignInOpen}
                  className="text-white xl:text-base lg:text-sm capitalize text-right cursor-pointer bg-transparent outline-none focus:outline-none"
                >
                  {userName == "" ? "Sign in" : `${userName}`}
                </button>
              </div>

              <img
                src="/logo/shack-logo-2.png"
                alt="logo"
                className="w-24 lg:w-32  xl:w-36 h-8 lg:h-10 xl:h-12 z-[9999]"
              />
            </div>
            <div className="container mx-auto hidden lg:flex flex-col  justify-center items-center bg-transparent  py-5 xl:px-20 lg:px-16 px-12 z-[9999]">
              <div className=" text-lg uppercase">
                <ul className="flex xl:space-x-16 lg:space-x-12 xl:text-base lg:text-sm">
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
            <div className=" px-4 h-14 lg:hidden flex  justify-between items-center bg-transparent py-5 ">
              <div onClick={handleBurger}>
                {!burger && (
                  <FiMenu className="text-white text-2xl cursor-pointer" />
                )}
              </div>
              <button
                onClick={handleSignInOpen}
                className="text-white xl:text-base lg:text-sm capitalize text-right cursor-pointer bg-transparent outline-none focus:outline-none"
              >
                Sign in
              </button>
            </div>
            <div className="container mx-auto h-[70px] hidden lg:flex  justify-between items-center bg-transparent py-5 ">
              <Link href="/">
                <img
                  src="/logo/shack-logo-2.png"
                  alt="logo"
                  border="0"
                  className="xl:w-24 lg:w-20 xl:h-8 h-6 z-[9999] cursor-pointer"
                />
              </Link>
              <div className=" text-lg uppercase">
                <ul className="flex xl:space-x-14 lg:space-x-10 xl:text-base lg:text-sm">
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
              <button
                onClick={handleSignInOpen}
                className="text-white bg-transparent cursor-pointer xl:text-base lg:text-sm  uppercase outline-none focus:outline-none"
              >
                Sign in
              </button>
            </div>
          </div>
        )}

        {burger ? (
          <>
            <div
              onClick={() => {
                setBurger(false);
              }}
              className="bg-black/30 left-0  top-0 w-full h-screen fixed  z-[8888] block lg:hidden   "
            />

            <div className="bg-black/90 left-0  top-0 w-[65%] h-screen fixed  transition-all duration-500 ease-in-out  z-[9999] block lg:hidden   ">
              <div className="w-full flex justify-between items-center px-4 py-4">
                <div onClick={handleBurger}>
                  {burger && (
                    <MdClose className="text-white text-2xl cursor-pointer" />
                  )}
                </div>
                <img
                  src="/logo/shack-logo-2.png"
                  alt="logo"
                  className="w-24 lg:w-32  xl:w-36 h-8 lg:h-10 xl:h-12 z-[9999]"
                />
              </div>
              <div className="container mx-auto flex flex-col items-center justify-center py-4 gap-10">
                <Link href="/">
                  <p
                    onClick={() => {
                      setBurger(false);
                    }}
                    className={`${
                      pathname === "/" ? "text-[#e4ae62]" : "text-white"
                    } text-base cursor-pointer max-w-max`}
                  >
                    Home
                  </p>
                </Link>
                <Link href="/menu">
                  <p
                    onClick={() => {
                      setBurger(false);
                    }}
                    className={`                       ${
                      pathname === "/menu" ? "text-[#e4ae62]" : "text-white"
                    } text-base cursor-pointer max-w-max`}
                  >
                    Menu
                  </p>
                </Link>
                <Link href="/reservation">
                  <p
                    onClick={() => {
                      setBurger(false);
                    }}
                    className={`                       ${
                      pathname === "/reservation"
                        ? "text-[#e4ae62]"
                        : "text-white"
                    } text-base cursor-pointer max-w-max`}
                  >
                    Reservation
                  </p>
                </Link>
                <Link href="/about">
                  <p
                    onClick={() => {
                      setBurger(false);
                    }}
                    className={`                       ${
                      pathname === "/about" ? "text-[#e4ae62]" : "text-white"
                    } text-base cursor-pointer max-w-max`}
                  >
                    About
                  </p>
                </Link>
                <Link href="/gallery">
                  <p
                    onClick={() => {
                      setBurger(false);
                    }}
                    className={`                       ${
                      pathname === "/gallery" ? "text-[#e4ae62]" : "text-white"
                    } text-base cursor-pointer max-w-max`}
                  >
                    Gallery
                  </p>
                </Link>
                <Link href="/blog">
                  <p
                    onClick={() => {
                      setBurger(false);
                    }}
                    className={`                       ${
                      pathname === "/blog" ? "text-[#e4ae62]" : "text-white"
                    } text-base cursor-pointer max-w-max`}
                  >
                    Blog
                  </p>
                </Link>
                <Link href="/contact">
                  <p
                    onClick={() => {
                      setBurger(false);
                    }}
                    className={`                       ${
                      pathname === "/contact" ? "text-[#e4ae62]" : "text-white"
                    } text-base cursor-pointer max-w-max`}
                  >
                    Contact
                  </p>
                </Link>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="hidden" />
            <div className=" bg-black/80 top-0  -left-[100%] w-[65%] h-screen fixed transition-all duration-500 ease-in-out  z-[9999] block lg:hidden  ">
              <div className="w-full flex justify-between items-center px-4 py-4">
                <div onClick={handleBurger}>
                  {burger && (
                    <MdClose className="text-white text-2xl cursor-pointer" />
                  )}
                </div>
                <img
                  src="/logo/shack-logo-2.png"
                  alt="logo"
                  className="w-24 lg:w-32  xl:w-36 h-8 lg:h-10 xl:h-12 z-[9999]"
                />
              </div>
              <div className="container mx-auto flex flex-col items-center justify-center py-4 gap-10">
                <Link href="/">
                  <p
                    onClick={() => {
                      setBurger(false);
                    }}
                    className={`                       ${
                      pathname === "/" ? "text-[#e4ae62]" : "text-white"
                    } text-base cursor-pointer max-w-max`}
                  >
                    Home
                  </p>
                </Link>
                <Link href="/menu">
                  <p
                    onClick={() => {
                      setBurger(false);
                    }}
                    className={`                       ${
                      pathname === "/menu" ? "text-[#e4ae62]" : "text-white"
                    } text-base cursor-pointer max-w-max`}
                  >
                    Menu
                  </p>
                </Link>
                <Link href="/reservation">
                  <p
                    onClick={() => {
                      setBurger(false);
                    }}
                    className={`                       ${
                      pathname === "/reservation"
                        ? "text-[#e4ae62]"
                        : "text-white"
                    } text-base cursor-pointer max-w-max`}
                  >
                    Reservation
                  </p>
                </Link>
                <Link href="/about">
                  <p
                    onClick={() => {
                      setBurger(false);
                    }}
                    className={`                       ${
                      pathname === "/about" ? "text-[#e4ae62]" : "text-white"
                    } text-base cursor-pointer max-w-max`}
                  >
                    About
                  </p>
                </Link>
                <Link href="/gallery">
                  <p
                    onClick={() => {
                      setBurger(false);
                    }}
                    className={`                       ${
                      pathname === "/gallery" ? "text-[#e4ae62]" : "text-white"
                    } text-base cursor-pointer max-w-max`}
                  >
                    Gallery
                  </p>
                </Link>
                <Link href="/blog">
                  <p
                    onClick={() => {
                      setBurger(false);
                    }}
                    className={`                       ${
                      pathname === "/blog" ? "text-[#e4ae62]" : "text-white"
                    } text-base cursor-pointer max-w-max`}
                  >
                    Blog
                  </p>
                </Link>
                <Link href="/contact">
                  <p
                    onClick={() => {
                      setBurger(false);
                    }}
                    className={`                       ${
                      pathname === "/contact" ? "text-[#e4ae62]" : "text-white"
                    } text-base cursor-pointer max-w-max`}
                  >
                    Contact
                  </p>
                </Link>
              </div>
            </div>
          </>
        )}

        {/* {burger && sticky ? (
          <div className="bg-[#202020] left-0  top-0 w-[75%] h-screen fixed transition-all duration-500 ease-in-out  z-[9999] block lg:hidden   ">
            <div className="w-full flex justify-between items-center px-4 py-5">
              <div onClick={handleBurger}>
                {burger && (
                  <MdClose className="text-white text-2xl cursor-pointer" />
                )}
              </div>
              <img
                src="/logo/shack-logo-2.png"
                alt="logo"
                className="w-24 md:w-32  xl:w-36 h-8 md:h-10 xl:h-12 z-[9999]"
              />
            </div>
            <div className="container mx-auto flex flex-col items-center justify-center py-5 gap-10">
              <Link href="/">
                <p className="text-white text-base cursor-pointer max-w-max">Home</p>
              </Link>
              <Link href="/menu">
                <p className="text-white text-base cursor-pointer max-w-max">Menu</p>
              </Link>
              <Link href="/reservation">
                <p className="text-white text-base cursor-pointer max-w-max">
                  Reservation
                </p>
              </Link>
              <Link href="/about">
                <p className="text-white text-base cursor-pointer max-w-max">About</p>
              </Link>
              <Link href="/gallery">
                <p className="text-white text-base cursor-pointer max-w-max">Gallery</p>
              </Link>
              <Link href="/blog">
                <p className="text-white text-base cursor-pointer max-w-max">Blog</p>
              </Link>
              <Link href="/contact">
                <p className="text-white text-base cursor-pointer max-w-max">Contact</p>
              </Link>
            </div>
          </div>
        ) : (
          <div className="bg-[#202020] top-0  -left-[100%] w-[75%] h-screen fixed transition-all duration-500 ease-in-out  z-[9999] block lg:hidden   ">
            <div className="w-full flex justify-between items-center px-4 py-5">
              <div onClick={handleBurger}>
                {burger && (
                  <MdClose className="text-white text-2xl cursor-pointer" />
                )}
              </div>
              <img
                src="/logo/shack-logo-2.png"
                alt="logo"
                className="w-24 md:w-32  xl:w-36 h-8 md:h-10 xl:h-12 z-[9999]"
              />
            </div>
            <div className="container mx-auto flex flex-col items-center justify-center py-5 gap-10">
              <Link href="/">
                <p className="text-white text-base cursor-pointer max-w-max">Home</p>
              </Link>
              <Link href="/menu">
                <p className="text-white text-base cursor-pointer max-w-max">Menu</p>
              </Link>
              <Link href="/reservation">
                <p className="text-white text-base cursor-pointer max-w-max">
                  Reservation
                </p>
              </Link>
              <Link href="/about">
                <p className="text-white text-base cursor-pointer max-w-max">About</p>
              </Link>
              <Link href="/gallery">
                <p className="text-white text-base cursor-pointer max-w-max">Gallery</p>
              </Link>
              <Link href="/blog">
                <p className="text-white text-base cursor-pointer max-w-max">Blog</p>
              </Link>
              <Link href="/contact">
                <p className="text-white text-base cursor-pointer max-w-max">Contact</p>
              </Link>
            </div>
          </div>
        )} */}

        {isVisible && (
          <div
            onClick={scrollToTop}
            className=" text-[#e4ae62] z-[7777] text-4xl fixed xl:bottom-8 lg:bottom-7 bottom-6 xl:right-10 lg:right-8 right-6  cursor-pointer"
          >
            <BiSolidUpArrowCircle />
          </div>
        )}
      </nav>

      {/* sign in modal */}
      {signInModalOpen && (
        <CommonModal
          handleOpen={handleSignInOpen}
          handleClose={handleSignInClose}
          open={signInModalOpen}
          customWidth=" w-[90%] md:w-[60%] lg:w-[40%] 2xl:w-[30%]"
          customBg="bg-black/95"
        >
          <SignIn
            handleSignInClose={handleSignInClose}
            handleSignUpOpen={handleSignUpOpen}
          />
        </CommonModal>
      )}

      {signUpModalOpen && (
        <CommonModal
          handleClose={handleSignUpClose}
          handleOpen={handleSignUpOpen}
          open={signUpModalOpen}
          customWidth=" w-[90%] md:w-[60%] lg:w-[40%] 2xl:w-[30%]"
          customBg="bg-black/95"
        >
          <SignUp
            handleSignUpClose={handleSignUpClose}
            handleSignInOpen={handleSignInOpen}
          />
        </CommonModal>
      )}
    </>
  );
};

export default Header;
