import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 mt-30 mb-20">
      <div className="mb-6">
        <h2 className="text-3xl font-light italic text-gray-800 border-b pb-2">
          Terms & Conditions
        </h2>
      </div>

      {/* Reservation Norms */}
      <div className="mb-8">
        <h4 className="text-xl font-semibold text-gray-700 mb-2">
          Reservation Norms
        </h4>
        <p className="text-gray-600 leading-relaxed space-y-2">
          <span className="block">&gt; Check In: 1400hrs / Check Out: 12noon</span>
          <span className="block">
            &gt; The reservation query is subject to confirmation only after the
            deposit of 50% of the total stay amount
          </span>
          <span className="block">
            &gt; A confirmation voucher with reservation ID will be issued via
            email once the payment procedure is complete.
          </span>
          <span className="block">
            &gt; Balance to be paid before arrival or at the time of check-in.
          </span>
          <span className="block">
            &gt; For arrivals prior to 09:00 hrs, the reservation needs to be made
            & held from the previous night.
          </span>
          <span className="block">
            &gt; For late night or early morning pick-up between 19:00 hrs and
            06:00 hrs, an additional amount of Rs 1000/- will be charged.
          </span>
          <span className="block">
            &gt; Rooms will be held up to 18:00 hrs on the arrival day unless
            prior information for late check-in is provided.
          </span>
        </p>
      </div>

      {/* Cancellation Policy */}
      <div>
        <h4 className="text-xl font-semibold text-gray-700 mb-2">
          Cancellation Policy
        </h4>
        <p className="text-gray-600 leading-relaxed space-y-2">
          <span className="block">
            &gt; Cancellation less than 07 days of arrival: 01 night retention will be charged
          </span>
          <span className="block">
            &gt; Cancellation less than 03 days of arrival: 50% retention will be charged
          </span>
          <span className="block">
            &gt; No show: 100% retention will be charged
          </span>
        </p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
