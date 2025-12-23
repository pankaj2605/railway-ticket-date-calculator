// import { useState } from "react";

// export default function DateSelector({ onCalculate }) {
//   const [journeyDate, setJourneyDate] = useState("");

//   const calculateBookingDate = () => {
//     const jd = new Date(journeyDate);
//     jd.setDate(jd.getDate() - 60);
//     onCalculate(journeyDate, jd);
//   };

//   return (
//     <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
//       <h2 className="text-xl font-semibold">Select Journey Date</h2>

//       <input
//         type="date"
//         className="border p-2 rounded w-full"
//         value={journeyDate}
//         onChange={(e) => setJourneyDate(e.target.value)}
//       />

//       <button
//         onClick={calculateBookingDate}
//         className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//       >
//         Calculate Booking Date
//       </button>
//     </div>
//   );
// }
import { useState } from "react";

export default function DateSelector({ onCalculate }) {
  const [journeyDate, setJourneyDate] = useState("");
  const [showModal, setShowModal] = useState(false);

  const calculateBookingDate = () => {
  if (!journeyDate) return;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const jd = new Date(journeyDate);
  jd.setHours(0, 0, 0, 0);

  // ❌ Only block if journey date is already in the past
  if (jd < today) {
    setShowModal(true);
    return;
  }

  // Booking date = journey - 60 days
  const bookingDate = new Date(jd);
  bookingDate.setDate(jd.getDate() - 60);

  onCalculate(journeyDate, bookingDate);
};


  return (
    <>
      {/* Main Card */}
      <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
        <h2 className="text-xl font-semibold text-center">
          Select Journey Date
        </h2>
        <label htmlFor="journey-date" className="block text-sm font-medium text-gray-700">
          Journey Date
        </label>
       <input
          id="journey-date"
          type="date"
          className="border p-2 rounded w-full"
          value={journeyDate}
          onChange={(e) => setJourneyDate(e.target.value)}
        />

        <button
          onClick={calculateBookingDate}
          className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Calculate Booking Date
        </button>
      </div>

      {/* ⚠️ Compact Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/30 flex items-center justify-center z-50"
          onClick={() => setShowModal(false)} // 👈 close on outside click
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className="bg-white rounded-lg shadow-lg p-4 w-72 space-y-3"
            onClick={(e) => e.stopPropagation()} // 👈 prevent close on inside click
          >
            <h3 id="modal-title" className="text-sm font-semibold text-red-600">
              Date Already Passed
            </h3>

            <p  className="text-xs text-gray-700 leading-relaxed">
              The booking date calculated from your selected journey date has
              already passed.
              <br />
              Please select a <strong>future journey date</strong>.
            </p>

            <div className="flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="px-3 py-1.5 text-xs rounded bg-blue-600 text-white hover:bg-blue-700"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

