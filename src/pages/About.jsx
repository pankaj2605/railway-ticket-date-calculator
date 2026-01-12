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
          Find When Train Ticket Booking Opens Instantly
        </h2>

        <p className="text-gray-600 text-sm">
          Railway Ticket Date Calculator helps passengers easily find out when train ticket booking opens based on the Indian Railways 60-day advance reservation rule.
          Instead of manually counting dates or relying on assumptions, this tool instantly tells you the exact booking open date for your selected journey date.
          Whether you are planning travel for festivals, holidays, or urgent trips, knowing the booking date in advance helps you avoid waiting lists and last-minute issues.
        </p>

            <h2 className="text-xl font-semibold text-blue-800">
         How Railway Ticket Booking Dates Work
        </h2>

        <p className="text-gray-600 text-sm">
          Indian Railways allows passengers to book most train tickets up to 60 days in advance, excluding the date of journey.
          Booking usually opens at 8:00 AM IST
          The booking date depends on the train’s start date from the source station
          Availability may change quickly during peak travel periods
          This calculator applies the official advance reservation rule to give you accurate and reliable results.
        </p>

        <h2 className="text-xl font-semibold text-blue-800">
          Today’s Railway Booking Availability
        </h2>

        <p className="text-gray-600 text-sm">
         Based on today’s date, you can book railway tickets for journey dates up to 60 days ahead.
        The booking limit updates automatically every day at midnight, so the information shown here is always current.
        The highlighted date at the top of this page shows the last journey date you can book tickets for today.
        </p>

        <h2 className="text-xl font-semibold text-blue-800">
          Plan Ahead & Never Miss Booking
        </h2>

        <p className="text-gray-600 text-sm mb-2">
            Missing the ticket booking opening time can result in:
          </p>

          <ul className="list-disc list-inside text-gray-600 text-sm mb-4 space-y-1">
            <li>Long waiting lists</li>
            <li>Limited seat availability</li>
            <li>Dependence on Tatkal tickets</li>
          </ul>

          <p className="text-gray-600 text-sm mb-2">
            Using this tool, you can:
          </p>
          <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
            <li>Check booking dates instantly</li>
            <li>Set calendar reminders</li>
            <li>Plan your travel more confidently</li>
          </ul>
              <h2 className="text-xl font-semibold text-blue-800">
          Check PNR Status Safely
        </h2>

        <p className="text-gray-600 text-sm">
          Already booked your ticket?
          You can check your PNR status by entering your PNR number and safely redirecting to the official Indian Railways website.
          This site does not store or process PNR information and is designed only to guide users to the correct official source.
        </p>
        <h2 className="text-xl font-semibold text-blue-800">
          Disclaimer
        </h2>

        <p class="text-gray-600 text-sm">
          Railway Date Calculator is an independent informational website created to
          help passengers understand railway ticket booking dates.
        </p>

        <p class="text-gray-600 text-sm">
          This website is <strong>not affiliated</strong> with IRCTC or Indian Railways.
        </p>

        <p class="text-gray-600 text-sm">
          Booking rules, reservation periods, and timings may change from time to time.
        </p>

        <p class="text-gray-600 text-sm">
          Passengers are advised to always verify final booking details on official
          railway websites before making travel plans.
        </p>
      </div>
    </div>
  );
}
