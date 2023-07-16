import { Service } from "../data";

const Services = () => {
  return (
    <div className="section relative  md:pt-16 md:pb-0 bg-black">
      <div className="container h-Screen xl:max-w-6xl mx-auto px-4  py-10">
        <header className="text-center mx-auto mb-12 lg:px-20">
          <h2 className="text-4xl leading-normal mb-2 font-bold text-green-700">
            What We Do
          </h2>
          <p className="text-white text-2xl leading-relaxed font-light  mx-auto pb-2">
            Save time managing advertising &amp; Content for your business.
          </p>
        </header>

        {Service.map((serv) => {
          const { disc, title, icon, id } = serv;
          return (
            // eslint-disable-next-line react/jsx-key
            <div
              key={id}
              className="py-8 px-12  mb-12 font-semibold  bg-black border-b shadow-sm shadow-gray-100 border-white border-s-fuchsia-500 transform transition duration-300 ease-in-out hover:-translate-y-2"
            >
              <h3 className=" leading-normal mb-2 text-2xl font-bold text-green-700">
                <img src={icon} alt={title} />
                {title}
              </h3>
              <p className="text-gray-200 text-lg">{disc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
