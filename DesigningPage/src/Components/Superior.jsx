import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SuperiorPage = () => {
  const [activeTab, setActiveTab] = useState("description");

  const images = [
    "https://amanivagatorgoa.com/wp-content/uploads/2020/11/large_0_76214_uL4gNe6c0b_1.jpg",
    "https://amanivagatorgoa.com/wp-content/uploads/2020/11/large_1_76214_Abxr6wbTUY_2.jpg",
    "https://amanivagatorgoa.com/wp-content/uploads/2020/11/large_3_76214_2CyQ5XQ6Gb_4.jpg",
    "https://amanivagatorgoa.com/wp-content/uploads/2020/11/large_4_76214_7OsuESaJwa_5.jpg",
    "https://amanivagatorgoa.com/wp-content/uploads/2020/11/large_5_76214_Z9moSUnxNA_6.jpg",
    "https://amanivagatorgoa.com/wp-content/uploads/2020/11/large_6_76214_Trjj3dT2A0_7.jpg",
    "https://amanivagatorgoa.com/wp-content/uploads/2020/11/large_7_76214_9FfEUbT5zz_8.jpg",
    "https://amanivagatorgoa.com/wp-content/uploads/2020/11/large_8_76214_gRPMB_qo5D_9.jpg",
    "https://amanivagatorgoa.com/wp-content/uploads/2020/11/large_9_76214_rVWRG8Mi2P_10.jpg",
    "https://amanivagatorgoa.com/wp-content/uploads/2020/11/large_10_76214_f7ycWwrFlE_11.jpg",
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
<div>
 
    
<div className="relative h-[90vh]">
                <img
                    src="https://amanivagatorgoa.com/wp-content/uploads/2020/11/large_6_76214_Trjj3dT2A0_7.jpg"
                    className="w-full h-full object-cover"
                    alt="Gallery Banner"
                />
                <div className="absolute inset-0 bg-black/50 flex justify-center items-center">
                    <h1 className="text-white text-6xl sm:text-8xl font-herr italic">
                      Superior
                    </h1>
                </div>
            </div>
    <div className="max-w-6xl mx-auto px-4 py-6">


      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h3 className="text-lg md:text-2xl font-semibold">
          A quality room with sea view
        </h3>
        <h3 className="text-lg md:text-2xl font-bold text-yellow-500">
          From Rs. 4,000 / Night
        </h3>
      </div>

      {/* Image Slider */}
     <Slider {...sliderSettings} className="mb-6">
  {images.map((src, i) => (
    <div key={i} className="relative w-full h-[500px] md:h-[600px]">
      <img
        src={src}
        alt={`Room view ${i + 1}`}
        className="absolute inset-0 w-full h-full object-cover rounded-lg"
      />
    </div>
  ))}
</Slider>

      {/* Tab Buttons */}
      <div className="flex flex-wrap gap-2 mb-6">
        {[
          { key: "description", label: "Description" },
          { key: "services", label: "Rooms and Services" },
          { key: "accommodation", label: "Accommodation Type" },
        ].map((tab) => (
          <button
            key={tab.key}
            className={`px-4 py-2 rounded border transition-colors duration-200 ${
              activeTab === tab.key
                ? "bg-yellow-500 text-black border-yellow-500"
                : "bg-gray-800 text-white border-gray-700 hover:bg-gray-700"
            }`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-gray-100 p-4 rounded-lg text-gray-800">
        {activeTab === "description" && (
          <p>
            We’ve kept them cosy but more than comfortable. Our xx Superior
            rooms are spacious, at 30 square metres in area, fitted with modern
            amenities that will lay to rest any worries about your stay during
            your holiday. Enjoy the comfort of our luxurious king-sized beds or
            opt for twin beds if travelling with friends.
            <br />
            <br />
            The Deluxe Superior fully air-conditioned room offers a wide range
            of amenities including a hair dryer, safe, iron and tea/coffee maker
            for those pick me ups through the day. There’s an LCD TV and free
            Wi-Fi to go along with that business corner in the room, should you
            feel like tying up some loose ends at work while on vacation.
            <br />
            <br />
            Each of the Amani Vagator Superior Rooms can accommodate up to two
            adults with one extra adult, or two adults with two children below
            12 years.
          </p>
        )}

        {activeTab === "services" && (
          <ul className="list-disc pl-5 space-y-1">
            <li>Cable/satellite television channels</li>
            <li>Chauffeured air-conditioned cars for hire</li>
            <li>Concierge</li>
            <li>Data port</li>
            <li>Doctor on call</li>
            <li>Hair dryer</li>
            <li>In-room safety deposit box</li>
            <li>Individual air-conditioning and heat control</li>
            <li>Laundry and dry cleaning facilities</li>
            <li>Tea/coffee maker</li>
            <li>Telephone line</li>
          </ul>
        )}

        {activeTab === "accommodation" && (
          <ul className="list-disc pl-5 space-y-1">
            <li>SUPERIOR–EP: Basic accommodation only (Rs. 2750 / Night)</li>
            <li>
              SUPERIOR–CP: Accommodation & Morning breakfast included (Rs. 3000
              / Night)
            </li>
            <li>
              SUPERIOR–MA: Accommodation, Breakfast and dinner included (Rs.
              3750 / Night)
            </li>
            <li>
              SUPERIOR–AP: Accommodation, Breakfast, Lunch and Dinner included
              (Rs. 4500 / Night)
            </li>
          </ul>
        )}
      </div>

      {/* Next Room Link */}
      <div className="mt-8 text-right">
        <span className="mr-2">Next room link:</span>
        <a
          href="deluxe.html"
          className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-black px-3 py-1 rounded"
        >
          DELUXE <span className="ml-1">→</span>
        </a>
      </div>
    </div>
       
</div>
  );
};

export default SuperiorPage;
