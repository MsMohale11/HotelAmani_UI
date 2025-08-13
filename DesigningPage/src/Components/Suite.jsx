import React, { useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SuitePage() {
  const [activeTab, setActiveTab] = useState("description");

  const images = [
    "https://amanivagatorgoa.com/wp-content/uploads/2020/11/large_0_76215_Wl24DJq1ju_1-1.jpg",
    "https://amanivagatorgoa.com/wp-content/uploads/2020/11/large_1_76215_Ls9OgY6fAx_2.jpg",
    "https://amanivagatorgoa.com/wp-content/uploads/2020/11/large_2_76215_LzegA78fqB_3.jpg",
    "https://amanivagatorgoa.com/wp-content/uploads/2020/11/large_3_76215_61X9VYN9nA_5.jpg",
    "https://amanivagatorgoa.com/wp-content/uploads/2020/11/large_3_76215_DprGl1ZAIu_6.jpg",
    "https://amanivagatorgoa.com/wp-content/uploads/2020/11/large_3_76215_vQ6MOXxY3f_7.jpg",
    "https://amanivagatorgoa.com/wp-content/uploads/2020/11/large_3_76215_yUameJ94ja_8.jpg",
    "https://amanivagatorgoa.com/wp-content/uploads/2020/11/large_7_76215__0C3FYZu6Y_9.jpg",
    "https://amanivagatorgoa.com/wp-content/uploads/2020/11/large_7_76215_qYCDha3MRl_12.jpg",
    "https://amanivagatorgoa.com/wp-content/uploads/2020/11/large_7_76215_uZxMSAdJaC_11.jpg",
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
<div className="mb-20">
     <div className="relative h-[90vh]">
                <img
                    src="https://amanivagatorgoa.com/wp-content/uploads/2020/11/large_3_76215_61X9VYN9nA_5.jpg"
                    className="w-full h-full object-cover"
                    alt="Gallery Banner"
                />
                <div className="absolute inset-0 bg-black/50 flex justify-center items-center">
                    <h1 className="text-white text-6xl sm:text-8xl font-herr italic">
                       Suite
                    </h1>
                </div>
            </div>
    <div className="max-w-6xl mx-auto px-4 py-6">

        
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h3 className="text-lg md:text-2xl font-semibold">
          A quality room with sea view
        </h3>
        <h3 className="text-lg md:text-2xl text-gray-600">
          From Rs. 7,000 / Night
        </h3>
      </div>

      {/* Image Slider */}
      <Slider {...sliderSettings} className="mb-6">
        {images.map((src, i) => (
          <div key={i} className="relative w-full h-[500px] md:h-[600px]">
            <img
              src={src}
              alt={`Suite view ${i + 1}`}
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
            Amani’s SUITE rooms are designed for a luxurious experience with a
            comfortable king-size bed for you and your family. There’s an LCD TV
            and free Wi-Fi to complement the business corner in the room,
            perfect for catching up on work while on vacation. Each Suite can
            accommodate up to two adults with one extra adult, or two adults
            with two children below 12 years.
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
            <li>SUITE–EP: Basic accommodation only (Rs. 4,000 / Night)</li>
            <li>
              SUITE–CP: Accommodation & Morning breakfast included (Rs. 4,500 /
              Night)
            </li>
            <li>
              SUITE–MAP: Accommodation, Breakfast and dinner included (Rs.
              5,500 / Night)
            </li>
            <li>
              SUITE–AP: Accommodation, Breakfast, Lunch and Dinner included
              (Rs. 6,500 / Night)
            </li>
          </ul>
        )}
      </div>

      {/* Previous Room Link */}
      <div className="mt-8">
        <span className="mr-2">Previous room:</span>
        <Link
          to="/dulexpage"
          className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-black px-3 py-1 rounded"
        >
          ‹‹ DULEX
        </Link>
      </div>
    </div>
    </div>
  );
}
