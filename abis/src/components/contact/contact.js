import React from "react";
import "@fortawesome/fontawesome-free/css/all.css";

const Contact = () => {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-extrabold mb-8">Connect With Us</h2>

        <div className="flex justify-center space-x-6">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <i className="fab fa-facebook-f text-2xl"></i>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <i className="fab fa-whatsapp text-2xl"></i>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/yourinstagram"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <i className="fab fa-instagram text-2xl"></i>
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com/yourtwitter"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            <i className="fab fa-twitter text-2xl"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
