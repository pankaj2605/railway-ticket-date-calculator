import { useState } from "react";

export default function PNRStatus() {
  const [pnr, setPnr] = useState("");
  const [showHint, setShowHint] = useState(false);


 const handleSubmit = async (e) => {
  e.preventDefault();

  if (pnr.length !== 10) {
    alert("Please enter a valid 10-digit PNR number");
    return;
  }

  try {
    await navigator.clipboard.writeText(pnr);
    setShowHint(true);
    setTimeout(() => setShowHint(false), 4000); // auto-hide
  } catch (err) {
    // Clipboard may fail silently on some browsers
  }

  window.open(
    "https://www.indianrail.gov.in/enquiry/PNR/PnrEnquiry.html?locale=en",
    "_blank"
  );
};


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 px-4 py-10">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-6 space-y-5">

        <h1 className="text-2xl font-bold text-blue-900 text-center">
          Check PNR Status
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="pnr"
              className="block text-sm font-medium text-gray-700"
            >
              Enter 10-digit PNR Number
            </label>

            <input
              id="pnr"
              type="text"
              maxLength={10}
              inputMode="numeric"
              pattern="[0-9]{10}"
              placeholder="e.g. 1234567890"
              className="mt-1 w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={pnr}
              onChange={(e) =>
                setPnr(e.target.value.replace(/\D/g, ""))
              }
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Check PNR Status
          </button>
        </form>
        {showHint && (
                <div
                    role="status"
                    aria-live="polite"
                    className="bg-green-50 border border-green-300 rounded-lg p-3 text-xs text-green-800"
                >
                    ✅ <strong>PNR copied to clipboard.</strong>
                    <br />
                    On the Indian Railways page, click the PNR box and press
                    <kbd className="mx-1 px-1.5 py-0.5 rounded border bg-white">Ctrl</kbd>+
                    <kbd className="px-1.5 py-0.5 rounded border bg-white">V</kbd> to paste.
                </div>
                )}

        {/* Disclaimer */}
        <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-3 text-xs text-gray-700">
            ⚠️ <strong>Disclaimer:</strong>  
            You will be redirected to the official Indian Railways PNR enquiry page
            (<strong>indianrail.gov.in</strong>).  
            For security reasons, the PNR number may need to be pasted manually on
            the external site.  
            This website is not responsible for data accuracy or availability.
        </div>


      </div>
    </div>
  );
}
