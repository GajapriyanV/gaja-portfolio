
import React from 'react'
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { Separator } from "@/components/ui/separator"
import { useCallback, useEffect, useState } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
import Typewriter from "typewriter-effect";
import { typewriterText } from '@/lib/info';
import Link from 'next/link';

type Props = {}



const Main = (props: Props) => {


    const [typewriterVisible, setTypewriterVisible] = useState(false);

  useEffect(() => {
    setTypewriterVisible(true);
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
}, []);

const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container);
}, []);




  return (

          <div className='flex flex-col-reverse w-full mx-auto min-h-screen max-h-screen mb-8 relative' data-aos="fade-in" style={{ overflowX: 'hidden' }}>
          
            
            <div className='absolute w-full h-full'>
              {typewriterVisible && (
              <Particles
                  id="tsparticles"
                  init={particlesInit}
                  loaded={particlesLoaded}
                  options={{
                      
                      fpsLimit: 60,
                      fullScreen: { enable: true },
                      interactivity: {
                          events: {
                              onClick: {
                                  enable: true,
                                  mode: "push",
                              },
                              onHover: {
                                  enable: true,
                                  mode: "repulse",
                              },
                              resize: true,
                          },
                          modes: {
                              push: {
                                  quantity: 1,
                              },
                              repulse: {
                                  distance: 200,
                                  duration: 0.4,
                              },
                          },
                      },
                      particles: {
                          color: {
                              value: "#ffffff",
                          },
                          links: {
                              color: "#ffffff",
                              distance: 150,
                              enable: true,
                              opacity: 0.5,
                              width: 1,
                          },
                          move: {
                              direction: "none",
                              enable: true,
                              outModes: {
                                  default: "bounce",
                              },
                              random: false,
                              speed: 2,
                              straight: false,
                          },
                          number: {
                              density: {
                                  enable: true,
                                  area: 800,
                              },
                              value: 13,
                          },
                          opacity: {
                              value: 0.5,
                          },
                          shape: {
                              type: "circle",
                          },
                          size: {
                              value: { min: 1, max: 5 },
                          },
                      },
                      detectRetina: true,
                  }}
              />
              )}
            </div>
            <div className='flex flex-col md:flex-row absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-full'>
            {/* This is the Div With My name */}
            <div className='flex flex-2 md:w-1/2 flex-col md:border-r md:pl-16 xl:pl-6'>
              <h2 className=' text-center md:text-left text-4xl xl:text-5xl font-bold mb-2'>Gajapriyan Vigneswaran</h2>
              <p className={` text-center md:text-start text-m opacity-50 mb-3 md:mb-2 h-7 md:h-5`}>
                
                <span>
                {typewriterVisible && (
                <Typewriter
                options={{ loop: true }}
                onInit={(typewriter) => {
                    
                    typewriterText.map((text) => {
                        typewriter
                        .typeString(` ${text}`)
                        .pauseFor(2000)
                        .deleteAll()
                        .start();
                    });
                    
                }}
                />
                )}
                </span>
              </p>
              <div className="flex h-5 items-center  space-x-4 md:text-sm justify-center md:justify-start mb-2">
    <Link href="/your-resume-page">
    <div className="relative cursor-pointer group">
    <span className="hover:underline">Resume</span>
    <span className="line bg-black w-0 h-1 absolute bottom-0 left-0 transition-width ease-in-out duration-500 group-hover:w-full"></span>
  </div>
  </Link>

                <Separator orientation="vertical" />
    <Link href="https://github.com/GajapriyanV">
    <div className="relative cursor-pointer group">
    <span className="hover:underline">Github</span>
    <span className="line bg-black w-0 h-1 absolute bottom-0 left-0 transition-width ease-in-out duration-500 group-hover:w-full"></span>
  </div>
  </Link>
                <Separator orientation="vertical" />
    <Link href="https://www.linkedin.com/in/gajapriyan-vigneswaran-8b5072225/">
    <div className="relative cursor-pointer group">
    <span className="hover:underline">Socials</span>
    <span className="line bg-black w-0 h-1 absolute bottom-0 left-0 transition-width ease-in-out duration-500 group-hover:w-full"></span>
  </div>
  </Link>
              </div>
            </div>
            <Separator className='md:hidden' orientation="horizontal" />
            <div className='mt-2 md: ml-3 flex-1 md:w-1/2'>
              <p className='text-sm opacity-50 text-center md:text-start'> Welcome to my site, Im a passionate developer who specializes in Full Stack  Development, Devops and data science.
              I am currently a second year student  at Carleton University studying Computer Science. I am always exploring new  and enriching techonologies to enhance my work. Learn more about me below! </p>
            </div>   
            </div>
            <div className='flex items-center justify-center mb-28 md:mb-15 text-3xl animate-bounce' onClick={() =>
          window.scrollBy({
            left: 0,
            top: 0.92 * window.innerHeight,
            behavior: "smooth",
          })
        }>
              <MdKeyboardDoubleArrowDown/>
            </div>
        </div>
       
        
      
    
    
    
  )
}

export default Main