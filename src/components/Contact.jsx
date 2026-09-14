
function Contact() {
  return (
    <div
      name="Contact"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-20"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-purple-500">
          Contact Me
        </h1>

        <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full mt-3"></div>

        <p className="text-gray-300 mt-5 text-lg">
          Have a project, internship opportunity, or just want to say hello?
          Feel free to send me a message.
        </p>
      </div>

      {/* Contact Form */}
      <div className="flex justify-center">
        <form
          action="https://forminit.com/f/xqifoua9xwy"
          method="POST"
          className="w-full max-w-xl bg-slate-900 border border-purple-500 rounded-2xl shadow-2xl p-8"
        >
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            Send Me a Message
          </h2>

          {/* Name */}
          <div className="mb-5">
            <label className="block text-gray-300 font-medium mb-2">
              Full Name
            </label>

            <input
              type="text"
              name="fi-sender-fullName"
              placeholder="Enter your full name"
              required
              className="w-full bg-slate-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
            />
          </div>

          {/* Email */}
          <div className="mb-5">
            <label className="block text-gray-300 font-medium mb-2">
              Email Address
            </label>

            <input
              type="email"
              name="fi-sender-email"
              placeholder="Enter your email address"
              required
              className="w-full bg-slate-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
            />
          </div>

          {/* Message */}
          <div className="mb-6">
            <label className="block text-gray-300 font-medium mb-2">
              Message
            </label>

            <textarea
              name="fi-text-message"
              rows="6"
              placeholder="Write your message..."
              required
              className="w-full bg-slate-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition resize-none"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 via-violet-600 to-pink-600 text-white font-semibold text-lg py-3 rounded-xl hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 transition duration-300"
          >
            Send Message 🚀
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

