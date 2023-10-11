import React from "react";
import { MdSearch } from "react-icons/md";

const Header = () => {
  return (
    <div className=" w-full sticky top-0 !bg-transparent z-50 ">
      <div className="container mx-auto flex justify-between items-center bg-transparent py-4 px-10">
        <div className="text-2xl text-[#1d1d1f]">My Blog</div>
        <div className=" text-2xl">
          <ul className="flex space-x-16">
            <li className="mr-5 text-gray-700 ">
              <div className="relative  focus-within:text-gray-400 ">
                <input
                  type="text"
                  placeholder="Search Blog"
                  className="pl-10 border-none focus:border-none focus:ring-0 focus:outline-none focus:ring-transparent placeholder-gray-700 focus-within:placeholder-gray-400 "
                />
                <div className="absolute  flex inset-y-0 left-0  items-center pl-3 focus-within:text-gray-400">
                  <MdSearch />
                </div>
              </div>
            </li>
            <li className="mr-5 text-gray-700">Pineapple Stories</li>
            <li className="mr-5 text-gray-700">
              <select className="border-none focus:border-none focus:ring-0 focus:outline-none focus:ring-transparent ">
                <option value="popular topics">Popular Topics</option>
                <option value="abc">ABC</option>
                <option value="def">DEF</option>
                <option value="ghi">GHI</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
