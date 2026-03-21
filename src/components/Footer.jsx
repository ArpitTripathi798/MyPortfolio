import React from "react";

function Footer() {
  return (
    <>
      <div className="bg-white p-10 w-[100%] flex flex-col items-center space-y-5 mt-20">
        <div>
          <h1>&copy; 2025 Arpit Tripathi. All right reserved</h1>
        </div>

        <div>
          <ul className="flex space-x-5">
            <li>
              <a
                href="https://github.com/ArpitTripathi798"
                className="hover:text-blue-400 transition"
              >
                GitHub
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/arpit-tripathi-b737992ab"
                className="hover:text-blue-400 transition"
              >
                LinkedIn
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/arpit_tripathi_0001/"
                className="hover:text-blue-400 transition"
              >
                Instagram
              </a>
            </li>

            {/* ✅ WhatsApp Link */}
            <li>
              <a
                href="https://wa.me/917985531329"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-green-500 transition"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>

        <div className="text-center">
          <h1>Contact Info.</h1>
          <p>
            Mailto:
            <span className="hover:text-blue-600 transition">
              &nbsp; arpit786tripathis@gmail.com
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
