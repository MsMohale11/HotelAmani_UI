import React from 'react';


const Tariff = () => {
    return (
        <div className="py-20 bg-gray-50 text-gray-800">


            <div className="text-center mb-12">
                <h1 className="text-5xl font-herr text-yellow-600 italic">Tariff Plan</h1>
                <h2 className="text-2xl mt-4 italic underline text-gray-600">
                    Amani Vagator Hotel Goa (2025)
                </h2>
            </div>


            <div className="overflow-x-auto px-6 lg:px-40">
                <table className="w-full text-sm border text-center bg-white shadow-md rounded overflow-hidden">
                    <thead className="bg-yellow-100 text-gray-700 font-semibold">
                        <tr>
                            <th className="p-3">All Rates for 2 persons</th>
                            <th colSpan={2}>Standard Room</th>
                            <th colSpan={2}>Superior Room</th>
                            <th colSpan={2}>Premier Room</th>
                        </tr>
                        <tr className="bg-yellow-50 ">
                            <td></td>
                            <td>EP</td><td>CP</td>
                            <td>EP</td><td>CP</td>
                            <td>EP</td><td>CP</td>
                        </tr>
                    </thead>
                    <tbody className="text-sm font-light">
                        {[
                            ['06th January to 31st March', 3500, 4000, 4500, 5000, 6000, 6500],
                            ['1st April to 31st August', 3000, 3500, 4000, 4500, 5500, 6000],
                            ['1st September to 30th November', 4000, 4500, 5000, 5500, 6500, 7000],
                            ['1st December to 20th December', 5500, 6500, 6500, 7500, 8000, 9000],
                            ['21st December to 5th January', 6500, 7500, 7500, 8500, 9000, 10000],
                            ['JUNIOR SUITE', 'JUNIOR SUITE', '', 'JUNIOR SUITE', '', 'JUNIOR SUITE', ''],
                            ['06th January to 31st March', 7500, 8000, 8500, 9000, 10000, 10500],
                            ['1st April to 31st August', 6500, 7000, 7500, 8000, 9000, 9500],
                            ['1st September to 30th November', 8500, 9000, 9500, 10000, 11000, 11500],
                            ['1st December to 20th December', 9500, 10500, 10500, 11500, 12000, 13500],
                            ['21st December to 5th January', 10500, 12000, 11500, 12500, 13000, 14000],
                        ].map((row, idx) => (
                            <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                {row.map((cell, i) => (
                                    <td key={i} className="p-3 border">{cell}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>


            <p className="text-sm text-gray-500 mt-6 lg:ml-40 sm:ml-6 italic">
                * GST additional (Currently levied at 12% GST)
            </p>


            <div className="mt-10 px-6 lg:px-40">
                <h3 className="text-lg underline font-bold mb-4 text-yellow-700">* Terms and Conditions</h3>
                <ul className="space-y-3 text-sm text-gray-700 leading-relaxed list-disc pl-5">
                    {[
                        'GST additional (Currently levied at 12% GST).',
                        'Above Tariff is for Non-Refundable bookings, Cheques are Not accepted.',
                        'Refundable Rates will increase by 10% for Bookings offering.',
                        'Free Cancellation up to 2 Days before arrival.',
                        'Child below 12 years complimentary when sharing bed with parents.',
                        'Extra Bedding/Mattress charges (Above 12 Years) are Rs 1200/Day ++ (includes Breakfast).',
                        'EP – Accommodation Only, CP – Accommodation with Buffet Breakfast.',
                        'All Rooms are with King Bed, Bathroom, Desk, LED, Wi-Fi, Electronic Safe Locker, Minibar, Electric Kettle and Hair Dryer.',
                        'Standard Room has Balcony, Superior Room has Balcony with Sunbed Lounger and Premier Room has Balcony with Sunbed & Bathtub.',
                        'All Suites with Bathtub – Junior Suite with Couch, Superior Suite & Premier Suite with Living Room & Dining Table.',
                        'Complimentary use of Swimming Pool (with proper swimming costume) from 8.00 AM to 7.00 PM.',
                        'Check In Time: – 14:00 Hrs. Check Out: – 11:00 Hrs.',
                        'Management reserves right to admission and to change Tariff without prior notice.',
                    ].map((term, index) => (
                        <li key={index}>{term}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Tariff;
