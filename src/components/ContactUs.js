import React from 'react';

const ContactUs = () => {
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12 xl:p-24">
      <h1 className="text-3xl font-bold mb-4">Get in Touch</h1>
      <p className="text-lg mb-8">
        If you have any questions or just want to say hello, we'd love to hear from you.
      </p>
      <form className="flex flex-col">
        <label className="block mb-2" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="block p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          placeholder="Your Name"
        />
        <label className="block mb-2" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="block p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          placeholder="your@email.com"
        />
        <label className="block mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          className="block p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          placeholder="Your message here..."
          rows={5}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;