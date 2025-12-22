export default function UsefulLinks() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 px-4 py-10">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-6 space-y-6">

        <h2 className="text-3xl font-bold text-blue-900 text-center">
          Useful Railway Booking Links
        </h2>

        <p className="text-gray-700 text-sm text-center">
          Quick access to popular railway ticket booking platforms
        </p>

        {/* Links List */}
        <div className="space-y-4">

          <a
            href="https://www.irctc.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="block border rounded-lg p-4 hover:bg-blue-50 transition"
          >
            <h2 className="font-semibold text-blue-800">
              IRCTC Official Website
            </h2>
            <p className="text-sm text-gray-600">
              Official Indian Railways ticket booking portal
            </p>
          </a>

          <a
            href="https://www.makemytrip.com/railways/"
            target="_blank"
            rel="noopener noreferrer"
            className="block border rounded-lg p-4 hover:bg-blue-50 transition"
          >
            <h2 className="font-semibold text-blue-800">
              MakeMyTrip – Railways
            </h2>
            <p className="text-sm text-gray-600">
              Book train tickets with offers and wallet options
            </p>
          </a>

          <a
            href="https://www.confirmtkt.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block border rounded-lg p-4 hover:bg-blue-50 transition"
          >
            <h2 className="font-semibold text-blue-800">
              ConfirmTkt
            </h2>
            <p className="text-sm text-gray-600">
              Train ticket booking with PNR prediction support
            </p>
          </a>

          <a
            href="https://www.easemytrip.com/railways/"
            target="_blank"
            rel="noopener noreferrer"
            className="block border rounded-lg p-4 hover:bg-blue-50 transition"
          >
            <h2 className="font-semibold text-blue-800">
              EaseMyTrip – Railways
            </h2>
            <p className="text-sm text-gray-600">
              Railway booking with deals and easy UI
            </p>
          </a>

          <a
            href="https://www.ixigo.com/trains"
            target="_blank"
            rel="noopener noreferrer"
            className="block border rounded-lg p-4 hover:bg-blue-50 transition"
          >
            <h2 className="font-semibold text-blue-800">
              ixigo Trains
            </h2>
            <p className="text-sm text-gray-600">
              Train search, PNR status, and booking assistance
            </p>
          </a>

        </div>

        {/* Disclaimer */}
        <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-4 text-sm text-gray-700">
          ⚠️ <strong>Disclaimer:</strong>  
          This website is <strong>not responsible</strong> for any ticket booking,
          payment, cancellation, or refund issues. All bookings are handled
          directly on the respective third-party websites.  
          Please verify all details before making a booking.
        </div>

      </div>
    </div>
  );
}
