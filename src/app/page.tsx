"use client"
import Image from 'next/image'
import { Separator } from "@/components/ui/separator"
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { Disclosure, Transition } from "@headlessui/react";
import {MdKeyboardArrowDown} from "react-icons/md";
import {CiFolderOn} from "react-icons/ci";
import {AiOutlineGithub, AiFillLinkedin, AiOutlineInstagram, AiOutlineTwitter, AiOutlineMail} from "react-icons/ai"
import { experiences, projects } from '@/lib/info';
import Link from 'next/link';
import Main from '@/components/Main';
import { useCallback, useEffect } from "react";
import type { Container, Engine } from "tsparticles-engine";
import AOS from "aos";
import 'aos/dist/aos.css';
import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.






export default function Home() {

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

  useEffect(() => {
    AOS.init({
         duration: 250,
         once: false,
       })
 }, [])
  return (
    
      

    <main className='' style={{ overflowX: 'hidden' }}>
      
      <div className='w-[90%] md:w-10/12 2xl:w-10/12 mx-auto'>
      <Main/>
      <h2 className='text-center md:text-start text-5xl font-bold mb-8' data-aos="fade-up">Experiences</h2>
        <div className='flex flex-col items-center gap-5 mb-12'>

          {experiences.map((experience, i) =>(

            <Disclosure key ={`item-${i}`} data-aos="fade-up">
                      
            <div  className='flex flex-col w-full flex-1 rounded-lg border-2 border-slate-700 hover:border-white transition-colors duration-150 p-4'>
              <p className='italic text-sm opacity-50 mb-2'>{experience.date}</p>
              
              <Disclosure.Button className='flex w-full justify-between items-center'>
                <div className='flex items-center gap-2'>
                  <div>
                  <Image
                          alt={experience.company}
                          width={40}
                          height={40}
                          className="rounded"
                          src={experience.logo}
                        />
                  </div>
                  <div>
                    <p className='font-semibold md:text-xl text-start'>{experience.company}</p>
                    <p className='md:hidden opacity-50 text-m'>{experience.role}</p>
                    
                  </div>
                  
                </div>
                <div className='flex items-center gap-2'>
                  <p className='hidden md:block font-semibold opacity-50 md:text-xl'>{experience.role}</p>
                  <span className='text-xl'><MdKeyboardArrowDown/></span>
                  
                </div>
              </Disclosure.Button>
              
              <Transition
              enter="transition duration-200 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              >
              <Disclosure.Panel className='border-l-[2px] ml-[50px] mt-2 pl-[10px] opacity-50 w-[75%]'>
                <p className='text-sm'>{experience.desc} </p>

              </Disclosure.Panel>
              </Transition>
              

              
            </div>
            </Disclosure>
            
          ))}
          
          
        </div>
        
      </div>
      <div className='w-[90%] md:w-10/12 mx-auto mb-10'>
        <h2 className='text-center md:text-start text-5xl font-bold mb-10' data-aos="fade-up">Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 w-full'>
          
          {projects.map((project, id) => (
            <div key={id} data-aos={id % 2 === 0 ? "fade-right" : "fade-left"} className='flex flex-col flex-1 rounded-md border-2 border-slate-700 hover:border-white hover:scale-105 transition-transform duration-300 p-4'>
            <div className='flex items-center justify-between mb-2'>
              <CiFolderOn size={50}/>
              <Link href={project.link}><span className='hover:opacity-50 transition-colors'><AiOutlineGithub size={25}/></span></Link>
            </div>
            <div className='flex flex-col'>
              <p className='font-semibold md:text-xl mb-1'>{project.title}</p>
              <p className='opacity-50'>{project.desc}</p>
              
            </div>
          </div>
          ))}
  
        </div>
      </div>

      <div className='w-[90%] md:w-10/12 mx-auto'>
        
          <div className='flex items-center justify-between w-full pb-12 border-t opacity-50 pt-6'>
            <p className='text-sm'>
            © Gajapriyan Vigneswaran&nbsp;
            <span className="hidden md:inline-block">2023</span>
            </p>
            <div className='flex items-center gap-2'>
              <Link href="https://github.com/GajapriyanV"><AiOutlineGithub size={25}/></Link>
              <Link href="https://twitter.com/home"><AiOutlineTwitter size={25}/></Link>
              <Link href="mailto:gajapriyan.v@gmail.com"><AiOutlineMail size={25}/></Link>
              <Link href="https://www.linkedin.com/in/gajapriyan-vigneswaran-8b5072225/"><AiFillLinkedin size={25}/></Link>
              <Link href="https://www.instagram.com/gajapriyan.15/?hl=en"><AiOutlineInstagram size={25}/></Link>
          </div>
          
        </div>
          
      </div>  
      
      
      
    </main>


  )
}
