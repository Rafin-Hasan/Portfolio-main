import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Import the Toastify CSS

const ContactComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation check
    if (formData.name && formData.email && formData.message) {
      // Simulate successful submission
      toast.success("Your message has been sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // Clear the form
    } else {
      toast.error("Please fill in all the fields!");
    }
  };

  return (
    <div className="min-h-screen ml-[230px] flex items-center justify-center px-6 py-12">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 shadow-lg rounded-xl overflow-hidden">
        {/* Left Section: Contact Information */}
        <div className="bg-gradient-to-br from-blue-400 to-blue-500 text-white p-10 flex flex-col justify-center space-y-6">
          <h4 className="text-sm uppercase tracking-wide font-semibold">
            Let's Connect
          </h4>
          <h1 className="text-4xl font-bold leading-tight">Get in Touch</h1>
          <p className="text-gray-100">
            I'm currently available to take on new projects. Feel free to send
            me a message about anything you'd like to discuss.
          </p>
          <div className="space-y-2">
            <p className="text-lg font-semibold">(+880) 177 8566 730</p>
            <p>
              <Link
                to="rafinhasan.web@gmail.com"
                className="text-lg underline hover:text-blue-200 transition-colors"
              >
                rafinhasan.web@gmail.com
              </Link>
            </p>
            <p>
              <Link
                to="#"
                className="text-lg underline hover:text-blue-200 transition-colors"
              >
                Gazipur, Dhaka, Bangladesh
              </Link>
            </p>
          </div>
        </div>

        {/* Right Section: Form */}
        <div className="bg-white p-10 space-y-8">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-5 py-4 text-lg border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-400 transition duration-300 ease-in-out hover:shadow-lg"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              className="w-full px-5 py-4 text-lg border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-400 transition duration-300 ease-in-out hover:shadow-lg"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write something..."
              className="w-full px-5 py-4 text-lg border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-400 transition duration-300 ease-in-out hover:shadow-lg"
              rows="5"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-sky-400 to-blue-500 text-white py-4 rounded-lg font-semibold hover:from-sky-300 hover:to-blue-400 transition-transform transform hover:scale-105 shadow-md hover:shadow-xl"
            >
              Submit now
            </button>
          </form>
        </div>
      </div>

      {/* Toast Notification Container */}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        pauseOnFocusLoss
      />
    </div>
  );
};

export default ContactComponent;
