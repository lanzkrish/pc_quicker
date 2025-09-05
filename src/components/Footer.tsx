"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="px-4 divide-y bg-gradient-to-br from-gray-50 via-gray-100 to-purple-100 dark:from-black dark:via-gray-800 dark:to-gray-900 dark:text-gray-300 overflow-hidden">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        
        {/* Logo and Description */}
        <div className="lg:w-1/3">
          <a
            rel="noopener noreferrer"
            href="#"
            className="flex justify-center space-x-3 lg:justify-start"
          >
            <Image
              src="/pcquicker1.png"
              alt="PcQuicker Logo"
              width={180}
              height={38}
              priority
              className="dark:invert" // makes logo adapt to dark mode
            />
          </a>
          <p className="max-w-xs py-2 mx-auto text-sm text-center text-gray-600 dark:text-gray-400 lg:mx-0 lg:text-left">
            PcQuicker is a customer-focused laptop and desktop servicing
            platform that brings fast, reliable, and hassle-free repairs right
            to your doorstep.
          </p>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          {[
            {
              title: "Product",
              links: [
                { name: "Services", href: "/home#services" },
                { name: "CustomBuilds", href: "/pc_build" },
                { name: "Pricing", href: "contact-us" },
                { name: "FAQ", href: "/home#faq" },
              ],
            },
            {
              title: "Company",
              links: [
                { name: "Privacy Policy", href: "/privacy-policy" },
                { name: "Terms & Conditions", href: "/terms&conditions" },
                { name: "Contact Us", href: "/contact-us" },
              ],
            },
            {
              title: "Social Media",
              links: [
                {
                  name: "Instagram",
                  href: "https://www.instagram.com/pc_quicker/",
                  id: "pc_quicker",
                  icon: (
                    <Image
                      src="/instagram.svg"
                      alt="Instagram logo"
                      width={30}
                      height={30}
                    />
                  ),
                },
              ],
              icons: true,
            },
          ].map((section, index) => (
            <div key={index} className="space-y-3">
              <h3 className="tracking-wide uppercase text-gray-800 dark:text-gray-200">
                {section.title}
              </h3>
              <ul className="space-y-1">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    {section.icons ? (
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href={link.href}
                        title={link.name}
                        className="flex items-center p-1 hover:text-fuchsia-600 dark:hover:text-fuchsia-400"
                      >
                        {"icon" in link && link.icon ? link.icon : link.name}
                        {"icon" in link && link.id}
                      </a>
                    ) : (
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href={link.href}
                        className="hover:text-fuchsia-600 dark:hover:text-fuchsia-400"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="py-6 text-sm text-center text-gray-600 dark:text-gray-400">
        © 2025 Trixtern Tech. All rights reserved.
      </div>
    </footer>
  );
}
