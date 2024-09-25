import Lottie from "lottie-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import hi from "../../../public/Animation/hi.json";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
// import { getDatabase, ref, onValue } from "firebase/database";

// ============= firebase =========
// const db = getDatabase();

// ============= contact form =========
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
    // const starCountRef = ref(db, "posts/" + postId + "/starCount");
    // onValue(starCountRef, (snapshot) => {
    //   const data = snapshot.val();
    //   updateStarCount(postElement, data);
    // });

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
    <div className="min-h-screen flex items-center justify-center px-6 py-12 bg-gradient-to-r pl-[100px]">
      <div className="max-w-6xl w-full bg-white grid grid-cols-1 lg:grid-cols-2 shadow-lg rounded-2xl overflow-hidden">
        {/* Left Section: Lottie Animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-blue-500 to-purple-500 p-10 flex flex-col justify-center items-center text-white"
        >
          <Lottie
            animationData={hi}
            loop={true}
            className="w-full max-w-md h-auto"
          />
          <h1 className="text-4xl font-bold mt-6">Let's Connect!</h1>
          <p className="mt-4 text-lg text-center">
            Feel free to reach out about new projects, collaborations, or just
            to say hi!
          </p>
        </motion.div>

        {/* Right Section: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="p-10 bg-white flex flex-col justify-center"
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Send a Message
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-5 py-4 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-400 transition duration-300 ease-in-out hover:shadow-lg"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              className="w-full px-5 py-4 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-400 transition duration-300 ease-in-out hover:shadow-lg"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write something..."
              className="w-full px-5 py-4 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-400 transition duration-300 ease-in-out hover:shadow-lg"
              rows="5"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white py-4 rounded-lg font-semibold hover:from-purple-400 hover:to-blue-500 transition-transform transform hover:scale-105 shadow-md hover:shadow-xl"
            >
              Send Message
            </button>
          </form>
        </motion.div>
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
