import Image from "next/image";
import { FaGithub, FaLinkedin, FaCheck } from "react-icons/fa";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiGit } from "react-icons/si";

export default function Home() {
  return (
    <main 
      className="min-h-screen w-full relative bg-cover bg-center bg-no-repeat bg-fixed overflow-x-hidden"
      style={{
        backgroundImage: 'url("/background.jpg")',
      }}
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      
      <div className="relative z-10 w-full max-w-7xl px-4 md:px-6 lg:px-8 mx-auto">
        <section className="mb-8 flex flex-col md:flex-row md:justify-between md:px-[2.1rem] space-y-6 md:space-y-0">
          <div className="flex flex-col md:flex-row gap-4 md:gap-12 items-center md:items-start">
            <div className="flex flex-row md:flex-col gap-4 flex-wrap justify-center">
              <p className="text-[rgb(214,223,244)] font-zen text-sm md:text-base">
                📧 <a 
                  href="mailto:serhii.bahirov@gmail.com?subject=Front-End Developer CV"
                  className="hover:text-[#33415C] transition-colors duration-300"
                >
                  serhii.bahirov@gmail.com
                </a>
              </p>
              <p className="text-[rgb(214,223,244)] font-zen text-sm md:text-base">
                📱 <a 
                  href="tel:+380676328323"
                  className="hover:text-[#33415C] transition-colors duration-300"
                >
                  +380676328323
                </a>
              </p>
              <p className="text-[rgb(214,223,244)] font-zen flex items-center gap-2 text-sm md:text-base">
                <a 
                  href="https://www.linkedin.com/in/bahirovserhii/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#33415C] transition-colors duration-300"
                >
                  <FaLinkedin className="text-2xl md:text-3xl text-[#0A66C2]" />
                  LinkedIn
                </a>
              </p>
              <p className="text-[rgb(214,223,244)] font-zen flex items-center gap-2 text-sm md:text-base">
                <a 
                  href="https://github.com/bgrv14/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#33415C] transition-colors duration-300"
                >
                  <FaGithub className="text-2xl md:text-3xl" />
                  GitHub
                </a>
              </p>
            </div>

            <div className="hidden md:flex items-center ml-0 md:ml-20">
              <a 
                href="https://t.me/bgrv_14"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/qr-code.png"
                  alt="Telegram QR Code"
                  width={150}
                  height={150}
                  className="rounded-lg"
                />
              </a>
            </div>
          </div>

          <div className="text-center md:text-right">
            <h1 className="text-4xl md:text-6xl mb-4 text-[rgb(214,223,244)] font-zen">Serhii Bahirov</h1>
            <p className="text-xl md:text-2xl mb-2 text-[rgb(214,223,244)] font-zen">Trainee/Junior Front-End Developer</p>
            <p className="text-sm md:text-base text-[rgb(214,223,244)] font-zen">Kryvyi Rih, Ukraine</p>
          </div>
        </section>

        <section className="mb-12 flex flex-col md:flex-row gap-8 items-center md:justify-center">
          <div className="w-[60%] md:w-[33%] md:ml-10">
            <div className="w-full aspect-square rounded-full overflow-hidden border-4 border-[#979DAC]">
              <Image
                src="/Photo4CV.jpg"
                alt="Сергій Багіров"
                width={384}
                height={384}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="w-full md:w-[60%]">
            <p className="text-[rgb(214,223,244)] leading-relaxed text-base md:text-lg font-zen bg-[#001845]/55 rounded-lg p-6 md:p-8 backdrop-blur-md">
              I am a Trainee/Junior Front-End Developer with basic knowledge of HTML, CSS, JavaScript, and React. I am ready to start my career in IT, eager to learn quickly, and open to new challenges. I have over four years of experience in logistics, where I managed cargo transportation and organized warehouse operations. I worked with business clients, finding solutions to their issues with our company's products. I have strong communication skills and the ability to adapt quickly to new environments, which will help me successfully transition into the IT field.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <div className="flex flex-col md:flex-row mb-4 md:mb-8 md:gap-6">
            <div className="w-full md:w-[60%] text-center mb-2 md:mb-0">
              <h2 className="text-2xl md:text-3xl text-[rgb(214,223,244)] font-zen uppercase mb-4 md:mb-4">HARD SKILLS</h2>
              <div className="bg-[#001845]/55 rounded-lg p-3 md:p-4 backdrop-blur-md flex items-center mt-2 md:mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 group relative">
                      <SiHtml5 className="text-[#E34F26] text-2xl md:text-3xl" />
                      <div className="absolute invisible group-hover:visible bg-[#001845] text-[#979DAC] px-2 py-1 rounded -top-8 left-1/2 -translate-x-1/2 text-sm whitespace-nowrap">
                        HTML
                      </div>
                      <div className="flex-1 bg-[#0466C8] rounded-full">
                        <div className="h-2 bg-[#979DAC] rounded-full" style={{width: '33%'}}></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 group relative">
                      <SiCss3 className="text-[#1572B6] text-2xl md:text-3xl" />
                      <div className="absolute invisible group-hover:visible bg-[#001845] text-[#979DAC] px-2 py-1 rounded -top-8 left-1/2 -translate-x-1/2 text-sm whitespace-nowrap">
                        CSS
                      </div>
                      <div className="flex-1 bg-[#0466C8] rounded-full">
                        <div className="h-2 bg-[#979DAC] rounded-full" style={{width: '33%'}}></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 group relative">
                      <SiJavascript className="text-[#F7DF1E] text-2xl md:text-3xl" />
                      <div className="absolute invisible group-hover:visible bg-[#001845] text-[#979DAC] px-2 py-1 rounded -top-8 left-1/2 -translate-x-1/2 text-sm whitespace-nowrap">
                        JavaScript
                      </div>
                      <div className="flex-1 bg-[#0466C8] rounded-full">
                        <div className="h-2 bg-[#979DAC] rounded-full" style={{width: '33%'}}></div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 group relative">
                      <SiReact className="text-[#61DAFB] text-2xl md:text-3xl" />
                      <div className="absolute invisible group-hover:visible bg-[#001845] text-[#979DAC] px-2 py-1 rounded -top-8 left-1/2 -translate-x-1/2 text-sm whitespace-nowrap">
                        React
                      </div>
                      <div className="flex-1 bg-[#0466C8] rounded-full">
                        <div className="h-2 bg-[#979DAC] rounded-full" style={{width: '33%'}}></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 group relative">
                      <SiGit className="text-[#F05032] text-2xl md:text-3xl" />
                      <div className="absolute invisible group-hover:visible bg-[#001845] text-[#979DAC] px-2 py-1 rounded -top-8 left-1/2 -translate-x-1/2 text-sm whitespace-nowrap">
                        Git
                      </div>
                      <div className="flex-1 bg-[#0466C8] rounded-full">
                        <div className="h-2 bg-[#979DAC] rounded-full" style={{width: '33%'}}></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 group relative">
                      <div className="w-8 h-8 flex items-center justify-center bg-gradient-to-r from-[#FF4081] to-[#7C4DFF] rounded-lg">
                        <span className="text-white font-bold text-base md:text-lg">AI</span>
                      </div>
                      <div className="absolute invisible group-hover:visible bg-[#001845] text-[#979DAC] px-2 py-1 rounded -top-8 left-1/2 -translate-x-1/2 text-sm whitespace-nowrap">
                        Artificial Intelligence
                      </div>
                      <div className="flex-1 bg-[#0466C8] rounded-full">
                        <div className="h-2 bg-[#979DAC] rounded-full" style={{width: '60%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-[40%] text-center">
              <h2 className="text-2xl md:text-3xl text-[rgb(214,223,244)] font-zen uppercase mb-4 md:mb-4">SOFT SKILLS</h2>
              <div className="bg-[#001845]/55 rounded-lg p-3 md:p-4 backdrop-blur-md flex items-center justify-center mt-2 md:mt-0 md:h-[156px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-[rgb(214,223,244)] justify-start">
                    <FaCheck className="text-[rgb(214,223,244)] text-lg md:text-xl min-w-[20px]" />
                    <span className="font-zen text-sm md:text-base">Attention to detail</span>
                  </div>
                  <div className="flex items-center gap-2 text-[rgb(214,223,244)] justify-start">
                    <FaCheck className="text-[rgb(214,223,244)] text-lg md:text-xl min-w-[20px]" />
                    <span className="font-zen text-sm md:text-base">Teamwork</span>
                  </div>
                  <div className="flex items-center gap-2 text-[rgb(214,223,244)] justify-start">
                    <FaCheck className="text-[rgb(214,223,244)] text-lg md:text-xl min-w-[20px]" />
                    <span className="font-zen text-sm md:text-base">Communication skills</span>
                  </div>
                  <div className="flex items-center gap-2 text-[rgb(214,223,244)] justify-start">
                    <FaCheck className="text-[rgb(214,223,244)] text-lg md:text-xl min-w-[20px]" />
                    <span className="font-zen text-sm md:text-base">Adaptability</span>
                  </div>
                  <div className="flex items-center gap-2 text-[rgb(214,223,244)] justify-center col-span-2">
                    <FaCheck className="text-[rgb(214,223,244)] text-lg md:text-xl min-w-[20px]" />
                    <span className="font-zen text-sm md:text-base">Ability to work in a multitasking environment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl mb-4 text-[rgb(214,223,244)] font-zen text-center uppercase">LANGUAGES</h2>
          <div className="bg-[#001845]/55 rounded-lg p-4 backdrop-blur-md">
            <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-6">
              <div className="flex-1">
                <span className="text-[rgb(214,223,244)] font-zen block mb-1 text-sm md:text-base">Ukrainian</span>
                <div className="bg-[#0466C8] rounded-full">
                  <div className="h-2 bg-[#979DAC] rounded-full" style={{width: '100%'}}></div>
                </div>
              </div>
              <div className="flex-1">
                <span className="text-[rgb(214,223,244)] font-zen block mb-1 text-sm md:text-base">English</span>
                <div className="bg-[#0466C8] rounded-full">
                  <div className="h-2 bg-[#979DAC] rounded-full" style={{width: '50%'}}></div>
                </div>
              </div>
              <div className="flex-1">
                <span className="text-[rgb(214,223,244)] font-zen block mb-1 text-sm md:text-base">Russian</span>
                <div className="bg-[#0466C8] rounded-full">
                  <div className="h-2 bg-[#979DAC] rounded-full" style={{width: '90%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-center text-4xl md:text-6xl mb-8 md:mb-12 text-[rgb(214,223,244)] font-zen">Work Experience</h2>
          <div className="bg-[#001845]/55 rounded-lg p-6 md:p-8 backdrop-blur-md">
            <div className="space-y-8">
              <div>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                  <h3 className="text-[rgb(214,223,244)] text-xl md:text-2xl font-zen mb-2 md:mb-0">Junior Sergeant</h3>
                  <div className="text-left md:text-right">
                    <p className="text-[rgb(214,223,244)] text-sm md:text-base font-zen">April 2024 - October 2024</p>
                    <p className="text-[rgb(214,223,244)] text-xs md:text-sm font-zen">Kramators`k</p>
                  </div>
                </div>
                <p className="text-[rgb(214,223,244)] mb-2 text-sm md:text-base font-zen">Armed Forces of Ukraine</p>
                <ul className="list-disc list-inside text-[rgb(214,223,244)] space-y-2 text-sm md:text-base font-zen">
                  <li>Training for Junior Lieutenant</li>
                  <li>Monitoring and improving the interaction system between units</li>
                  <li>Maintaining discipline and overall unit organization</li>
                </ul>
              </div>

              <div>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                  <h3 className="text-[rgb(214,223,244)] text-xl md:text-2xl font-zen mb-2 md:mb-0">Consulting Services Manager
</h3>
                  <div className="text-left md:text-right">
                    <p className="text-[rgb(214,223,244)] text-sm md:text-base font-zen">April 2023 - April 2024</p>
                    <p className="text-[rgb(214,223,244)] text-xs md:text-sm font-zen">Kryvyi Rih</p>
                  </div>
                </div>
                <p className="text-[rgb(214,223,244)] mb-2 text-sm md:text-base font-zen">PJSC "Kyivstar"
</p>
                <ul className="list-disc list-inside text-[rgb(214,223,244)] space-y-2 text-sm md:text-base font-zen">
                  <li>Providing professional support and assistance in problem-solving</li>
                  <li>Active participation in the sales of company products</li>
                  <li>Systematic sales reporting</li>
                </ul>
              </div>

              <div>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                  <h3 className="text-[rgb(214,223,244)] text-xl md:text-2xl font-zen mb-2 md:mb-0">Logistics Manager</h3>
                  <div className="text-left md:text-right">
                    <p className="text-[rgb(214,223,244)] text-sm md:text-base font-zen">March 2019 - April 2023</p>
                    <p className="text-[rgb(214,223,244)] text-xs md:text-sm font-zen">Kryvyi Rih</p>
                  </div>
                </div>
                <p className="text-[rgb(214,223,244)] mb-2 text-sm md:text-base font-zen">LLC "SV TEK"</p>
                <ul className="list-disc list-inside text-[rgb(214,223,244)] space-y-2 text-sm md:text-base font-zen">
                  <li>Organizing and overseeing cargo transportation both internationally and within Ukraine</li>
                  <li>Responsible for preparing the necessary documentation for transportation</li>
                  <li>Organizing warehouse logistics for storage and efficient cargo distribution</li>
                  <li>Coordinating cargo transportation to customers' warehouses for timely delivery</li>
                  <li>Searching for and selecting reliable carriers, organizing their work, and ensuring contract compliance</li>
                  <li>Interacting with customs authorities and ensuring timely customs clearance of cargo</li>
                </ul>
              </div>

              <div>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                  <h3 className="text-[rgb(214,223,244)] text-xl md:text-2xl font-zen mb-2 md:mb-0">Surveyor</h3>
                  <div className="text-left md:text-right">
                    <p className="text-[rgb(214,223,244)] text-sm md:text-base font-zen">January 2018 - March 2018</p>
                    <p className="text-[rgb(214,223,244)] text-xs md:text-sm font-zen">Dnipro</p>
                  </div>
                </div>
                <p className="text-[rgb(214,223,244)] mb-2 text-sm md:text-base font-zen">PP "Asgard"</p>
                <ul className="list-disc list-inside text-[rgb(214,223,244)] space-y-2 text-sm md:text-base font-zen">
                  <li>Conducting field trips for topographic surveys and data collection</li>
                  <li>Processing collected data using computer software</li>
                  <li>Creating topographic maps for construction projects</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-center text-4xl md:text-6xl mb-8 md:mb-12 text-[rgb(214,223,244)] font-zen">Education</h2>
          <div className="bg-[#001845]/55 rounded-lg p-6 md:p-8 backdrop-blur-md">
            <div className="space-y-6">
              <div>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                  <h3 className="text-[rgb(214,223,244)] text-xl md:text-2xl font-zen mb-2 md:mb-0">Front-End Developer</h3>
                  <p className="text-[rgb(214,223,244)] text-sm md:text-base font-zen">October 2024 - January 2024</p>
                </div>
                <p className="text-[rgb(214,223,244)] text-sm md:text-base font-zen">Robot_Dreams</p>
              </div>
              <div>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                  <h3 className="text-[rgb(214,223,244)] text-xl md:text-2xl font-zen mb-2 md:mb-0">English Language Course</h3>
                  <p className="text-[rgb(214,223,244)] text-sm md:text-base font-zen">May 2021 - January 2022</p>
                </div>
                <p className="text-[rgb(214,223,244)] text-sm md:text-base font-zen">English Language School "O'key English Studio"</p>
              </div>
              <div>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                  <h3 className="text-[rgb(214,223,244)] text-xl md:text-2xl font-zen mb-2 md:mb-0">Geodesy and Land Management - Master's Degree</h3>
                  <p className="text-[rgb(214,223,244)] text-sm md:text-base font-zen">September 2017 - December 2018</p>
                </div>
                <p className="text-[rgb(214,223,244)] text-sm md:text-base font-zen">Kryvyi Rih National University</p>
              </div>
              <div>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                  <h3 className="text-[rgb(214,223,244)] text-xl md:text-2xl font-zen mb-2 md:mb-0">Geodesy, Cartography, and Land Management - Bachelor's Degree</h3>
                  <p className="text-[rgb(214,223,244)] text-sm md:text-base font-zen">September 2013 - June 2017</p>
                </div>
                <p className="text-[rgb(214,223,244)] text-sm md:text-base font-zen">Kryvyi Rih National University</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
