import { Cards } from "../data.js";

const Tours = () => {
  return (
    <div className="h-screen  flex flex-col bg-black items-center  justify-center">
      <h1 className="text-gray-100 font-bold  text-3xl">
        {" "}
        <span className="text-green-600">T</span>ours
      </h1>
      <div className=" px-8 py-44   gap-1 gap-y-4 max-w-8xl w-full ">
        <div className="  flex gap-10 ">
          {Cards.map((card) => {
            const { id, title, Time, disc, href, img } = card;
            return (
              <div
                key={id}
                className=" flex flex-col justify-center items-center border-b    shadow-gray-100 border-white border-s-fuchsia-500  "
              >
                <div className="relative w-1/2 p-4">
                  <a href={href}>
                    <img
                      src={img}
                      className="w-98 h-auto rounded-xl opacity-95"
                    />
                  </a>
                </div>
                <div className="flex flex-row mt-2 gap-2 p-2 ">
                  <div className="flex flex-col">
                    <a href="#">
                      <p className="text-white text-2xl text-justify font-bold">
                        {title}
                      </p>
                    </a>
                    <div className="text-gray-300 text-xl mt-2   hover:text-gray-200">
                      {disc}
                    </div>
                    <p className="text-gray-900 font-semibold text-lx mt-1 bg-green-600">
                      {Time}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tours;
