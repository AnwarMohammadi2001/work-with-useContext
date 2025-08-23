import React from "react";
import toast from "react-hot-toast";

const ContactUs = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "b2b7c5c8-dac3-47a9-b0d1-ab26ac81eebf");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Thank you for your submission!");
        event.target.reset();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    }
  };

  return (
    <div
      id="contactus"
      className="flex flex-col items-center px-4 sm:px-12 lg:px-24 xl:px-40 pt-[120px] text-gray-700 dark:text-white"
    >
      <form
        onSubmit={onSubmit}
        className="grid sm:grid-cols-2 gap-6 max-w-2xl w-full bg-white/60 dark:bg-gray-800/50 backdrop-blur-md p-8 rounded-2xl shadow-lg"
      >
        {/* Name Input */}
        <div className="relative">
          <input
            type="text"
            name="name"
            id="name"
            required
            placeholder=" "
            className="peer w-full px-3 pt-5 pb-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
          <label
            htmlFor="name"
            className="absolute left-3 top-2 text-gray-500 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-xs peer-placeholder-shown:font-normal peer-focus:top-2 peer-focus:text-blue-500 peer-focus:text-sm"
          >
            Your Name
          </label>
        </div>

        {/* Email Input */}
        <div className="relative">
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder=" "
            className="peer w-full px-3 pt-5 pb-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
          <label
            htmlFor="email"
            className="absolute left-3 top-2 text-gray-500 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-xs peer-placeholder-shown:font-normal peer-focus:top-2 peer-focus:text-blue-500 peer-focus:text-sm"
          >
            Your Email
          </label>
        </div>

        {/* Message Input */}
        <div className="relative sm:col-span-2">
          <textarea
            name="message"
            id="message"
            rows={6}
            required
            placeholder=" "
            className="peer w-full px-3 pt-5 pb-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          />
          <label
            htmlFor="message"
            className="absolute left-3 top-2 text-gray-500 dark:text-gray-400 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-xs peer-placeholder-shown:font-normal peer-focus:top-2 peer-focus:text-blue-500 peer-focus:text-sm"
          >
            Message
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="sm:col-span-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm px-6 py-3 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
