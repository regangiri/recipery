// import React from "react";
// import Link from "next/link";

// function Navbar() {
//   return (
//     <div className="flex justify-between px-6 items-center w-full text-text bg-primary h-24">
//       <div className="logo">
//         <Link href="/">
//           <h1 className="cursor-pointer">Recipery</h1>
//         </Link>
//       </div>
//       <div className="links">
//         <Link href="SearchRecipePage">
//           <p className="cursor-pointer">Search Recipe</p>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Navbar;

import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import { IoMenuSharp } from "react-icons/io5";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);

    console.log(isActive);
  };

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  if (navbar) {
    return (
      <header className="block sm:flex justify-center sm:justify-around sticky duration-500 top-0 z-50 items-center bg-secondary pb-2 sm:py-5">
        <div className="title text-sm sm:text-3xl">
          <IoMenuSharp
            className="flex sm:hidden"
            size="30"
            onClick={handleToggle}
          />

          <h1 className="text-white">Recipery</h1>
        </div>
        <div
          className={
            isActive
              ? "nav-items text-xs sm:flex block "
              : "nav-items text-xs sm:flex hidden "
          }
        >
          <Link href="/">
            <div
              className={`nav-links mx-2 sm:text-xl text-black hover:text-red-600 text-sm ${
                isActive ? `my-1` : ""
              } `}
            >
              Beranda
            </div>
          </Link>

          <Link href="/why-us">
            <div
              className={`nav-links mx-2 sm:text-xl text-black hover:text-red-600 text-sm ${
                isActive ? `my-1` : ""
              } `}
            >
              Why Us
            </div>
          </Link>
          <Link href="/search-recipe">
            <div
              className={`nav-links mx-2 sm:text-xl text-black hover:text-red-600 text-sm ${
                isActive ? `my-1` : ""
              } `}
            >
              Search Recipe
            </div>
          </Link>
          <Link href="/search-nutrition">
            <div
              className={`nav-links mx-2 sm:text-xl text-black hover:text-red-600 text-sm ${
                isActive ? `my-1` : ""
              } `}
            >
              Search Nutrition
            </div>
          </Link>
        </div>
      </header>
    );
  } else {
    return (
      <header className="block sm:flex justify-center sm:justify-around  duration-1000 top-0 z-50 items-center  pb-2 sm:py-5 bg-primary">
        <div className="title text-sm sm:text-3xl">
          <IoMenuSharp
            className="flex sm:hidden"
            size="30"
            onClick={handleToggle}
          />

          <h1 className="text-black">Recipery</h1>
        </div>
        <div
          className={
            isActive
              ? "nav-items text-xs sm:flex block "
              : "nav-items text-xs sm:flex hidden "
          }
        >
          <Link href="/">
            <div
              className={`nav-links mx-2 sm:text-xl text-black hover:text-red-600 text-sm ${
                isActive ? `my-1` : ""
              } `}
            >
              Beranda
            </div>
          </Link>
          <Link href="/why-us">
            <div
              className={`nav-links mx-2 sm:text-xl text-black hover:text-red-600 text-sm ${
                isActive ? `my-1` : ""
              } `}
            >
              Why Us
            </div>
          </Link>
          <Link href="/search-recipe">
            <div
              className={`nav-links mx-2 sm:text-xl text-black hover:text-red-600 text-sm ${
                isActive ? `my-1` : ""
              } `}
            >
              Search Recipe
            </div>
          </Link>
          <Link href="/search-nutrition">
            <div
              className={`nav-links mx-2 sm:text-xl text-black hover:text-red-600 text-sm ${
                isActive ? `my-1` : ""
              } `}
            >
              Search Nutrition
            </div>
          </Link>
        </div>
      </header>
    );
  }
}

export default Navbar;
