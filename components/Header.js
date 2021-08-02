const Header = () => (
  <header class="text-gray-600 body-font">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <a
        class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        href="/"
      >
        <img
          src="/images/KI_Las-Vegas-Young-Professionals_BLUEGOLD-0180px.png"
          class="h-20 rounded-lg"
          alt="LVYP International logo"
        ></img>
      </a>
      <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
        <a class="mr-5 hover:text-gray-900" href="/">
          Home
        </a>
        <a class="mr-5 hover:text-gray-900" href="/about">
          About
        </a>
        <a class="mr-5 hover:text-gray-900" href="/service">
          Service
        </a>
        <a class="mr-5 hover:text-gray-900" href="/meetings">
          Meetings
        </a>
        <a class="mr-5 hover:text-gray-900" href="/leadership">
          Leadership
        </a>
        <a class="mr-5 hover:text-gray-900" href="/membership">
          Membership
        </a>
        <a class="mr-5 hover:text-gray-900" href="/activism">
          Activism
        </a>
        <a class="mr-5 hover:text-gray-900" href="/signature-projects">
          Signature Projects
        </a>
      </nav>

      <a
        href="https://linktr.ee/lvypkiwanis"
        target="_blank"
        class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
      >
        LinkTree{" "}
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </a>
      <a
        href="mailto:lvypkiwanis@gmail.com"
        target="_blank"
        class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
      >
        Contact Us
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="w-4 h-4 ml-1"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </a>
    </div>
  </header>
);

export default Header;
