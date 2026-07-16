import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] bg-skills-gradient clip-path-custom-2"
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>

        <p className="text-gray-400 mt-4 text-lg">
          A collection of my work experience and the roles I have taken in
          various organizations.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">

        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-[3px] bg-white"></div>

        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`relative flex items-center w-full mb-20 ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >

            {/* Circle */}
            <div className="absolute left-1/2 -translate-x-1/2 z-20 w-16 h-16 rounded-full border-4 border-[#8245ec] bg-[#111827] flex items-center justify-center shadow-lg">
              <img
                src={experience.img}
                alt={experience.company}
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>

            {/* Card */}
            <div
              className={`w-[470px] max-w-full bg-[#111827] border border-gray-500 rounded-2xl p-6 shadow-[0_0_20px_rgba(130,69,236,0.35)] transition-all duration-300 hover:scale-105 ${
                index % 2 === 0 ? "mr-auto pr-8" : "ml-auto pl-8"
              }`}
            >

              {/* Top */}
              <div className="flex items-center gap-4">

                <div className="w-16 h-16 bg-white rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {experience.role}
                  </h3>

                  <h4 className="text-gray-300 text-sm">
                    {experience.company}
                  </h4>

                  <p className="text-gray-500 text-sm mt-1">
                    {experience.date}
                  </p>
                </div>

              </div>

              {/* Description */}
              <p className="mt-5 text-gray-400 leading-7">
                {experience.desc}
              </p>

              {/* Skills */}
              <div className="mt-5">
                <h4 className="text-white font-semibold mb-3">
                  Skills:
                </h4>

                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-lg bg-[#8245ec] border border-gray-400 text-white text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;