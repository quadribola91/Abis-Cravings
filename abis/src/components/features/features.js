export default function Features() {
  return (
    <>
      <section>
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div class="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
            <div class="grid place-content-center rounded bg-gray-100 p-6 sm:p-8">
              <div class="mx-auto max-w-md text-center lg:text-left">
                <header>
                  <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">
                    Craves
                  </h2>

                  <p class="mt-4 text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quas rerum quam amet provident nulla error!
                  </p>
                </header>

                <a
                  class="inline-block rounded-full border border-indigo-600 bg-indigo-600 p-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
                  href="/download"
                >
                  <span class="sr-only"> Download </span>

                  <svg
                    class="h-5 w-5 rtl:rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div class="lg:col-span-2 lg:py-8">
              <ul class="grid grid-cols-2 gap-4">
                <li>
                  <a href="#" class="group block">
                    <img
                      src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80"
                      alt=""
                      class="aspect-square w-full rounded object-cover"
                    />

                    <div class="mt-3">
                      <h3 class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                        Simple Watch
                      </h3>

                      <p class="mt-1 text-sm text-gray-700">$150</p>
                    </div>
                  </a>
                </li>

                <li>
                  <a href="#" class="group block">
                    <img
                      src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80"
                      alt=""
                      class="aspect-square w-full rounded object-cover"
                    />

                    <div class="mt-3">
                      <h3 class="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                        Simple Watch
                      </h3>

                      <p class="mt-1 text-sm text-gray-700">$150</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
