import React from "react";

const HouseRules = () => {
  return (
    <div className="max-w-6xl mb-20 justify-center mx-auto mt-30 px-4 py-10 text-gray-800 space-y-8">
      <h2 className="text-3xl font-bold border-b pb-2">House Rules</h2>

      {/* 01. Check-in Formalities */}
      <div>
        <h3 className="text-lg font-semibold">01. CHECK IN FORMALITIES</h3>
        <div className="pl-5 mt-2 space-y-2 text-sm">
          <p>
            <span className="font-bold text-yellow-600">ID PROOF –</span>
          </p>
          <p>
            <u>IMPORTANT →</u> As per the directive given by the Government of
            India Department of Tourism & GOA Police, all Indian Nationals above
            18 years <u>MUST</u> <br />
            <u>COMPULSORILY</u> produce proper proof of identification upon
            check-in.
          </p>
          <p>
            Valid Identification documents include → Passport, Voters ID card,
            Driver’s License, Aadhar Card.
          </p>
          <p>
            Any other documents like School/College ID, Company/Organizational
            IDs, Airline IDs <u>will not be</u> considered.
          </p>
        </div>
      </div>

      {/* 02. Check-in Time */}
      <div>
        <p className="text-sm pl-5">
          <span className="font-bold text-yellow-600">CHECK IN TIME:</span>
          <br />
          <u>
            Check – In at 02:00 pm & Check – Out at 12:00 Noon
          </u>{" "}
          <br />
          * Early Check-In and Late Check-Out Charges: Before 6 AM – Full Room
          Charges, Between 6 AM to 12 Noon – Rs 500/- supplement charges, subject
          to availability. Late Check-Out till 5 PM – Rs 1000/-, after 5 PM – Full
          Charges.
        </p>
      </div>

      {/* 03. Visitors Policy */}
      <div>
        <h3 className="text-lg font-semibold">02. VISITORS POLICY</h3>
        <p className="text-sm pl-5">
          <u>
            Visitors are strictly Not allowed in the rooms. If required, they may
            meet the guest at the Lobby or Restaurant/Pool Side.
          </u>
        </p>
      </div>

      {/* 04. Outside Food + Pool Rules */}
      <div>
        <h3 className="text-lg font-semibold">
          03.{" "}
          <u>
            Outside Eatables / Food & Alcoholic / Non-Alcoholic Beverages are
            STRICTLY PROHIBITED anywhere in Resort premises.
          </u>
        </h3>
        <h3 className="text-lg font-semibold mt-2">04. SWIMMING POOL RULES</h3>
        <p className="text-sm pl-5">
          In order to maintain pool hygiene, only LYCRA fabric is permitted as
          swimwear. Gents must wear proper trunks.{" "}
          <u>
            (Undergarments / Bermudas / Sports shorts / T-shirts are STRICTLY
            PROHIBITED in the pool.)
          </u>{" "}
          <br />
          <strong>Timings: 8 AM TO 6 PM</strong>
        </p>
      </div>

      {/* 05. Lost Room Key */}
      <div>
        <h3 className="text-lg font-semibold">05. LOST ROOM KEYS</h3>
        <p className="text-sm pl-5">
          Key card loss will be charged Rs 1000/- and billed accordingly.
        </p>
      </div>

      {/* 06. Room Cleaning */}
      <div>
        <h3 className="text-lg font-semibold">06. ROOM CLEANING</h3>
        <p className="text-sm pl-5">
          Housekeeping will service the room in a sequence system between 9:00 AM
          and 5:00 PM.
        </p>
      </div>

      {/* 07. Restaurant Timing */}
      <div>
        <h3 className="text-lg font-semibold">
          07. RESTAURANT AND ROOM SERVICE TIMINGS
        </h3>
        <p className="text-sm pl-5">7:00 AM to 11:00 PM</p>
      </div>

      {/* 08. Hookah Rule */}
      <div>
        <h3 className="text-lg font-semibold">
          08. <u>USE OF HOOKAH IN THE HOTEL PREMISES IS STRICTLY PROHIBITED</u>
        </h3>
      </div>
    </div>
  );
};

export default HouseRules;
