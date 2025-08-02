import React from "react";

const Packages = () => {
  return (
    <div className="max-w-5xl mx-auto mt-15 mb-20 px-6 py-10 text-gray-800 space-y-10">
      {/* Summer Package */}
      <div>
        <h3 className="text-2xl font-light border-b pb-1">Summer Package</h3>
        <p className="mt-2 text-base">
          <strong>Superior 3 Night/4 Days Package</strong>
          <br />
          From 1st April 2020 to 30th September 2020
        </p>
        <p className="mt-2 text-sm leading-relaxed">
          CP: Rs 18,999 <br />
          MAP: Rs 20,999 <br />
          AP: Rs 22,999
        </p>
      </div>

      {/* Winter Package */}
      <div>
        <h3 className="text-2xl font-light border-b pb-1">Winter Package</h3>
        <p className="mt-2 text-base">
          <strong>Superior 3 Night/4 Days Package</strong>
          <br />
          From 1st October 2020 to 22nd December 2020
          <br />
          04th January 2021 to 31st March 2021
        </p>
        <p className="mt-2 text-sm leading-relaxed">
          CP: Rs 21,999 <br />
          MAP: Rs 24,999 <br />
          AP: Rs 26,999
        </p>
      </div>

      {/* Upgrades & Extras */}
      <div className="space-y-3 text-sm">
        <p>
          <strong>Room Upgrade</strong>
          <br />
          Superior to Deluxe Room: 15% of package <br />
          Superior to Suite Room: 30% of package
        </p>

        <p>
          Extra Adult @ 35% of package <br />
          Extra Child @ 25% of package <br />
          Single Occupancy @ 80% of package <br />
          2 Night Package @ 80% of package
        </p>
      </div>

      {/* Package Includes */}
      <div>
        <h4 className="text-lg font-semibold mb-3">PACKAGE INCLUDES:</h4>
        <ul className="list-disc pl-5 space-y-2 text-sm">
          <li>Welcome drink on arrival (Non-Alcoholic)</li>
          <li>
            Accommodation in well-appointed A/C rooms with LCD TV, electronic
            safe, and telephone
          </li>
          <li>Buffet/TDH Menu as per selected plan</li>
          <li>CP – Breakfast</li>
          <li>MAP – Breakfast and either Lunch or Dinner</li>
          <li>AP – Breakfast, Lunch and Dinner</li>
          <li>
            Complimentary use of Tea/Coffee maker in all rooms (replenished once
            daily)
          </li>
          <li>
            <strong>
              One-day sightseeing tour of Goa by shared A/C Coach
            </strong>
          </li>
          <li>
            <strong>
              Both way transfer from Airport or nearby Railway/Bus stop via
              shared A/C Coach/Car (Madgaon station +Rs.1000)
            </strong>
          </li>
          <li>2 bottles of mineral water (replenished daily)</li>
          <li>Wi-Fi for browsing (complimentary)</li>
          <li>
            Complimentary use of Swimming Pool (proper swimwear required)
          </li>
          <li>GST inclusive</li>
        </ul>
      </div>

      {/* Honeymoon Inclusions */}
      <div>
        <h3 className="text-2xl font-light border-b pb-1">Honeymoon Inclusions</h3>
        <p className="text-sm mt-2">
          <strong>
            For honeymoon package we have separate options that can be added to
            regular package inclusions:
          </strong>
          <br />
          <strong>Honeymoon Décor</strong> @Rs3000/- (flowers/balloons/candles/cookie
          plate + 2 mocktails/flavored milk)
          <br />
          <strong>Chocolate Cake ½ kg</strong> @Rs1000/- (with Goan wine)
          <br />
          <strong>Candlelight Dinner</strong> @Rs2500/- per couple (Poolside, Fixed
          Indian Menu – No Seafood)
        </p>
      </div>
    </div>
  );
};

export default Packages;
 