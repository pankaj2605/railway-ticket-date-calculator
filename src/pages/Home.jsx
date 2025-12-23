import { useState, useEffect } from "react";
import DateSelector from "../components/DateSelector";
import ReminderCard from "../components/ReminderCard";
import FAQ from "../components/FAQ";
import FAQSchema from "../components/FAQSchema";


export default function Home() {
  const [journeyDate, setJourneyDate] = useState(null);
  const [bookingDate, setBookingDate] = useState(null);
  const today = new Date();
  const [lastBookableDate, setLastBookableDate] = useState(() => {
                                                  const today = new Date();
                                                  const date = new Date(today);
                                                  date.setDate(today.getDate() + 60);
                                                  return date;
                                                });

  const handleCalculate = (jd, bd) => {
    setJourneyDate(jd);
    setBookingDate(bd);
  };

  useEffect(() => {
  const now = new Date();

  // Calculate milliseconds until next midnight
  const nextMidnight = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate() + 1,
    0, 0, 0, 0
  );

  const timeUntilMidnight = nextMidnight.getTime() - now.getTime();

  const timer = setTimeout(() => {
    const today = new Date();
    const updatedDate = new Date(today);
    updatedDate.setDate(today.getDate() + 60);
    setLastBookableDate(updatedDate);
  }, timeUntilMidnight);

  return () => clearTimeout(timer);
}, []);


  return (
    <>
    <FAQSchema />
   <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200">

      <div
        className="
          w-full
          bg-green-50
          border-b border-green-200
          py-4
          px-4
          text-center
        "
        role="status"
        aria-live="polite"
      >
        <p className="text-green-800 font-bold text-lg md:text-xl" role="status"
            aria-live="polite">
          Today you can book tickets for journey dates till {" "}
          <span
            className="
              inline-block
              ml-2
              px-3
              py-1
              rounded-full
              bg-green-200
              text-green-900
              text-lg md:text-xl
              font-extrabold
              shadow-sm
            "
          >
            {lastBookableDate.toDateString()}
          </span>
        </p>
        {/* ✅ Small info line */}
        <p className="mt-1 text-xs md:text-sm text-green-700">
          Booking starts at <strong>8:00 AM</strong>
        </p>
      </div>
      <div className="flex justify-center px-4 py-8">
      <div className="max-w-md w-full space-y-6">

        <h1 className="text-2xl font-bold text-center text-blue-900">
          🚆 Advance Railway Ticket Date Calculator
        </h1>
        <p className="text-sm text-center text-gray-700">
            Easily calculate when railway ticket booking opens based on IRCTC advance
            reservation rules (60 days) and set reminders so you never miss booking.
            </p>


        <DateSelector onCalculate={handleCalculate} />
        <ReminderCard journeyDate={journeyDate} bookingDate={bookingDate} />
        <FAQ />
      </div>
    </div>
    </div>
    </>
  );
}
