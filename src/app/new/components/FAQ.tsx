'use client';
import { useState } from 'react';

const faqs = [
  {
    q: 'Do I need to create an account to book a service?',
    a: 'No, you can book a service by providing your phone number or email...',
  },
  {
    q: "What if my laptop can't be fixed at home?",
    a: 'We’ll pick it up and return it after service at no extra cost.',
  },
  {
    q: 'How long does a typical service take?',
    a: 'Typically between 2–4 hours depending on the issue.',
  },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="px-6 py-20 bg-white text-black">
      <h2 className="text-3xl font-bold mb-6 text-purple-600">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((item, i) => (
          <div key={i}>
            <button onClick={() => setOpen(open === i ? null : i)} className="w-full text-left font-semibold text-lg">
              {item.q}
            </button>
            {open === i && <p className="text-sm mt-2">{item.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
