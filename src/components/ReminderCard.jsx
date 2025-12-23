import { useState } from "react";
import AddToCalendar from "./AddToCalendar";

export default function ReminderCard({ journeyDate, bookingDate }) {
  if (!journeyDate || !bookingDate) return null;

  const [showInfo, setShowInfo] = useState(false);
  

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const openDate = new Date(bookingDate);
  openDate.setHours(0, 0, 0, 0);

  const diffDays = Math.ceil(
    (openDate - today) / (1000 * 60 * 60 * 24)
  );
  const bookingOpened = diffDays < 0;

  return (
    <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 shadow space-y-4">
      
      {/* Journey Date */}
      <div className="flex justify-between text-sm">
        <span className="font-medium text-gray-700">Journey Date</span>
        <span className="font-semibold text-gray-900">
          {new Date(journeyDate).toDateString()}
        </span>
      </div>

      {/* Booking Date */}
      <div className="text-sm space-y-1">
        <div className="flex justify-between">
            <span className="font-medium text-gray-700">
                Booking Opens On
            </span>

            <span className="font-semibold text-blue-900">
                {openDate.toDateString()}
            </span>
        </div>

        {/* Add to Calendar - Next Line */}
        <div className="flex justify-end">
            <AddToCalendar
                title="Railway Ticket Booking Opens"
                date={openDate}   // must be Date, not string
                />
        </div>
        </div>



      {/* Main Message */}
      <div className="bg-white rounded-lg p-3 border text-center">
        {diffDays > 0 ? (
          <div className="flex items-center justify-center gap-2">
            <p className="text-red-600 font-semibold">
              ⏳ Booking will open in {diffDays} day{diffDays > 1 ? "s" : ""}
            </p>

            {/* Exclamation Icon */}
            <div className="relative group">
            {/* Round Exclamation Icon */}
            <div className="relative group">
            {/* Round Exclamation Icon */}
                    <div
                        className="
                        w-7 h-7
                        flex items-center justify-center
                        rounded-full
                        bg-red-200
                        text-yellow-600
                        font-extrabold
                        text-sm
                        cursor-pointer
                        transition-all duration-200
                        hover:scale-110
                        hover:bg-red-300
                        hover:shadow-md
                        "
                    >
                       <div
                          aria-label="Important booking note"
                          role="button"
                          tabIndex={0}
                          className="w-7 h-7 flex items-center justify-center rounded-full bg-red-200"
                        >
                          !
                        </div>
                    </div>

                    {/* Hover Message - RIGHT SIDE */}
                    <div
                        className="
                        absolute
                        z-10
                        w-72
                        bg-yellow-50
                        border border-yellow-300
                        rounded-lg
                        p-3
                        text-xs
                        text-gray-800
                        shadow-lg
                        opacity-0
                        scale-95
                        pointer-events-none
                        transition-all duration-200
                        group-hover:opacity-100
                        group-hover:scale-100
                        left-1/2
                        -translate-x-1/2
                        top-full
                        mt-2
                         md:left-10
                        md:top-1/2
                        md:mt-0
                        md:-translate-x-0
                        md:-translate-y-1/2
                        "
                    >
                        <strong>Important:</strong> Please confirm that the
                        <strong> journey date</strong> and the
                        <strong> train start date from the source station </strong>
                        are the same.
                        <br /><br />
                        If the train starts on a different date, please select the
                        <strong> source station date</strong> while calculating the
                        booking date.
                    </div>
                    </div>
            </div>

          </div>
        ) : diffDays === 0 ? (
          <p className="text-green-700 font-semibold">
            🎉 Booking opens today!
          </p>
        ) : (
          <p className="text-gray-600 font-semibold">
            ⚠️ Booking already opened
          </p>
        )}
      </div>
      <p className="text-xs text-center text-gray-600">
        Advance booking calculated as <strong>60 days</strong> before journey
      </p>
    </div>
  );
}
