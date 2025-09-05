"use client";

import React from "react";

const TermsAndConditions = () => {
  return (
    <section className="bg-white text-gray-900 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-purple-600 mb-6 text-center">
          Terms & Conditions
        </h1>
        <p className="text-lg text-gray-700 mb-10 text-center">
          Please read these terms and conditions carefully before using our services.
        </p>

        {/* Content */}
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-semibold text-purple-600 mt-8 mb-4">
            Acceptance of Terms
          </h2>
          <p>
            By accessing or using <strong>PcQuicker</strong>, you agree to comply with
            these terms and all applicable laws and regulations.
          </p>

          <h2 className="text-2xl font-semibold text-purple-600 mt-8 mb-4">
            Use of Services
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>You must be at least 18 years old to use our services.</li>
            <li>
              You agree not to misuse or exploit our services for unauthorized
              purposes.
            </li>
            <li>
              All intellectual property on this website remains the property of PcQuicker.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-purple-600 mt-8 mb-4">
            Limitation of Liability
          </h2>
          <p>
            PcQuicker is not liable for any damages arising from the use or
            inability to use our services. We provide our services &quot;as is&quot;
            without warranties of any kind.
          </p>

          <h2 className="text-2xl font-semibold text-purple-600 mt-8 mb-4">
            Changes to Terms
          </h2>
          <p>
            We may update these terms from time to time. It is your
            responsibility to review this page periodically for changes.
          </p>

          <h2 className="text-2xl font-semibold text-purple-600 mt-8 mb-4">
            Contact Us
          </h2>
          <p>
            For any questions about these Terms & Conditions, please contact us
            via email or WhatsApp.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;
