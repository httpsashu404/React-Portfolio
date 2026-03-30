import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_id", // Replace with your EmailJS Service ID
        "template_id", // Replace with your EmailJS Template ID
        form.current,
        "public_id", // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset(); // Reset form fields after sending
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-10 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      {/* Toast Container */}
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-[#00ff88] mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Let’s turn your vision into a fast, modern, and responsive website
          that truly stands out — drop your message below and I’ll get back to
          you soon!
        </p>
      </div>

      {/* Contact Form */}
      <div className="bg-transparent w-full max-w-md bg-tranparent p-6 rounded-lg shadow-lg border-1 border-[#00ff88]">
        <h3 className="text-xl font-semibold text-white text-center">
          Get In Touch <span className="ml-1">🚀</span>
        </h3>
        <form
          autoComplete="off"
          ref={form}
          onSubmit={sendEmail}
          className="mt-4 flex flex-col space-y-4"
        >
          <input
            type="email"
            name="email"
            placeholder="ashutoshkumar@example.com"
            required
            className="w-full p-3 rounded-md bg-transparent text-[#ffc400] border-1 border-[#00ff88] focus:outline-none focus:border-purple-500"
          />
          <input
            type="text"
            name="name"
            placeholder="Ashutosh Kumar"
            required
            className="w-full p-3 rounded-md bg-transparent text-[#ffc400] border-1 border-[#00ff88] focus:outline-none focus:border-purple-500"
          />
          <input
            type="text"
            name="subject"
            placeholder="What is this regarding?"
            required
            className="w-full p-3 rounded-md bg-transparent text-[#ffc400] border-1 border-[#00ff88] focus:outline-none focus:border-purple-500"
          />
          <textarea
            name="message"
            placeholder="Put your message here..."
            rows="4"
            required
            className="w-full p-3 rounded-md bg-transparent text-gray-400 border-1 border-[#00ff88] focus:outline-none focus:border-purple-500"
          />

          {/* Send Button */}
          <button
            type="submit"
            className="w-full bg-[#00ff88] py-3 text-black font-semibold rounded-md hover:opacity-90 transition"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
