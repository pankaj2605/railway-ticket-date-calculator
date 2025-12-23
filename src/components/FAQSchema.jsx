export default function FAQSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How many days in advance can railway tickets be booked?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Indian Railways allows advance reservation of train tickets up to 60 days before the journey date, excluding the date of journey."
        }
      },
      {
        "@type": "Question",
        "name": "At what time does railway ticket booking open?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Advance railway ticket booking usually opens at 8:00 AM IST on the booking opening day."
        }
      },
      {
        "@type": "Question",
        "name": "Does this calculator follow IRCTC rules?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "This calculator follows the standard Indian Railways advance reservation rule of 60 days. Booking rules may change, so users should verify on the official website."
        }
      },
      {
        "@type": "Question",
        "name": "Is this website affiliated with IRCTC or Indian Railways?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. This website is an independent informational tool and is not affiliated with IRCTC or Indian Railways."
        }
      },
      {
        "@type": "Question",
        "name": "Can I book Tatkal tickets using this calculator?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Tatkal tickets have different booking rules and timings. This calculator is only for advance reservation tickets."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
