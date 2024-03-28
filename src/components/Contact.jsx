import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-full bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-green-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/qalolveb"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent   bg-gradient-to-r from-green-500/50 to-green-800/10  hover:text-green-500 border-2 rounded-md text-gray-100 hover:translate-x-4 focus:outline-none"
            />
            <input 
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent  bg-gradient-to-r from-green-500/50 to-green-900/10 border-2 rounded-md hover:text-green-500 text-gray-100 focus:outline-none  hover:translate-x-4"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 bg-gradient-to-b from-green-500/50 to-green-900/10 rounded-md  hover:text-green-500 text-gray-100  focus:outline-none hover:translate-x-4"
            ></textarea>

            <button className="text-white bg-gradient-to-r from-green-500 to-lime-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Shoot
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
