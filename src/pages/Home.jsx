import { useState } from "react";
import DateSelector from "../components/DateSelector";
import ReminderCard from "../components/ReminderCard";

export default function Home() {
  const [journeyDate, setJourneyDate] = useState(null);
  const [bookingDate, setBookingDate] = useState(null);

  const handleCalculate = (jd, bd) => {
    setJourneyDate(jd);
    setBookingDate(bd);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 flex items-center justify-center p-4">
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
      </div>
    </div>
  );
}
