import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Rooms = () => {
  const heroImages = [
    "https://amanivagatorgoa.com/wp-content/uploads/2020/11/large_2_76215_LzegA78fqB_3.jpg",
    "https://amanivagatorgoa.com/wp-content/uploads/2020/11/large_0_76214_uL4gNe6c0b_1.jpg",
    "https://amanivagatorgoa.com/wp-content/uploads/2020/11/firstBanner-580x420.jpeg",
  ];

  const roomData = [
    { title: "SUPERIOR", price: "From Rs. 5,000/Night", img: "https://amanivagatorgoa.com/wp-content/uploads/2020/11/large_0_76214_uL4gNe6c0b_1.jpg", to: "/superiorpage" },
    { title: "DELUXE", price: "From Rs. 5,000/Night", img: "https://amanivagatorgoa.com/wp-content/uploads/2020/11/large_3_76214_2CyQ5XQ6Gb_4.jpg", to: "/dulexpage" },
    { title: "SUITE", price: "From Rs. 7,000/Night", img: "https://amanivagatorgoa.com/wp-content/uploads/2020/11/large_0_76215_Wl24DJq1ju_1-1.jpg", to: "/suitepage" },
    { title: "JUNIOR SUITE", price: "From Rs. 7,500/Night", img: "https://amanivagatorgoa.com/wp-content/uploads/2025/01/first-580x420.jpg", to: "/superiorpage" },
    { title: "PREMIER SUITE", price: "From Rs. 15,000/Night", img: "https://amanivagatorgoa.com/wp-content/uploads/2020/11/firstBanner-580x420.jpeg", to: "/dulexpage" },
    { title: "SUPERIOR SUITE", price: "From Rs. 8,500/Night", img: "https://amanivagatorgoa.com/wp-content/uploads/2025/01/first-1-580x420.jpg", to: "/suitepage" },
  ];

  return (
    <div className="mb-20">
      {/* Hero Slider */}
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{ delay: 4000 }}
          loop={true}
          pagination={{ clickable: true }}
          navigation
          className="h-[90vh]"
        >
          {heroImages.map((url, idx) => (
            <SwiperSlide key={idx}>
              <img src={url} alt={`slide-${idx}`} className="w-full h-[90vh] object-cover" />
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white z-10">
                <h1 className="text-6xl sm:text-8xl font-herr italic">Our Rooms</h1>
                <p className="text-xl sm:text-2xl mt-4 max-w-2xl text-center">
                  Discover comfort and luxury at BluO Amani Vagator
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Section Heading */}
      <h2 className="text-center text-4xl font-bold mt-16 text-gray-800">Rooms</h2>

      {/* Room Cards */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 px-5 lg:px-40 sm:px-20 py-10 bg-gray-100">
        {roomData.map((room, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
          >
            <img
              src={room.img}
              alt={room.title}
              className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold text-gray-800">{room.title}</h3>
              <p className="text-gray-600 text-lg mt-1">{room.price}</p>
            </div>
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              
              <Link
                to={room.to}
                className=" text-gray-600 px-8 py-1 italic"
              >
                Learn More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
