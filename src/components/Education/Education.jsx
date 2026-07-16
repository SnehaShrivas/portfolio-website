import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] bg-skills-gradient clip-path-custom-3"
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4 rounded-full"></div>

        <p className="text-gray-400 mt-4 text-lg">
          My education has been a journey of learning and development. Here are
          the details of my academic background.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-[3px] bg-white"></div>

        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`relative flex items-center w-full mb-20 ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            {/* Timeline Circle */}
            <div className="absolute left-1/2 -translate-x-1/2 z-20 w-16 h-16 rounded-full border-4 border-[#8245ec] bg-[#111827] flex items-center justify-center shadow-lg">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>

            {/* Card */}
            <div
              className={`w-[470px] max-w-full bg-[#111827] border border-gray-500 rounded-2xl p-6 shadow-[0_0_20px_rgba(130,69,236,0.35)] transition-all duration-300 hover:scale-105 ${
                index % 2 === 0 ? "mr-auto pr-8" : "ml-auto pl-8"
              }`}
            >
              {/* Header */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">
                    {edu.degree}
                  </h3>

                  <h4 className="text-gray-300 text-sm">
                    {edu.school}
                  </h4>

                  <p className="text-gray-500 text-sm mt-1">
                    {edu.date}
                  </p>
                </div>
              </div>

              {/* Grade */}
              <p className="mt-5 text-white font-semibold">
                Grade: {edu.grade}
              </p>

              {/* Description */}
              <p className="mt-3 text-gray-400 leading-7">
                {edu.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;