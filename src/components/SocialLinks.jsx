import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";


const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/jothish-babu-1a9b9a24a/",
      style: " rounded-tr-md bg-blue-500",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Jothishb",
      style: "rounded-tr-md bg-slate-900",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:jothishkiran3278@gmail.com",
      style: "rounded-tr-md bg-cyan-600",
    },
    {
      id: 3,
      child: (
        <>
          Instagram <FaInstagramSquare size={30} />
        </>
      ),
      href: "https://www.instagram.com/_jothish_11?igsh=MWg4N21pOHkwMXlkbQ==",
      style: "rounded-tr-md bg-red-900",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
          
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-tr-md bg-lime-400",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300" +
              " " +style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
