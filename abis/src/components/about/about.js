import React from "react";

const AboutUs = () => {
  return (
    <section className="sm:bg-gray-100 md:bg-gray-200 py-16">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16 bg-white p-5">
          <h2 className="text-3xl font-extrabold text-white bg-blue-500">
            Our Story
          </h2>
          <p className="mt-4 text-gray-600 hover:font-mono font-serif">
            Welcome to Abi's, where passion meets flavor. Our journey began with
            a simple yet profound idea: to create memorable dining experiences
            through delightful, handcrafted cuisine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-5">
            <h3 className="text-xl font-bold mb-4 bg-blue-500 text-center text-white">
              Our Mission
            </h3>
            <p className="text-gray-700 hover:font-mono font-serif">
              At Abi's, our mission is to [describe your mission in a sentence
              or two]. We strive to [mention any specific goals or values that
              define your mission].
            </p>
          </div>
          <div className="bg-white p-5">
            <h3 className="text-xl font-bold mb-4 bg-blue-500 text-center text-white">
              Our Vision
            </h3>
            <p className="text-gray-700 hover:font-mono font-serif">
              We are committed to using only the finest, freshest ingredients in
              every dish we prepare. Our chefs take pride in sourcing locally
              whenever possible to support our community and ensure a
              farm-to-table experience.
            </p>
          </div>
        </div>

        <div className="mt-12 bg-white p-5">
          <h2 className="text-3xl font-extrabold text-white text-center mb-4 bg-blue-500">
            Our Team
          </h2>
          <p className="text-gray-600 hover:font-mono font-serif">
            Meet the passionate individuals behind Abi's. Our team of dedicated
            chefs, culinary artists, and service professionals work tirelessly
            to bring you the best flavors and hospitality.
          </p>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-900 font-medium hover:font-mono font-serif">
            Thank you for being a part of our culinary journey. We look forward
            to serving you with delicious meals made from the heart.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
