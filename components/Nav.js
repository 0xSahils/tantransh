//icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
  HiWindow,
} from "react-icons/hi2";

//  nav data
export const navData = [
  { name: "Home", path: "/", icon: <HiHome /> },
  { name: "About", path: "/about", icon: <HiUser /> },
  { name: "Roadmap", path: "/services", icon: <HiRectangleGroup /> },
  { name: "Sponsors", path: "/work", icon: <HiViewColumns /> },
  { name: "Awards", path: "/awards", icon: <HiWindow /> },
  {
    name: "Talks",
    path: "/testimonials",
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];

//next link
import Link from "next/link";

//next router
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <nav
      className="flex flex-col items-center xl:justify-center 
    gap-y-4 fixed h-max bottom-0 
    mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen"
    >
      {/* inner*/}
      <div className="flex items-center justify-between w-full px-4 py-8 text-3xl xl:flex-col xl:justify-center gap-y-10 md:px-40 xl:px-0 h-[80px] xl:h-max bg-white/10 backdrop-blur-sm xl:text-xl xl:rounded-full">
        {navData.map((link, index) => {
          return (
            <Link
              className={`${
                link.path === pathname && "text-accent"
              } realtive flex items-center group hover:text-accent transition-all duration-300`}
              href={link.path}
              key={index}
            >
              {/*tooltip*/}
              <div className="absolute right-0 hidden pr-14 xl:group-hover:flex">
                <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                  <div className="text-[12px] leading-none font-semibold capitalize">{link.name}</div>
                {/*triangle*/}
                <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
                </div>
              </div>
              {/*icons*/}
              <div>{link.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
