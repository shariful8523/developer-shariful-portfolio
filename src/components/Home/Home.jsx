import React, { useEffect, useState } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/my photo.jpg'



const Home = () => {

  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <section
      id="about"
      className="w-11/12 mx-auto py-12 px-6 lg:px-[10vw] font-sans mt-20 md:mt-28 lg:mt-36"
    >
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-16">

        {/* ===== Left Side ===== */}
        <div className="lg:w-[55%] text-center lg:text-left">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-3 leading-tight">
            Hi, I am
          </h1>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-tight">
            Md. Shariful Islam
          </h2>

          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                "Fullstack Developer",
                "Frontend Developer",
                "UI/UX Designer",
                "MERN Stack Developer",
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={200}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>

          <p className="text-base sm:text-lg lg:text-lg text-gray-400 mb-10 leading-relaxed max-w-[90%] lg:max-w-[95%]">
            I am a passionate Full-Stack Developer focused on building scalable and
            high-performance web applications. Skilled in the MERN stack
            (MongoDB, Express.js, React, Node.js) and modern tools, I create
            seamless user experiences and maintainable solutions tailored to
            real-world needs.
          </p>

          <a
            href="/MD_SHARIFUL_ISLAM_RESUME.pdf"
            download="Md_Shariful_Islam_Resume.pdf"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #8245ec, #a855f7)",
              boxShadow:
                "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            DOWNLOAD RESUME
          </a>
        </div>

        {/* ===== Right Side ===== */}
        <div className="lg:w-[45%] flex justify-center lg:justify-end">
          <Tilt
            className="w-44 h-44 sm:w-64 sm:h-64 lg:w-[24rem] lg:h-[24rem] border-4 border-purple-600 rounded-full"
            tiltEnable={!isMobile}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Shariful Islam"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_0_25px_rgba(130,69,236,0.6)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );


};

export default Home;