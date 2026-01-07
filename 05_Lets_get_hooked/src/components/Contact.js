const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
    <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-2">Contact Us</h1>
      <p className="text-gray-500 text-center mb-8">We’d love to hear from you. Please fill out the form below.</p>

      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300" type="text" placeholder="Enter your name" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300" type="email" placeholder="Enter your email" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea
          className="w-full border border-gray-300 rounded-lg px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-orange-300"
            rows="4"
            placeholder="Write your message here..."
          ></textarea>
        </div>

        <button className="w-full bg-orange-500 text-white font-semibold py-3 rounded-lg hover:bg-orange-600 transition" type="submit">Send Message</button>
      </form>
    </div>
    </div>
  );
};

export default Contact;
