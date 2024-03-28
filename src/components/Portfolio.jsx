import React from "react";
import Rest from "../assets/portfolio/Rest.jpg";
import nutri from "../assets/portfolio/nutri.jpg";
import Port from "../assets/portfolio/port.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Rest,
      projectname:"Self ordering System",
    },
    {
      id: 2,
      src: nutri,
      projectname:"Nutrition-detector ",
    },
    {
      id: 3,
      src: Port,
      projectname:"React-Portfolio",
    },
  ];

  return (
    <div
      name="project"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-green-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid grid-cols-2  md:grid-cols-4 gap-8 px-1 sm:px-0">
          {portfolios.map(({ id, src,projectname }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <p className=" flex py-5 uppercase  justify-center items-center">{projectname}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
