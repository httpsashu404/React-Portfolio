import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const email = form.current.email.value.trim();
    const name = form.current.name.value.trim();
    const subject = form.current.subject.value.trim();
    const message = form.current.message.value.trim();

    // ✅ Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      toast.warning("Please enter valid email ❗", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });
      return;
    }

    // ✅ mailto link
    const mailtoLink = `mailto:ashutoshkumarhtnn20@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    )}`;

    window.location.href = mailtoLink;

    setIsSent(true);
    form.current.reset();

    toast.success("Message sent successfully! 📨", {
      position: "top-right",
      autoClose: 3000,
      theme: "dark",
    });
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
            placeholder="Your email*"
            required
            className="w-full p-3 rounded-md bg-transparent text-[#ffc400] border-1 border-[#00ff88] focus:outline-none focus:border-purple-500"
          />
          <input
            type="text"
            name="name"
            placeholder="Your name*"
            required
            className="w-full p-3 rounded-md bg-transparent text-[#ffc400] border-1 border-[#00ff88] focus:outline-none focus:border-purple-500"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject*"
            required
            className="w-full p-3 rounded-md bg-transparent text-[#ffc400] border-1 border-[#00ff88] focus:outline-none focus:border-purple-500"
          />
          <textarea
            name="message"
            placeholder="Your message here..."
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
