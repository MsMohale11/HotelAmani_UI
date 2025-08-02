import React from 'react';

const Contact = () => {
  return (
    <div className="pt-16">
      {/* Hero Image */}
      <div
        className="bg-[url('https://amanivagatorgoa.com/wp-content/uploads/2020/11/contact.jpg')] h-96 bg-no-repeat bg-cover bg-center"
      ></div>

      {/* Contact Content */}
      <div className="grid lg:grid-cols-2 gap-10 px-6 lg:px-40 mt-10 mb-20">
        {/* Contact Details */}
        <div className="mt-10">
          <h1 className="italic text-3xl mb-4">Our Contacts</h1>
          <p className="font-bold text-gray-600">
            BluO Amani Vagator – Boutique Hotel Goa
          </p>
          <p className="text-gray-600 mt-2">
            Near Bharat Petroleum Pump, Anjuna – Vagator, Bardez, Goa
          </p>

          <div className="mt-6">
            <p className="font-bold text-gray-600">
              For Reservation Inquiries please contact –
            </p>
            <p className="text-black italic hover:text-yellow-600">
              Reservations@amanivagatorgoa.com
            </p>
            <p className="text-gray-600 mt-2">Mobile: +91 72900 60060</p>
          </div>

          <div className="mt-6">
            <p className="font-bold text-gray-600">General Manager –</p>
            <p className="text-gray-600 mt-2">Mobile: +91 9999167776</p>
            <p className="text-gray-600">gm@amanivagatorgoa.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded shadow-md p-6">
          <form className="text-gray-800 space-y-5">
            <div>
              <label className="font-medium">Your Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-4 py-2 mt-1 shadow-sm focus:outline-none focus:ring-1 focus:ring-yellow-400"
              />
            </div>

            <div>
              <label className="font-medium">Your Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded px-4 py-2 mt-1 shadow-sm focus:outline-none focus:ring-1 focus:ring-yellow-400"
              />
            </div>

            <div>
              <label className="font-medium">Your Mobile Number</label>
              <input
                type="tel"
                className="w-full border border-gray-300 rounded px-4 py-2 mt-1 shadow-sm focus:outline-none focus:ring-1 focus:ring-yellow-400"
              />
            </div>

            <div>
              <label className="font-medium">Your Message (optional)</label>
              <textarea
                rows="4"
                className="w-full border border-gray-300 rounded px-4 py-2 mt-1 shadow-sm focus:outline-none focus:ring-1 focus:ring-yellow-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 transition text-white px-6 py-2 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
