"use client";

import React from "react";

const ContactUs = () => {
  return (
    <section className="bg-white text-gray-900 dark:bg-black dark:text-white py-20 px-6 transition-colors duration-300">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-purple-600 mb-4">
          Get in Touch
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
          Have questions about building your custom PC? Fill out the form below,
          and we&apos;ll get back to you as soon as possible.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Contact Form */}
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="bg-gray-100 dark:bg-gray-900 p-8 rounded-2xl shadow-lg space-y-6 transition-colors duration-300"
        >
          {/* Hidden Inputs for Web3Forms */}
          <input type="hidden" name="from_name" value="Contact from PcQuicker" />
          <input
            type="hidden"
            name="access_key"
            value="46707c4f-71eb-43aa-89aa-91beb82e79e7"
          />
          <input
            type="hidden"
            name="subject"
            value="New Message from PcQuicker.com Web(Contact Us)"
          />
          <input
            type="hidden"
            name="redirect"
            value="https://pcquicker.com/thank-you"
          />
          <input type="checkbox" name="botcheck" style={{ display: "none" }} />

          {/* Form Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-2">First Name</label>
              <input
                type="text"
                name="First Name"
                placeholder="First name"
                required
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Last Name</label>
              <input
                type="text"
                name="Last Name"
                placeholder="Last name"
                required
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Email</label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                required
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Phone</label>
              <input
                type="text"
                name="phone"
                placeholder="+91...."
                required
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-2">Your Message</label>
            <textarea
              rows={5}
              name="message"
              placeholder="Type your message here..."
              required
              className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
            ></textarea>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition font-semibold"
            >
              Send Message
            </button>
            <p className="text-gray-600 dark:text-gray-300">or</p>
            <a
              href="tel:+917978622502"
              className="w-full md:w-auto px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition font-semibold"
            >
              Call Now
            </a>
          </div>
        </form>

        {/* Contact Info with WhatsApp */}
        <div className="space-y-8 text-left">
          <div>
            <h3 className="text-2xl font-semibold text-purple-600 mb-2">
              Connect with Us
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Have an urgent query? Reach us instantly via WhatsApp.
            </p>
            <a
              href="https://wa.me/917978622502"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-semibold"
            >
              💬 Connect on WhatsApp
            </a>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-2 text-purple-600">
              Business Hours
            </h4>
            <p className="text-gray-600 dark:text-gray-300">
              Mon – Fri: 9:00 AM – 7:00 PM
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Sat: 10:00 AM – 5:00 PM
            </p>
            <p className="text-gray-600 dark:text-gray-300">Sun: Closed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
