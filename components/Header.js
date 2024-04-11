//next image

import Image from "next/image";

//next link

import Link from "next/link";

//components

import Socials from "../components/Socials";
// added extra padding in y
const Header = () => {
  return (
    <header
      className="absolute z-1030 w-full flex items-center px-16 xl:px-0 xl:h-[90px]
     "
    >
      <div className="container mx-auto px-[25px] ">
        <div className="flex flex-col items-center justify-between py-8 lg:flex-row gap-y-6 ">
          {/* logo */}
          <Link
            href={"/"}
            className="flex flex-row items-center justify-center"
          >
            <Image
              src={"/tanlogo.png"}
              width={70}
              height={48}
              alt=""
              priority={true}
              className=""
            />
            <p className="font-semibold my-2 text-lg">TANTRANSH</p>
          </Link>
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
