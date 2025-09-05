"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="px-4 divide-y dark:bg-gray-100 dark:text-gray-800 bg-gradient-to-br from-white via-gray-100 to-purple-200 overflow-hidden">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        {/* Logo and Description */}
        <div className="lg:w-1/3">
          <a
            rel="noopener noreferrer"
            href="#"
            className="flex justify-center space-x-3 lg:justify-start"
          >
            <Image
              // className="dark:invert"
              src="/pcquicker1.png"
              alt="PcQuicker Logo"
              width={180}
              height={38}
              priority
            />
          </a>
          <p className="max-w-xs py-2 mx-auto text-sm text-center text-gray-500 dark:text-gray-600 lg:mx-0 lg:text-left">
          PcQuicker is a customer-focused laptop and desktop servicing platform that brings fast, reliable, and hassle-free repairs right to your doorstep. 
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
            // {
            //   title: "Developers",
            //   links: [
            //     { name: "Public API", href: "#" },
            //     { name: "Documentation", href: "#" },
            //     { name: "Guides", href: "#" },
            //   ],
            // },
            {
              title: "Social Media",
              links: [
                // {
                //   name: "LinkedIn",
                //   href: "https://www.linkedin.com/company/pcquicker/",
                //   icon: (
                //     <Image
                //       src="/linkedin.svg"
                //       alt="LinkedIn logo"
                //       width={20}
                //       height={20}
                //     />
                //   ),
                // },
                // { name: "Facebook", href: "#" },
                // { name: "Twitter", href: "#" },
                { name: "Instagram", 
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
              <h3 className="tracking-wide uppercase dark:text-gray-900">
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
                        className="flex items-center p-1"
                      >
                        {"icon" in link && link.icon ? link.icon : link.name}
                        {"icon" in link && link.id }
                      </a>
                    ) : (
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href={link.href}
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
      <div className="py-6 text-sm text-center dark:text-gray-600">
        © 2025 Trixtern Tech. All rights reserved.
      </div>
    </footer>
  );
}
