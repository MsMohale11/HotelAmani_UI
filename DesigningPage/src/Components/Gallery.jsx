import React from 'react';
// import './Gallery.css'; // font-herr

const Gallery = () => {
    const galleryImages = [
        {
            default: "https://amanivagatorgoa.com/wp-content/uploads/2020/11/ASM_0254.jpg",
            hover: "https://amanivagatorgoa.com/wp-content/uploads/2020/11/ASM_0291.jpg",
        },
        {
            default: "https://amanivagatorgoa.com/wp-content/uploads/2020/11/ASM_0298.jpg",
            hover: "https://amanivagatorgoa.com/wp-content/uploads/2020/11/ASM_0304-580x387.jpg",
        },
        {
            default: "https://amanivagatorgoa.com/wp-content/uploads/2020/11/ASM_0316-580x386.jpg",
            hover: "https://amanivagatorgoa.com/wp-content/uploads/2020/11/ASM_0332-580x386.jpg",
        },
        {
            default: "https://amanivagatorgoa.com/wp-content/uploads/2020/11/ASM_0337-580x386.jpg",
            hover: "https://amanivagatorgoa.com/wp-content/uploads/2020/11/ASM_8881-580x386.jpg",
        },
        {
            default: "https://amanivagatorgoa.com/wp-content/uploads/2020/11/ASM_8911-tv-off-580x386.jpg",
            hover: "https://amanivagatorgoa.com/wp-content/uploads/2020/11/ASM_8915_1-tv-on-1-1-580x386.jpg",
        },
        {
            default: "https://amanivagatorgoa.com/wp-content/uploads/2020/11/ASM_8947_1-tv-on-1-580x387.jpg",
            hover: "https://amanivagatorgoa.com/wp-content/uploads/2020/11/ASM_8973-tv-on-1-2-580x387.jpg",
        },
        {
            default: "https://amanivagatorgoa.com/wp-content/uploads/2020/11/ASM_0254.jpg",
            hover: "https://amanivagatorgoa.com/wp-content/uploads/2020/11/ASM_0291.jpg",
        },
        {
            default: "https://amanivagatorgoa.com/wp-content/uploads/2020/11/ASM_0298.jpg",
            hover: "https://amanivagatorgoa.com/wp-content/uploads/2020/11/ASM_0304-580x387.jpg",
        },
        {
            default: "https://amanivagatorgoa.com/wp-content/uploads/2020/11/ASM_0316-580x386.jpg",
            hover: "https://amanivagatorgoa.com/wp-content/uploads/2020/11/ASM_0332-580x386.jpg",
        },
        {
            default: "https://amanivagatorgoa.com/wp-content/uploads/2020/11/ASM_0337-580x386.jpg",
            hover: "https://amanivagatorgoa.com/wp-content/uploads/2020/11/ASM_8881-580x386.jpg",
        },
        {
            default: "https://amanivagatorgoa.com/wp-content/uploads/2020/11/ASM_8911-tv-off-580x386.jpg",
            hover: "https://amanivagatorgoa.com/wp-content/uploads/2020/11/ASM_8915_1-tv-on-1-1-580x386.jpg",
        },
        {
            default: "https://amanivagatorgoa.com/wp-content/uploads/2020/11/ASM_8947_1-tv-on-1-580x387.jpg",
            hover: "https://amanivagatorgoa.com/wp-content/uploads/2020/11/ASM_8973-tv-on-1-2-580x387.jpg",
        },
    ];

    return (
        <div className="mb-20">

            <div className="relative h-[90vh]">
                <img
                    src="https://amanivagatorgoa.com/wp-content/uploads/2020/11/ASM_8973-tv-on-1-2-580x387.jpg"
                    className="w-full h-full object-cover"
                    alt="Gallery Banner"
                />
                <div className="absolute inset-0 bg-black/50 flex justify-center items-center">
                    <h1 className="text-white text-6xl sm:text-8xl font-herr italic">
                        Gallery
                    </h1>
                </div>
            </div>


            <h2 className="text-center text-3xl font-semibold mt-16 mb-8 text-gray-800">Explore Our Hotel</h2>


            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4 px-6 lg:px-40">
                {galleryImages.map((img, index) => (
                    <div key={index} className="relative group overflow-hidden rounded-lg shadow-md">

                        <img
                            src={img.default}
                            alt={`Gallery ${index + 1}`}
                            className="w-full h-60 object-cover transition-opacity duration-500 group-hover:opacity-0"
                        />

                        <img
                            src={img.hover}
                            alt={`Gallery ${index + 1} Hover`}
                            className="absolute top-0 left-0 w-full h-60 object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        />
                    </div>
                ))}
            </div>


            <div className="flex justify-center mt-12">
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-full shadow-lg transition">
                    Load More
                </button>
            </div>
        </div>
    );
};

export default Gallery;
