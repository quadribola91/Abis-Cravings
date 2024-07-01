import React, { useState, useEffect } from "react";

export default function Content1() {
  const [imageIndex, setImageIndex] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    // Add more image URLs here
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            {/* Image on top for small screens */}
            <div className="lg:hidden">
              <img
                alt="Party"
                src={images[imageIndex]}
                className="w-full h-64 object-fit rounded-full mb-4 sm:h-80"
              />
            </div>

            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">
                CRAVINGS AT ITS BEST
              </h2>

              <p className="mt-4 text-gray-600">
                We Serve You Your Required Appetizer, Yummy & Tasty
              </p>

              <a
                href="#"
                className="mt-8 ml-12 inline-block justify-center rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                PARTNER WITH US
              </a>
            </div>

            {/* Image on bottom for larger screens */}
            <div className="hidden lg:block relative h-64 overflow-hidden rounded-lg lg:h-full">
              <img
                alt="Party"
                src={images[imageIndex]}
                className="absolute inset-0 h-full w-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
