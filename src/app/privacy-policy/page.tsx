"use client";

import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="bg-white text-gray-900 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-purple-600 mb-6 text-center">
          Privacy Policy
        </h1>
        <p className="text-lg text-gray-700 mb-10 text-center">
          Your privacy is important to us. Please read the following information carefully.
        </p>

        {/* Content */}
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            At <strong>PcQuicker</strong>, we respect your privacy and are committed
            to protecting the personal information you share with us. This policy explains how we
            collect, use, and safeguard your information.
          </p>

          <h2 className="text-2xl font-semibold text-purple-600 mt-8 mb-4">
            Information We Collect
          </h2>
          <p>
            We may collect your name, email address, phone number, and other
            contact details when you fill out forms on our website or interact
            with us through WhatsApp or phone calls.
          </p>

          <h2 className="text-2xl font-semibold text-purple-600 mt-8 mb-4">
            How We Use Your Information
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>To respond to your inquiries and provide customer support</li>
            <li>To process service requests and bookings</li>
            <li>To improve our website and services</li>
          </ul>

          <h2 className="text-2xl font-semibold text-purple-600 mt-8 mb-4">
            Data Security
          </h2>
          <p>
            We implement industry-standard measures to safeguard your data.
            However, no online transmission can be guaranteed as 100% secure.
          </p>

          <h2 className="text-2xl font-semibold text-purple-600 mt-8 mb-4">
            Contact Us
          </h2>
          <p>
            If you have any questions about this Privacy Policy, please reach
            out to us via email or WhatsApp.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
