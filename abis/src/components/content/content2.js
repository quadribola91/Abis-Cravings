import React, { useEffect } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css"; // Import the CSS file separately

export default function Content2() {
  useEffect(() => {
    const keenSlider = new KeenSlider(
      "#keen-slider",
      {
        loop: true,
        slides: {
          origin: "center",
          perView: 1.25,
          spacing: 16,
        },
        breakpoints: {
          "(min-width: 1024px)": {
            slides: {
              origin: "auto",
              perView: 2.5,
              spacing: 32,
            },
          },
        },
      },
      []
    );

    const keenSliderPrevious = document.getElementById("keen-slider-previous");
    const keenSliderNext = document.getElementById("keen-slider-next");

    keenSliderPrevious.addEventListener("click", () => keenSlider.prev());
    keenSliderNext.addEventListener("click", () => keenSlider.next());
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/keen-slider@6.8.6/keen-slider.min.css"
        rel="stylesheet"
      />

      <section className="bg-gray-50">
        <div class="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
          <div class="max-w-7xl items-end justify-between sm:flex sm:pe-6 lg:pe-8">
            <h2 class="max-w-xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Our Availables
            </h2>
          </div>
          <div class="mb-0  flex gap-4 lg:mt-0 justify-center">
            <button
              aria-label="Previous slide"
              id="keen-slider-previous"
              class="rounded-full h-20 w-20 border bg-gray-600 border-gray-200 p-3 text-white text-center transition hover:bg-black hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-8 w-8 rtl:rotate-180"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            <button
              aria-label="Next slide"
              id="keen-slider-next"
              class="rounded-full h-20 w-20 border bg-gray-600 text-center border-gray-200 p-3 text-white transition hover:bg-black hover:text-white"
            >
              <svg
                class="h-8 w-8 rtl:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 5l7 7-7 7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </svg>
            </button>
          </div>

          <div class="-mx-6 mt-8 lg:col-span-2 lg:mx-0">
            <div id="keen-slider" class="keen-slider">
              <div class="keen-slider__slide">
                <a href="#" class="group block">
                  <div class="relative h-[350px] sm:h-[450px]">
                    <img
                      src="https://images.unsplash.com/photo-1592921870789-04563d55041c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                      alt=""
                      class="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
                    />

                    <img
                      src="https://images.unsplash.com/photo-1594385208974-2e75f8d7bb48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                      alt=""
                      class="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                    />
                  </div>

                  <div class="mt-3">
                    <h3 class="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                      Small Headphones
                    </h3>

                    <p class="mt-1.5 max-w-[40ch] text-xs text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Omnis quibusdam ab maiores placeat odio id?
                    </p>
                  </div>
                </a>
              </div>

              <div class="keen-slider__slide">
                <a href="#" class="group block">
                  <div class="relative h-[350px] sm:h-[450px]">
                    <img
                      src="https://images.unsplash.com/photo-1592921870789-04563d55041c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                      alt=""
                      class="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
                    />

                    <img
                      src="https://images.unsplash.com/photo-1594385208974-2e75f8d7bb48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                      alt=""
                      class="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                    />
                  </div>

                  <div class="mt-3">
                    <h3 class="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                      Small Headphones
                    </h3>

                    <p class="mt-1.5 max-w-[40ch] text-xs text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Omnis quibusdam ab maiores placeat odio id?
                    </p>
                  </div>
                </a>
              </div>

              <div class="keen-slider__slide">
                <a href="#" class="group block">
                  <div class="relative h-[350px] sm:h-[450px]">
                    <img
                      src="https://images.unsplash.com/photo-1592921870789-04563d55041c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                      alt=""
                      class="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
                    />

                    <img
                      src="https://images.unsplash.com/photo-1594385208974-2e75f8d7bb48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                      alt=""
                      class="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                    />
                  </div>

                  <div class="mt-3">
                    <h3 class="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                      Small Headphones
                    </h3>

                    <p class="mt-1.5 max-w-[40ch] text-xs text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Omnis quibusdam ab maiores placeat odio id?
                    </p>
                  </div>
                </a>
              </div>

              <div class="keen-slider__slide">
                <a href="#" class="group block">
                  <div class="relative h-[350px] sm:h-[450px]">
                    <img
                      src="https://images.unsplash.com/photo-1592921870789-04563d55041c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                      alt=""
                      class="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
                    />

                    <img
                      src="https://images.unsplash.com/photo-1594385208974-2e75f8d7bb48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                      alt=""
                      class="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                    />
                  </div>

                  <div class="mt-3">
                    <h3 class="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                      Small Headphones
                    </h3>

                    <p class="mt-1.5 max-w-[40ch] text-xs text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Omnis quibusdam ab maiores placeat odio id?
                    </p>
                  </div>
                </a>
              </div>

              <div class="keen-slider__slide">
                <a href="#" class="group block">
                  <div class="relative h-[350px] sm:h-[450px]">
                    <img
                      src="https://images.unsplash.com/photo-1592921870789-04563d55041c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                      alt=""
                      class="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
                    />

                    <img
                      src="https://images.unsplash.com/photo-1594385208974-2e75f8d7bb48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                      alt=""
                      class="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                    />
                  </div>

                  <div class="mt-3">
                    <h3 class="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                      Small Headphones
                    </h3>

                    <p class="mt-1.5 max-w-[40ch] text-xs text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Omnis quibusdam ab maiores placeat odio id?
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
