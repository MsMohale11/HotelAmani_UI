import React, { useState } from 'react';

const Resturant = () => {
  const galleryData = [
    {
      img: "https://amanivagatorgoa.com/wp-content/uploads/2020/11/gallery-1-2.jpg",
      text: ` Welcome to the dining area that pays homage to the sea, and brings international tastes to your palate. Ice and Spice at Amani Vagator Boutique Hotel traverses the space between indoors and outdoors, so that it’s the perfect space to indulge your senses no matter the weather.  We have a well-stocked bar serving everything from Champagne to the local brew, a team of well-trained chefs and kitchen staff to cater to your every need, and meals made from the freshest ingredients in the market.`,
    },
    {
      img: "https://amanivagatorgoa.com/wp-content/uploads/2020/11/gallery-2-2.jpg",
      text: `This elegant indoor space combines modern lighting with warm wood tones. Perfect for intimate dinners, business lunches, or evening wine with friends. We have a well-stocked bar serving everything from Champagne to the local brew, a team of well-trained chefs and kitchen staff to cater to your every need, and meals made from the freshest ingredients in the market.`,
    },
    {
      img: "https://amanivagatorgoa.com/wp-content/uploads/2020/11/gallery-3-2.jpg",
      text: `Step into our lounge-inspired zone, offering cozy corners and eclectic decor. A place where flavors meet conversations over signature Goan, Indian, and Continental dishes. We have a well-stocked bar serving everything from Champagne to the local brew, a team of well-trained chefs and kitchen staff to cater to your every need, and meals made from the freshest ingredients in the market.`,
    },
  ];

  const [selected, setSelected] = useState(galleryData[0]);

  return (
    <div className='mb-20'>
      
      <div className="bg-[url('https://amanivagatorgoa.com/wp-content/uploads/2020/11/4-2.png')] h-[450px] bg-no-repeat bg-cover bg-center"></div>

      
      <div className="grid lg:grid-cols-2 gap-6 p-6">
       
        <div className="lg:ml-20">
          <h1 className="text-5xl font-herr italic text-yellow-600 mt-10 mb-6 text-center">ICE & SPICE</h1>
          <p className="text-gray-600  font-medium leading-relaxed text-justify transition duration-300">
            {selected.text}
          </p>
        </div>

        
        <div className="bg-black p-4 rounded-lg">
          <img
            src={selected.img}
            alt="Restaurant"
            className="w-full h-80 object-cover rounded-lg transition duration-300"
          />
          <div className="flex gap-4 mt-5 justify-center">
            {galleryData.map((data, index) => (
              <img
                key={index}
                src={data.img}
                alt={`Gallery ${index + 1}`}
                className={`w-24 h-20 rounded-md object-cover cursor-pointer transition-all duration-300 
                ${selected.img === data.img ? 'ring-2 ring-yellow-400 scale-105' : 'brightness-75 hover:brightness-100'}`}
                onClick={() => setSelected(data)}
              />
            ))}
          </div>
        </div>
      </div>

      
      <div className="lg:mx-40 sm:mx-6 mt-10">
        <p className="text-gray-600 font-medium text-center leading-loose text-md">
          Let the calming ripples of the swimming pool nearby lull you into a meditative state as you start the day with
          a sumptuous spread at the complimentary breakfast buffet. Or order à la carte and let our chefs surprise you.
          <br /><br />
          All-day dining is available with finger food, sandwiches, Goan classics, and rich desserts — anytime you want.
          <br /><br />
          <span className="italic text-yellow-700 text-sm block mt-4">
            “One of the very nicest things about life is that we must regularly stop whatever it is we are doing and devote our attention to eating” – Luciano Pavarotti
          </span>
        </p>
      </div>
    </div>
  );
};

export default Resturant;
