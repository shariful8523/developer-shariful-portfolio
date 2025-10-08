import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/my photo.jpg'



const Home = () => {
    return (
        <section
            id='about'
            className='py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32'
        >

            <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
                {/* left side */}
                <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>
                    {/* Greeting */}
                    <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight'>
                        Hi, I am
                    </h1>
                    {/* Name */}
                    <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight '>
                        Md. Shariful Islam
                    </h2>

                    {/* Skills heading with typical effect */}
                    <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight'>
                        <span className='text-white'>I am a </span>
                        <ReactTypingEffect
                            text={[
                                'Fullstack Developer',
                                'Frontend Developer',
                                'UI/UX Designer',
                                'Mern Stack Developer',
                            ]}
                            speed={100}
                            eraseSpeed={50}
                            typingDelay={500}
                            eraseDelay={200}
                            cursorRenderer={(cursor) => (
                                <span className='text-[#8245ec]'>{cursor}</span>
                            )}
                        />
                    </h3>

                    {/* About me  */}

                    <p className='text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 
                    leading-relaxed'>
                        I am a passionate Full-Stack Developer with a strong focus on building scalable and high-performance web applications. Proficient in both front-end and back-end technologies, I specialize in the MERN stack (MongoDB, Express.js, React, Node.js) along with modern tools and frameworks. I strive to deliver seamless user experiences and robust, maintainable solutions tailored to real-world needs.
                    </p>

                    {/* Resume Button */}
                    <a
                        href="https://docs.google.com/document/d/1gvPQkjhr2H_0jAdMOT294mGYNWr4pzKXKfQLzExG0Ks/edit?usp=sharing "
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
                        style={{
                            background: 'linear-gradient(90deg, #8245ec, #a855f7)',
                            boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
                        }}
                    >
                        DOWNLOAD RESUME
                    </a>
                </div>


                {/* Right Side */}
                <div className="md:w-1/2 flex justify-center md:justify-end">
                    <Tilt
                        className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
                        tiltMaxAngleX={20}
                        tiltMaxAngleY={20}
                        perspective={1000}
                        scale={1.05}
                       transitionSpeed={1000}
                        gyroscope={true}
                    >
                        <img
                            src={profileImage}
                            alt="Shariful Islam"
                            className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
                        />
                    </Tilt>
                </div>

            </div>
        </section>
    );
};

export default Home;