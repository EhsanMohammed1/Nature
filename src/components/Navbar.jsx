/* eslint-disable react/jsx-key */
import { Links, Navlinks } from "../data";

const Navbar = () => {
  return (
    <nav className="bg-black text-white   fixed w-full  top-0 border-b border-gray-200 ">
      <div className="max-w-screen-3xl px-8 flex  flex-wrap items-center justify-between mx-auto p-4">
        <a href="" className="flex items-center">
          <span className="self-center text-gray-800 text-2xl font-semibold whitespace-nowrap ">
            <span className="text-green-700 text-3xl">N</span>
            <span className="text-2xl text-white">ature</span>
          </span>
        </a>
        {/*navbar icons map   */}
        <div className="flex md:order-2 ">
          {Links.map((icons) => {
            const { href, icon, id } = icons;
            return (
              <a
                target="blank"
                href={href}
                key={id}
                className=" text-red-900  hover:bg-white focus:ring-4 focus:outline-none  font-medium rounded-lg text-2xl px-2 py-2 text-center mr-3 md:mr-0"
              >
                <img className="text-white" src={icon} alt="" />
              </a>
            );
          })}
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col active:text-green-900 font-bold p-4 md:p-0 mt-4  border  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
            {Navlinks.map((links) => {
              const { id, title, href } = links;
              return (
                <li key={id}>
                  <a
                    href={href}
                    className="block py-2  pl-3 pr-4 text-white hover:text-green-700 rounded-md text-xl  md:bg-transparent  md:p-0"
                    aria-current="page"
                  >
                    {title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
