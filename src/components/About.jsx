import team from "../image/team.jpg";
import { Picture } from "../data";
const About = () => {
  return (
    <div className="w-screen py-0   2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6  px-4 bg-black">
      <div className="flex flex-col lg:flex-row justify-between gap-10 ">
        <div className="w-full lg:w-/12 flex flex-col justify-center ">
          <h1 className="text-5xl lg:text-4xl   font-bold leading-9 text-green-700 pb-4">
            About Us
          </h1>
          <p className="font-normal  text-2xl tex  w-2/3 w text-justify leading-1 text-gray-600 dark:text-white">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum.In the first place we have granted to God, and
            by this our present charter confirmed for us and our heirs forever
            that the English Church shall be free, and shall have her rights
            entire, and her liberties inviolate; and we will that it be thus
            observed; which is apparent from
          </p>
        </div>
        <div className="w-10/12 flex ">
          <img
            className="w-10/12 h-8/12 rounded-xl justify-center "
            src={team}
            alt="A group of People"
          />
        </div>
      </div>
      <div className="flex lg:flex-row flex-col justify-between gap-2 ">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-5xl lg:text-4xl font-bold leading-9 text-green-700  pb-4">
            Our Story
          </h1>
          <p className="font-normal text-2xl leading-1 text-justify w-3/3 text-gray-600 dark:text-white">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum.In the first place we have granted to God, and
            by this our present charter confirmed for us and our heirs forever
            that the English Church shall be free, and shall have her rights
            entire, and her liberties inviolate; and we will that it be thus
            observed; which is apparent from
          </p>
        </div>
        <div className="w-full lg:w-8/12 lg:pt-8">
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
            {Picture.map((card) => {
              const { id, name, pic } = card;
              return (
                // eslint-disable-next-line react/jsx-key
                <div
                  key={id}
                  className="p-4 pb-6 flex justify-center   flex-col items-center"
                >
                  <img
                    className="md:block rounded-xl hidden"
                    src={pic}
                    alt={name}
                  />

                  <p className="font-medium text-xl  leading-5 text-gray-800 dark:text-white mt-4">
                    {name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
