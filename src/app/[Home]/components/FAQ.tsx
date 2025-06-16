'use client';

import Link from 'next/link';
import { useState } from 'react';

const faqs = [
  {
    q: 'Do I need to create an account?',
    a: 'No, creating an account is not necessary to book a service. You can easily schedule repairs as guest.',
  },
  {
    q: "What if my laptop can't be fixed at home?",
    a: 'If your laptop requires more extensive repairs, we will inform you and arrange for pickup. our technicians will assess the issue and provide a solition. You can trust us to keep you updated throughout the process.',
  },
  {
    q: 'How long does a typical service take?',
    a: 'Service times cary based on the issue. Most repairs are completed within few hours to a day. We will provide an estimated completion time when you book your service.',
  },
  {
    q: 'What are payment options?',
    a: 'We accept various payment methods, including credit cards and digital wallets. Payments can be made online during booking or upon service completion. Your Convenience is our priority.',
  },
  {
    q: 'How do I contact you ?',
    a: 'You can reach us through our contact page on the website. Alternatively, feel free to call us directly for immediate assistance. Our customer support team is here to help you with any inquiries or concerns you may have.',
  },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="px-6 py-20 bg-white text-black ">

        <div className='max-w-3xl mx-auto text-center'>
        <h2 className="text-3xl font-bold mb-6 text-purple-600">Frequently Asked Questions</h2>
      <p>Find answers to your questions about our repair services and booking process.</p>
      <div className="space-y-4 mt-10 text-left  ">
            {faqs.map((item, i) => (
              <div key={i}>
                <button onClick={() => setOpen(open === i ? null : i)} className="w-full text-left font-semibold text-lg border-t-2">
                  {item.q}
                </button>
                {open === i && <p className="text-sm mt-2 msx-w-3xl">{item.a}</p>}
              </div>
            ))}
          </div>
      
      </div>
       

      <div className='mt-20 mx-auto max-w-3xl text-center'>
        <h2 className="text-3xl font-bold mb-6 text-purple-600">Still have questions?</h2>
        <p>We are here to help you with any inquiries.</p>
        <Link href="/contact-us" className="mt-6 inline-block text-fuchsia-600 px-6 py-3 border border-fuchsia-600 hover:bg-fuchsia-100 transition-colors" target="_blank" rel="noopener noreferrer">
          Contact
        </Link>
      </div>
    </section>
  );
};

export default FAQ;
