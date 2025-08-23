import React from "react";
import { Mail } from "lucide-react";
import toast from "react-hot-toast";

const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    if (!email) {
      toast.error("Please enter a valid email!");
      return;
    }

    // Here you could also send the email to your backend / API
    toast.success("Subscribed successfully 🎉");
    e.target.reset();
  };

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-12 px-6 transition-colors duration-300">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* --- Logo + About --- */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Tamadon
          </h2>
          <p className="text-sm leading-relaxed">
            Tamadon is a modern platform providing the best services for your
            needs. We focus on quality, creativity, and customer satisfaction.
          </p>
        </div>

        {/* --- Navigation Links --- */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#home"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contactus"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* --- Newsletter --- */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Join Our Newsletter
          </h3>
          <p className="text-sm mb-4">
            Subscribe to get the latest news, updates and special offers.
          </p>
          <form
            onSubmit={handleSubscribe}
            className="flex items-center bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden"
          >
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 text-sm bg-transparent outline-none text-gray-700 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
              required
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 flex items-center justify-center transition"
            >
              <Mail className="w-5 h-5 text-white" />
            </button>
          </form>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-gray-300 dark:border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Tamadon. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
