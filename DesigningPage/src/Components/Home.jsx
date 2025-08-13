import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import './Home.css'; // 👈 include custom CSS for font-herr

const Home = () => {
  const heroSlides = [
    "https://amanivagatorgoa.com/wp-content/uploads/2020/11/1-5.png",
    "https://amanivagatorgoa.com/wp-content/uploads/2020/11/large_0_76215_Wl24DJq1ju_1-1.jpg",
    "https://amanivagatorgoa.com/wp-content/uploads/2020/11/firstBanner-580x420.jpeg",
  ];

  const testimonials = [
    {
      img: "https://amanivagatorgoa.com/wp-content/uploads/2020/11/5-gold-stars-300x72.png",
      text: "Had a nice, comfortable stay here...",
    },
    {
      img: "https://amanivagatorgoa.com/wp-content/uploads/2020/11/5-gold-stars-300x72.png",
      text: "Amazing location and decor. Staff was very helpful...",
    },
    {
      img: "https://amanivagatorgoa.com/wp-content/uploads/2020/11/5-gold-stars-300x72.png",
      text: "The ambiance was excellent and the staff was friendly...",
    },
    {
      img: "https://amanivagatorgoa.com/wp-content/uploads/2020/11/5-gold-stars-300x72.png",
      text: "Excellent service and great food...",
    },
    {
      img: "https://amanivagatorgoa.com/wp-content/uploads/2020/11/5-gold-stars-300x72.png",
      text: "A peaceful stay with lovely interiors and nature...",
    },
  ];

  return (
    <div className="mb-20">

      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{ delay: 4000 }}
          loop={true}
          pagination={{ clickable: true }}
          navigation
          className="h-[90vh]"
        >
          {heroSlides.map((url, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={url}
                alt={`slide-${idx}`}
                className="w-full h-[90vh] object-cover"
              />
              <div className="absolute inset-0 backdrop-blur-xs bg-black/50 flex flex-col justify-center items-center text-white">
                <h1 className="text-6xl sm:text-8xl font-herr italic text-gray-100">
                  Welcome
                </h1>
                <p className="text-xl sm:text-2xl mt-4 max-w-2xl text-center">
                  BluO Amani Vagator – Boutique Hotel Goa offering quality accommodation and peaceful vibes.
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="lg:grid grid-cols-2 gap-10 px-6 mt-20">

        <div className="bg-white shadow-lg rounded-lg p-6  mx-30">
          <h2 className="text-3xl font-bold mb-6 text-center text-yellow-600">Book Now</h2>

          {["Arrival", "Departure", "Promo Code", "Room"].map((label, idx) => (
            <div key={idx} className="mb-4">
              <label className="block font-semibold text-gray-700 mb-1">{label}</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
          ))}

          <div className="mb-4 flex items-center">
            <input type="checkbox" className="mr-2" />
            <label className="text-gray-600 text-sm">Flexibilities</label>
          </div>

          <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 rounded transition">
            Book Now
          </button>
        </div>


        <div className="flex flex-col py-8 mt-10 lg:mt-0">
          <h1 className="text-center m text-8xl py-5 text-gray-300 italic font-herr mb-4">
            Welcome
          </h1>
          <p className="text-center font-semibold py-5 text-3xl italic text-gray-800 px-4">
            BluO Amani Vagator – Boutique Hotel Goa is the most eclectic, boutique hotel in North Goa offering excellent location, quality accommodation, thoughtful services and varied facilities.
          </p>
          <p className="text-center text-gray-600 py-5 mt-6 text-sm px-4">
            BluO Amani Vagator was created for the tasteful traveller, one who expects only the best. Our aim is to offer you a paradise within the paradise that is Goa, and allow you to create memories of your vacation here that will last a lifetime.
          </p>
        </div>
      </div>

      <h1 className="text-center text-4xl mt-16 font-semibold">Rooms</h1>
     <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 px-5 lg:px-40 sm:px-20 py-10 bg-gray-100">
  {[
    {
      title: "SUPERIOR",
      price: "From Rs. 5,000/Night",
      img: "https://amanivagatorgoa.com/wp-content/uploads/2020/11/large_0_76214_uL4gNe6c0b_1.jpg",
      to: "/superiorpage"
    },
    {
      title: "DELUXE",
      price: "From Rs. 5,000/Night",
      img: "https://amanivagatorgoa.com/wp-content/uploads/2020/11/large_3_76214_2CyQ5XQ6Gb_4.jpg",
      to : "/deluxpage"
    },
    {
      title: "SUITE",
      price: "From Rs. 7,000/Night",
      img: "https://amanivagatorgoa.com/wp-content/uploads/2020/11/large_0_76215_Wl24DJq1ju_1-1.jpg",
      to : "/suitepage"
    },
    {
      title: "JUNIOR SUITE",
      price: "From Rs. 7,500/Night",
      img: "https://amanivagatorgoa.com/wp-content/uploads/2025/01/first-580x420.jpg",
      to: "/superiorpage"
    },
    {
      title: "PREMIER SUITE",
      price: "From Rs. 15,000/Night",
      img: "https://amanivagatorgoa.com/wp-content/uploads/2020/11/firstBanner-580x420.jpeg",
      to : "/deluxpage"
    },
    {
      title: "SUPERIOR SUITE",
      price: "From Rs. 8,500/Night",
      img: "https://amanivagatorgoa.com/wp-content/uploads/2025/01/first-1-580x420.jpg",
      to : "/suitepage"
    },
  ].map((room, index) => (
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
        <h3 className="text-2xl font-semibold text-gray-800">
          {room.title}
        </h3>
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


      {/* Reviews Section */}
      <h1 className="text-center text-4xl mt-10 font-semibold">Reviews</h1>
      <div className="lg:mx-40 sm:mx-20 my-10">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="p-5">
                <center>
                  <img src={item.img} alt="stars" className="mb-4" width="120" />
                </center>
                <p className="text-center text-gray-600 hover:bg-yellow-500 hover:text-white p-4 rounded transition duration-300">
                  {item.text}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
