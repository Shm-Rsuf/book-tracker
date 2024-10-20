/* eslint-disable react/prop-types */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../index.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
const HeroSection = ({ books }) => {
  const newBooks = books.slice(0, 5);

  return (
    <section className='h-[75vh] w-[100vw] relative overflow-hidden mt-20'>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className='mySwiper'
      >
        {newBooks?.length > 0 &&
          newBooks.map((book, ind) => (
            <>
              <SwiperSlide key={ind}>
                <img
                  className='w-full h-full object-cover'
                  src={book?.formats["image/jpeg"]}
                  alt={book?.title}
                />
              </SwiperSlide>
            </>
          ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
