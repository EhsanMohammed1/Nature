const Hero = () => {
  return (
    <section className="text-gray-600 bg-black m-0 pt-0 lg:max-h-screen">
      <div className="container mx-auto flex md:px-24 md:py-10 md:flex-row flex-col items-center h-screen">
        <div className="lg:flex-grow mt-5 md:mt-0 md:w-1.5/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="text-xl font-extrabold leading-9  tracking-tight  text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-normal">
            Save <span className="text-green-800 text-6xl ">N</span>ature <br />{" "}
            Save Our Future
          </h1>
          <p className="mb-8 md:pl-0 text-xl pl-2 pr-2 leading-relaxed dark:text-gray-300">
            The Earth's natural ecosystems are under threat highlighting the
            importance of saving nature and the impact it has on our planet and
            future generations
          </p>
          <div className="flex py-12 justify-center">
            <a
              href="#"
              className="inline-flex text-white font-bold bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Start Exploring
            </a>
          </div>
        </div>
        <div className="lg:max-w-2lg lg:w-full  md:mb-0 md:w-3/4 w-1/2 shadow-lg transition duration-400  hover:shadow-gray-400 ">
          <img
            className="object-cover object-center rounded opacity-80"
            alt="hero"
            src="https://blog.depositphotos.com/wp-content/uploads/2017/07/Soothing-nature-backgrounds-2.jpg.webp"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
