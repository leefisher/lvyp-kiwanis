function Meetings() {
  return (
    <layout>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-12 mx-auto">
          <h1 class="title-font sm:text-3xl text-xl font-medium text-gray-900">
            Meetings
          </h1>
          <h2 class="title-font sm:text-2xl text-xl mb-4 font-medium text-gray-900">
            Please check{" "}
            <a
              href="https://www.facebook.com/lvypkiwanis"
              target="_blank"
              class="underline"
            >
              facebook
            </a>{" "}
            for all the latest meeting info and locations. Meetings are also
            streamed to Facebook.
          </h2>
          <div class="flex flex-wrap -mx-4 -mb-10 text-center bg-gradient-to-br from-blue-300 to-purple-100">
            <div class="sm:w-1/2 mb-10 px-4">
              <div class="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  class="object-scale-down h-full w-full"
                  src="/images/tiabigroup2021.jpg"
                />
              </div>
              <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                General Meeting
              </h2>
              <p class="leading-relaxed text-base">
                First Monday of the Month, 6:30pm
              </p>
            </div>
            <div class="sm:w-1/2 mb-10 px-4">
              <div class="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  src="/images/rmh.jpg"
                />
              </div>
              <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
                Service Meeting
              </h2>
              <p class="leading-relaxed text-base">
                Third Saturday of the Month, 6:00pm
              </p>
            </div>
          </div>
        </div>
      </section>
    </layout>
  );
}

export default Meetings;
