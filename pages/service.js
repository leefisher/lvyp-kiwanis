function Service() {
  return (
    <layout>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col">
            <div class="h-1 bg-gray-200 rounded overflow-hidden">
              <div class="w-24 h-full bg-indigo-500"></div>
            </div>
            <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 class="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
                Service Projects
              </h1>
              <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                Below are some of the organizations and events we work with
              </p>
            </div>
          </div>
          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 bg-gradient-to-br from-yellow-50 to-blue-200">
            <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div class="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  class="object-scale-down object-center h-full w-full"
                  src="/images/rmhlv-logo.png"
                />
              </div>
              <h2 class="text-xl font-medium title-font text-gray-900 mt-5">
                RONALD MCDONALD HOUSE CHARITIES OF GREATER LAS VEGAS
              </h2>
              <p class="text-base leading-relaxed mt-2">
                This program is run monthly, where our club prepares and serves
                dinner to the residents of the Ronald McDonald House. RMHC
                provides accommodations for families of pediatric patients in
                Las Vegas. It allows our members to provide a “home-cooked” meal
                for families experiencing stressful times while a loved one is
                receiving needed treatments. In addition, our club volunteers
                with their annual Runnin’ for the House fundraiser. To learn
                more, you can visit them at: https://rmhlv.org/
              </p>
              <a
                class="text-indigo-500 inline-flex items-center mt-3"
                href="https://rmhlv.org/"
                target="_blank"
              >
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div class="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  src="/images/gradesuplevelup.jpg"
                />
              </div>
              <h2 class="text-xl font-medium title-font text-gray-900 mt-5">
                GRADES UP, LEVEL UP
              </h2>
              <p class="text-base leading-relaxed mt-2">
                This project is run by LVYP Kiwanis in conjunction with several
                other cosponsors. The project is geared toward CCSD students and
                is a program to reward their good grades. With the popularity of
                gaming, it allows qualified student to participate in an overall
                gaming experience or even participate in a tournament for
                popular games.
              </p>
            </div>
            <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div class="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  class="object-scale-down object-center h-full w-full"
                  src="/images/rock-n-roll-las-vegas-marathon-and-half-marathon-logo-640x360-1.jpg"
                />
              </div>
              <h2 class="text-xl font-medium title-font text-gray-900 mt-5">
                LAS VEGAS ROCK N’ ROLL MARATHON
              </h2>
              <p class="text-base leading-relaxed mt-2">
                We work closely with Sponsored Leadership Programs to help
                coordinate a water station during the marathon. The event
                usually occurs in the winter each year. This event usually
                requires a lot of volunteers, so feel free to contact us if you
                want to help us out.
              </p>
            </div>
          </div>
        </div>
      </section>
    </layout>
  );
}

export default Service;
