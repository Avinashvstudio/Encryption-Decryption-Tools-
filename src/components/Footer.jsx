const Footer = () => {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <div className="flex flex-shrink-0 items-center">
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              alt="Your Company"
            />
            <span className="ml-3 text-xl">Cipherzz</span>
          </div>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2023
          <a
            href="https://github.com/Avinashvstudio"
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            github - @Avinashvstudio
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
