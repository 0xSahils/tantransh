//next image
import Image from "next/image";

//next link

import Link from "next/Link";

// icons

import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className='mx-auto py-500 xl:mx-0'>
      <Link href={'https://twitter.com/home' } className='relative w-[185px] h-[185px] flex justify-center items-center 
       bg-circleStar bg-cover bg-center bg-no-repeat group'>
        <Image
          src={'/Sponsors_Final.png'}
          width={141}
          height={148}
          alt= ''
          className='animate-spin-slow w-full h-full max-w-[141px] max-h-[148px] '
        />
        <HiArrowRight className='absolute text-4xl transition-all duration-300 group-hover:translate-x-2' />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
