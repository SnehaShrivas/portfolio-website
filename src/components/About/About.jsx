import React from "react";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/profile2.jpeg";

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden pt-36 pb-24 px-6 md:px-12 lg:px-24"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,#3b3b5b1a_1px,transparent_1px),linear-gradient(to_bottom,#3b3b5b1a_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* Purple Glow */}
      <div className="absolute top-20 left-20 w-80 h-80 rounded-full bg-purple-600/20 blur-[140px] -z-10"></div>

      {/* Blue Glow */}
      <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-cyan-500/20 blur-[140px] -z-10"></div>

      {/* Hero */}
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-16">

        {/* Left Side */}
        <div className="lg:w-1/2 text-center lg:text-left">

          <p className="uppercase tracking-[8px] text-cyan-300 text-sm font-semibold mb-4">
            Welcome To My Portfolio
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-white">
            Hi,
            <br />

            <span className="bg-gradient-to-r from-cyan-300 via-white to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(168,85,247,0.7)]">
              I'm Sneha Shrivas
            </span>
          </h1>

          <div className="w-32 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 mt-8 mb-8 shadow-[0_0_25px_rgba(168,85,247,0.8)]"></div>

          <h2 className="text-2xl md:text-3xl font-bold text-white leading-relaxed">
            I Build
            <span className="text-purple-400 ml-3">
              <TypeAnimation
                sequence={[
                  "Modern Websites",
                  2000,
                  "Full Stack Apps",
                  2000,
                  "Creative UI Designs",
                  2000,
                  "Responsive Interfaces",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h2>
          {/* Description */}
          <p className="mt-8 text-gray-300 text-lg leading-8 max-w-2xl">
            I'm a passionate{" "}
            <span className="text-cyan-300 font-semibold">
              Full Stack Developer
            </span>{" "}
            who loves building modern, responsive and high-performance web
            applications. I specialize in the{" "}
            <span className="text-purple-400 font-semibold">
              MERN Stack
            </span>{" "}
            and enjoy creating clean UI/UX with scalable backend solutions.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 mt-10 justify-center lg:justify-start">

            <a
              href="https://drive.google.com/file/d/1_pLl2wjYVCU-wnqXIhjhYr0YC0SJXvwv/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full text-white font-bold text-lg transition-all duration-300
              bg-gradient-to-r from-cyan-500 to-purple-600
              hover:scale-105
              hover:shadow-[0_0_35px_rgba(168,85,247,0.8)]"
            >
              Download CV
            </a>

            <a
              href="#contact"
              className="px-8 py-4 rounded-full font-bold text-lg
              border border-cyan-400
              text-cyan-300
              hover:bg-cyan-400
              hover:text-[#050414]
              transition-all duration-300
              hover:shadow-[0_0_25px_rgba(34,211,238,0.8)]"
            >
              Contact Me
            </a>

          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-10 mt-14">

            <div>
              <h3 className="text-4xl font-black text-white">1+</h3>
              <p className="text-gray-400 mt-2">Years Experience</p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-cyan-300">10+</h3>
              <p className="text-gray-400 mt-2">Projects</p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-purple-400">100%</h3>
              <p className="text-gray-400 mt-2">Dedication</p>
            </div>

          </div>

        </div>

        {/* Right Side */}
        <div className="lg:w-1/2 flex justify-center">
             <Tilt
  tiltMaxAngleX={15}
  tiltMaxAngleY={15}
  perspective={1000}
  scale={1.03}
  transitionSpeed={1200}
  gyroscope={true}
  className="relative"
>
  {/* Outer Glow */}
  <div className="absolute -inset-5 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 blur-3xl opacity-40 animate-pulse"></div>

  {/* Glass Circle */}
  <div className="relative w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] lg:w-[500px] lg:h-[500px] rounded-full bg-white/5 backdrop-blur-xl border border-cyan-400/20 shadow-[0_0_70px_rgba(139,92,246,0.35)] flex items-center justify-center">

    {/* Rotating Border */}
    <div className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 p-[2px] animate-spin [animation-duration:10s]">
      <div className="w-full h-full rounded-full bg-[#050414]"></div>
    </div>

    {/* Profile Image */}
    <img
      src={profileImage}
      alt="Sneha Shrivas"
      className="relative z-10 w-[92%] h-[92%] rounded-full object-cover border-4 border-purple-500/40 shadow-[0_0_60px_rgba(168,85,247,0.55)]"
    />

    {/* Decorative Dots */}
    <div className="absolute top-10 right-10 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,1)]"></div>

    <div className="absolute bottom-14 left-12 w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_20px_rgba(168,85,247,1)]"></div>

    <div className="absolute top-1/2 -left-4 w-2 h-2 rounded-full bg-white"></div>

    <div className="absolute top-20 -right-2 w-2 h-2 rounded-full bg-white"></div>
  </div>
</Tilt>

      </div>
    </div>
  </section>
  );
};

export default About;
       