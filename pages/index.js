import Head from "next/head";
import { comment } from "postcss";

export default function Home() {
  return (
    <layout>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-4 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Las Vegas Young Professionals Kiwanis
              <br class="hidden lg:inline-block" />
              Serving The Las Vegas Community Since 2008
            </h1>
            <p class="mb-8 leading-relaxed">
              Providing opportunity to be involved in meaningful service
              opportunities and social connections for individuals who are young
              or young at heart.
            </p>
          </div>
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="/images/club_members.jpeg"
            />
          </div>
        </div>
      </section>

      <section class="text-gray-600 body-font bg-gradient-to-br from-blue-300 to-purple-100">
        <div class="container px-5 py-12 mx-auto">
          <div class="flex flex-col">
            <div class="h-1 bg-gray-200 rounded overflow-hidden">
              <div class="w-24 h-full bg-indigo-500"></div>
            </div>
            <div class="flex flex-wrap sm:flex-row flex-col py-4 mb-12">
              <h1 class="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
                What we do
              </h1>
              <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0 font-bold">
                How can you help?
              </p>
            </div>
          </div>
          <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div class="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div class="rounded-lg h-80 overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  src="/images/cooking.jpg"
                />
              </div>
              <h2 class="text-xl font-medium title-font text-gray-900 mt-5">
                Hands-on Service
              </h2>
              <p class="text-base leading-relaxed mt-2">
                We pride ourselves on having projects that have us play an
                important role in the project and include a meaningful, hands-on
                experience. See more in our Service section.
              </p>
              <a
                class="text-blue-700 inline-flex items-center mt-3"
                href="/service"
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
              <div class="rounded-lg h-80 overflow-hidden">
                <img
                  alt="content"
                  class="object-cover object-center h-full w-full"
                  src="/images/vegas_leaders.webp"
                />
              </div>
              <h2 class="text-xl font-medium title-font text-gray-900 mt-5">
                Leadership Opportunities
              </h2>
              <p class="text-base leading-relaxed mt-2">
                Not only do we have the opportunity to improve and develop our
                own leadership skills, but we also have the opportunity to
                provide leadership experiences for our youth. Find out more in
                our Leadership section.
              </p>
              <a
                class="text-indigo-500 inline-flex items-center mt-3"
                href="/leadership"
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
              <div class="rounded-lg h-80 overflow-hidden">
                <img
                  alt="content"
                  class="object-scale-down object-center h-full w-full"
                  src="/images/blm.webp"
                />
              </div>
              <h2 class="text-xl font-medium title-font text-gray-900 mt-5">
                Social Involvement
              </h2>
              <p class="text-base leading-relaxed mt-2">
                We like to stay involved and supportive of social causes that
                affect our community and the world. See more in our Activism
                section.
              </p>
              <a
                class="text-indigo-500 inline-flex items-center mt-3"
                href="/activism"
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
          </div>
        </div>
      </section>
    </layout>
  );
}
