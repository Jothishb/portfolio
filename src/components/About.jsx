import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 md:mt-[100px]">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-green-500">
            Abouts
          </p>
        </div>

        <p className=" mb-[50px]">
        Greetings! I'm Jothish, a final-year Information Technology student at Sri Shakthi Institute of Engineering and Technology <span className="text-green-500">having a cgpa of 8.00</span>. Pursuing my schooling at Holy Innocent School and Junior College, I undertook the challenging  <span className="text-green-500">ISC Syllabus</span>, further enhancing my analytical and critical thinking abilities.

In addition to my academic pursuits, I've excelled in sports, particularly as a <span className="text-green-500">national-level hockey player</span>, where I've honed discipline, teamwork, and strategic thinking both on and off the field. My dedication to sports has instilled in me invaluable qualities of resilience and leadership, which I seamlessly integrate into my academic and professional endeavors. At the college level, I've also competed in interzone level hockey, further showcasing my passion and commitment to the sport.

Moreover, my love for strategic games extends to chess, where I've demonstrated a keen understanding of tactics and planning, fostering a deep appreciation for strategic decision-making in various aspects of life.
</p><br></br>
<p>
My experiences at "Tech Volt" have equipped me with a robust skill set in frontend development. Proficient in HTML, CSS, Tailwind, JavaScript, Core Java, MySQL, express Js , Node JS, and basic React, I ensure a holistic approach to projects. Notably, I led the development of the <span className="text-green-500">"Nutrition Detector"</span> a Java Console project aimed at showing how much healthy an individual is and the amount of vitamins and minerals present in day to day meal.

Furthermore, my personal <span className="text-green-500">"Portfolio Website"</span> reflects my commitment to clean design principles and a seamless user experience. I also have published a paper on “IJRASET” on topic “Smart Dining and Smart Food Ordering System”
<span className="text-green-500"> Paper Id: IJRASET55253 .</span>


Driven by a passion for collaboration and innovation, I am eager to apply my diverse skill set and experiences to contribute meaningfully to your projects. Let's connect and explore the best possibilities for creating impactful solutions together.
</p>
      </div>
    </div>
  );
};

export default About;
