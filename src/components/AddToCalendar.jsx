// import { useState } from "react";

// export default function AddToCalendar({ title, date, disabled = false }) {
//   const [open, setOpen] = useState(false);

//   // 🛑 Safety check (VERY IMPORTANT)
//   if (!date || !(date instanceof Date)) {
//     return null; // prevent React crash
//   }

//   // Format date → YYYYMMDD
//   const formatDate = (d) => {
//     const year = d.getFullYear();
//     const month = String(d.getMonth() + 1).padStart(2, "0");
//     const day = String(d.getDate()).padStart(2, "0");
//     return `${year}${month}${day}`;
//   };

//   const start = formatDate(date);

//   // Google Calendar
//   const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
//     title
//   )}&dates=${start}/${start}&details=Railway ticket booking opens today`;

//   // Outlook 365
//   const outlookUrl = `https://outlook.live.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(
//     title
//   )}&startdt=${date.toISOString()}`;

//   // iCalendar (.ics)
//   const icsData = `BEGIN:VCALENDAR
// VERSION:2.0
// BEGIN:VEVENT
// SUMMARY:${title}
// DTSTART:${start}T090000
// DTEND:${start}T100000
// DESCRIPTION:Railway ticket booking opens today
// END:VEVENT
// END:VCALENDAR`;

//   const downloadICS = () => {
//     const blob = new Blob([icsData], { type: "text/calendar;charset=utf-8" });
//     const url = URL.createObjectURL(blob);

//     const a = document.createElement("a");
//     a.href = url;
//     a.download = "railway-booking-reminder.ics";
//     a.click();

//     URL.revokeObjectURL(url);
//   };

//   return (
//     <div className="relative w-full">
//       {/* Full-width primary button */}
//       <button
//         onClick={() => !disabled && setOpen(!open)}
//         disabled={disabled}
//         className={`
//           w-full flex items-center justify-center gap-2
//           px-4 py-3 rounded-xl font-semibold transition
//           ${
//             disabled
//               ? "bg-gray-300 text-gray-600 cursor-not-allowed"
//               : "bg-emerald-600 text-white hover:bg-emerald-700 hover:shadow-md"
//           }
//         `}
//       >
//         📅 Add to Calendar
//       </button>

//       {/* Popup options */}
//       {open && !disabled && (
//         <div className="absolute left-0 right-0 mt-2 bg-white border rounded-xl shadow-lg text-sm z-50 overflow-hidden">
//           <a
//             href={googleUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="block px-4 py-2 hover:bg-gray-100"
//           >
//             📅 Google Calendar
//           </a>

//           <a
//             href={outlookUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="block px-4 py-2 hover:bg-gray-100"
//           >
//             🟦 Outlook 365
//           </a>

//           <button
//             onClick={downloadICS}
//             className="w-full text-left px-4 py-2 hover:bg-gray-100"
//           >
//             🍎 Apple iCalendar
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }


import { useEffect, useRef, useState } from "react";

export default function AddToCalendar({ title, date, disabled = false }) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  // 🛑 Safety check
  if (!date || !(date instanceof Date)) return null;

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const formatDate = (d) => {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}${m}${day}`;
  };

  const start = formatDate(date);

  const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    title
  )}&dates=${start}/${start}&details=Railway ticket booking opens today`;

  const outlookUrl = `https://outlook.live.com/calendar/0/deeplink/compose?subject=${encodeURIComponent(
    title
  )}&startdt=${date.toISOString()}`;

  const icsData = `BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${title}
DTSTART:${start}T090000
DTEND:${start}T100000
DESCRIPTION:Railway ticket booking opens today
END:VEVENT
END:VCALENDAR`;

  const downloadICS = () => {
    const blob = new Blob([icsData], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "railway-booking-reminder.ics";
    a.click();
    URL.revokeObjectURL(url);
    setOpen(false); // ✅ close after click
  };

  return (
    <div ref={wrapperRef} className="relative w-full">
      {/* Main Button */}
      <button
        onClick={() => !disabled && setOpen((prev) => !prev)}
        disabled={disabled}
        className={`
          w-full flex items-center justify-center gap-2
          px-4 py-3 rounded-xl font-semibold transition
          ${
            disabled
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-emerald-600 text-white hover:bg-emerald-700 hover:shadow-md"
          }
        `}
      >
        📅 Add to Calendar
      </button>

      {/* Popup */}
      {open && !disabled && (
        <div className="absolute left-0 right-0 mt-2 bg-white border rounded-xl shadow-lg text-sm z-50 overflow-hidden">
          <a
            href={googleUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)} // ✅ close on click
            className="block px-4 py-2 hover:bg-gray-100"
          >
            📅 Google Calendar
          </a>

          <a
            href={outlookUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)} // ✅ close on click
            className="block px-4 py-2 hover:bg-gray-100"
          >
            🟦 Outlook 365
          </a>

          <button
            onClick={downloadICS}
            className="w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            🍎 Apple iCalendar
          </button>
        </div>
      )}
    </div>
  );
}

