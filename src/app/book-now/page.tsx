"use client";

import React, { useState } from "react";

const BookNowPage: React.FC = () => {
  const [formStatus, setFormStatus] = useState<string>("");

  return (
    <section className="px-6 py-20 bg-white text-black min-h-screen">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="my-3 text-3xl font-bold text-purple-600">Book Now</h1>
        <p className="text-gray-600 mb-8">
          Hassle-free laptop repair at your doorstep!
        </p>
      </div>
      <div className="max-w-2xl mx-auto bg-gray-50 rounded-3xl shadow-lg p-8">
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          id="form"
          className="space-y-6"
          onSubmit={() => setFormStatus("Submitting...")}
        >
          <input type="hidden" name="access_key" value="46707c4f-71eb-43aa-89aa-91beb82e79e7" />
          <input type="hidden" name="subject" value="New Booking from pcquicker Web(Booking Laptop Service)" />
          <input type="checkbox" name="botcheck" style={{ display: "none" }} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="full_name" className="block mb-2 text-sm font-semibold text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="Full Name"
                id="full_name"
                placeholder="Full name"
                required
                className="w-full px-4 py-2 border-2 border-purple-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-200"
              />
              <div className="text-red-400 text-sm mt-1 hidden">
                Please provide your fullname.
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-semibold text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="you@company.com"
                required
                className="w-full px-4 py-2 border-2 border-purple-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-200"
              />
              <div className="text-red-400 text-sm mt-1 hidden">
                Please provide your email address.
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block mb-2 text-sm font-semibold text-gray-700">
                Phone
              </label>
              <input
                type="number"
                name="phone"
                id="phone"
                placeholder="+91...."
                required
                min={6000000000}
                max={9999999999}
                className="w-full px-4 py-2 border-2 border-purple-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-200"
              />
              <div className="text-red-400 text-sm mt-1 hidden">
                Please provide your phone number.
              </div>
            </div>
            <div>
              <label htmlFor="select_service" className="block mb-2 text-sm font-semibold text-gray-700">
                Type of Service
              </label>
              <select
                name="select_service"
                id="select_service"
                required
                className="w-full px-4 py-2 border-2 border-purple-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-200"
              >
                <option value="On-the-spot Service">On the spot Service</option>
                <option value="Same Day / within 24 hrs Service">Same Day / within 24 hrs Service*</option>
                <option value="Pickup & Drop Service">Pickup & Drop Service</option>
                <option value="Custom PC build related Service">Custom PC build related Service</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label htmlFor="brandmodel" className="block mb-2 text-sm font-semibold text-gray-700">
                Brand and Model Name
              </label>
              <input
                type="text"
                name="brandmodel"
                id="brandmodel"
                placeholder="Brand and Model."
                required
                className="w-full px-4 py-2 border-2 border-purple-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-200"
              />
              <div className="text-red-400 text-sm mt-1 hidden">
                Enter the Laptop/desktop Brand and Model.
              </div>
            </div>
            <div className="md:col-span-2">
              <label htmlFor="issue" className="block mb-2 text-sm font-semibold text-gray-700">
                Your Issue
              </label>
              <textarea
                rows={5}
                name="issue"
                id="issue"
                placeholder="Please describe your issue.."
                required
                className="w-full px-4 py-2 border-2 border-purple-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-200"
              ></textarea>
              <div className="text-red-400 text-sm mt-1 hidden">
                Please describe your issue before Booking. or Give a call directly to our support team.
              </div>
            </div>
          </div>
          <input type="hidden" name="redirect" value="https://pcquicker.com/thank-you" />
          <div className="text-center mt-8">
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold px-4 py-3 rounded-md transition"
            >
              Book Now
            </button>
          </div>
          <div className="text-center mt-4">
            <p className="italic text-gray-500">or directly call our support team to book</p>
          </div>
          <div className="text-center mt-2">
            <a
              href="tel:+917978622502"
              className="w-full inline-block bg-purple-600 hover:bg-purple-700 text-white font-semibold px-4 py-3 rounded-md transition"
            >
              Call Now
            </a>
          </div>
          <p className="text-base text-center text-gray-400 mt-4" id="result">
            {formStatus}
          </p>
        </form>
      </div>
    </section>
  );
};

export default BookNowPage;