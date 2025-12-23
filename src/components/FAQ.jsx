import { useState } from "react";

const faqs = [
  {
    question: "How many days in advance can railway tickets be booked?",
    answer:
      "Indian Railways allows advance reservation of train tickets up to 60 days before the journey date, excluding the date of journey."
  },
  {
    question: "At what time does railway ticket booking open?",
    answer:
      "Advance railway ticket booking usually opens at 8:00 AM IST on the booking opening day."
  },
  {
    question: "Does this calculator follow IRCTC rules?",
    answer:
      "Yes, this calculator follows the standard Indian Railways advance reservation rule of 60 days. However, booking rules may change, so always verify on the official website."
  },
  {
    question: "Is this website affiliated with IRCTC or Indian Railways?",
    answer:
      "No. This website is an independent informational tool and is not affiliated with IRCTC or Indian Railways."
  },
  {
    question: "Can I book Tatkal tickets using this calculator?",
    answer:
      "No. Tatkal tickets have different booking rules and timings. This calculator is only for advance reservation tickets."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="mt-10">
      <h2 className="text-xl font-bold text-blue-900 text-center mb-4">
        Frequently Asked Questions (FAQ)
      </h2>

      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg bg-white shadow-sm"
          >
            <button
              className="w-full flex justify-between items-center p-4 text-left font-medium text-gray-800"
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              aria-expanded={openIndex === index}
            >
              {faq.question}
              <span className="text-xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {openIndex === index && (
              <div className="px-4 pb-4 text-sm text-gray-700">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
