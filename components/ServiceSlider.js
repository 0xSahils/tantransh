//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

//icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

//import required modules
import { FreeMode, Pagination } from "swiper";

//service Data
export const serviceData = [
  {
    icon: <RxCrop />,
    title: "Journey of Innovation Begins",
    description: "Embark on a journey of creativity and collaboration with Hack-XLR8, an unparalleled opportunity for aspiring innovators.",
  },
  {
    icon: <RxPencil2 />,
    title: "Phase 1 postPushing Boundaries Together",
    description: "This roadmap outlines an exhilarating path that pushes boundaries, fosters ingenious ideas, and unites sharp minds.",
  },
  {
    icon: <RxDesktop />,
    title: "Brilliance through Online Submissions",
    description: "The format spans two stages, offering participants a chance to showcase brilliance through online submissions.",
  },
  {
    icon: <RxReader />,
    title: "Thrilling 24-Hour Hackathon Finale",
    description: "The journey culminates in a thrilling 24-hour offline round, where innovation knows no bounds.",
  },
  {
    icon: <RxRocket />,
    title: "Transforming the Future with Hack-XLR8",
    description: "Join us to set the stage for a hackathon experience where the future is ready to be transformed.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },

        640: {
          sliderPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[ FreeMode, Pagination ]}
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 group py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 cursor-pointer  hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
              {/*icon*/}
              <div className="mb-4 text-4xl text-accent">{item.icon}</div>
              {/*title & desc*/}
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="max-w-[350px] leading-normal">
                  {item.description}
                </p>
              </div>
              {/*arrow*/}
              <div className="text-3xl">
                <RxArrowTopRight className="transition-all duration-300 group-hover:rotate-45 group-hover:text-accent" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
