export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 px-4 py-10">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 space-y-6">
        
        <h2 className="text-3xl font-bold text-blue-900 text-center">
          About This Tool
        </h2>

        <p className="text-gray-700 leading-relaxed">
          <strong>Advance Railway Ticket Date Calculator</strong> is a simple
          utility designed to help passengers calculate the exact date on which
          railway ticket booking opens based on their journey date.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Indian Railways allows advance reservation a fixed number of days
          before the journey date (currently <strong>60 days</strong> for most
          bookings). Remembering or manually calculating this date can be
          confusing — this tool does it instantly for you.
        </p>

        <h2 className="text-xl font-semibold text-blue-800">
          What this tool helps you with
        </h2>

        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Calculate the railway booking open date</li>
          <li>Know how many days are remaining before booking opens</li>
          <li>Understand if booking has already started</li>
          <li>Add reminders to Google Calendar, Apple Calendar, or Outlook</li>
        </ul>

        <h2 className="text-xl font-semibold text-blue-800">
          Important Note
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Please ensure the <strong>journey date</strong> you select matches the
          train’s <strong>start date from the source station</strong>. If a train
          starts on a different date from the source station, you must select
          the source station start date for accurate booking calculations.
        </p>
        <h2 className="text-xl font-semibold text-blue-800">
          About Railway Ticket Booking Dates
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Railway ticket booking dates in India are governed by the advance
          reservation rules defined by Indian Railways. For most train services,
          passengers are allowed to book tickets up to <strong>60 days in advance</strong>
          from the journey date, excluding the date of journey.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Advance booking typically opens at <strong>8:00 AM IST</strong> on the
          booking opening day. During peak travel periods such as festivals,
          holidays, and weekends, ticket availability may get exhausted quickly
          after booking opens.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Understanding the correct booking date is important to avoid long
          waiting lists or missed reservations. This tool helps simplify that
          process by automatically calculating the booking opening date based
          on the standard advance reservation rules.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Booking rules and reservation windows may change from time to time
          as per Indian Railways policies. Passengers are advised to always
          verify final booking details on official railway websites before
          making travel arrangements.
        </p>


        <h2 className="text-xl font-semibold text-blue-800">
          Disclaimer
        </h2>

        <p className="text-gray-600 text-sm">
          This application is not affiliated with IRCTC or Indian Railways.
          Booking rules are based on publicly available information and may
          change. Always verify details on the official IRCTC website.
        </p>

      </div>
    </div>
  );
}
